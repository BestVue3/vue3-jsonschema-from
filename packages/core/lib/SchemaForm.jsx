import { defineComponent, computed, provide, watch, isRef, ref } from 'vue';
const i18n = require('ajv-i18n');
import { useComponent, ThemeLayoutsNames as TCN } from './theme';
import { VJSFContext } from './Context';
import { createInstance } from './validator';
import SchemaItem from './SchemaItem';
import { SchemaFormPropsDefine } from './types';
function transformeOptions(props) {
    return computed(() => {
        const { ajvInstanceOptions, plugins } = props;
        // debugger
        const ajvOptions = {
            options: ajvInstanceOptions || {},
            formats: [],
            keywords: [],
        };
        /**
         * TODO: 是否需要默认的map
         */
        const formatMaps = {
            string: {},
            number: {}
        };
        const keywordTransforms = {};
        const innerPlugins = plugins ? (Array.isArray(plugins)
            ? plugins
            : [plugins]) : [];
        innerPlugins.forEach((plugin) => {
            const { customFormats, customKeywords } = plugin;
            if (customFormats && Array.isArray(customFormats)) {
                customFormats.forEach(({ name, definition, component }) => {
                    const type = definition && definition.type;
                    if (component) {
                        if (type)
                            formatMaps[type][name] = component;
                        else {
                            formatMaps.string[name] = component;
                            formatMaps.number[name] = component;
                        }
                    }
                    const formats = ajvOptions.formats || [];
                    formats.push({
                        name,
                        definition,
                    });
                });
            }
            if (customKeywords && Array.isArray(customKeywords)) {
                customKeywords.forEach(({ name, definition, transformSchema }) => {
                    const keywords = ajvOptions.keywords || [];
                    keywords.push({
                        name,
                        definition,
                    });
                    if (transformSchema && typeof transformSchema === 'function') {
                        if (keywordTransforms[name]) {
                            console.warn(`keyword ${name} already registered, please conside change to another keyword`);
                        }
                        keywordTransforms[name] = transformSchema;
                    }
                });
            }
        });
        return {
            ajvOptions,
            formatMaps,
            keywordTransforms,
        };
    });
}
export default defineComponent({
    name: 'JsonSchemaForm',
    props: SchemaFormPropsDefine,
    setup(props, { slots }) {
        const Form = useComponent(TCN.Form);
        /**
         * TODO: change of props.value & props.schema should reset errors?
         */
        const formErrorsRef = ref([]);
        const handleChange = (value) => {
            const onChange = props.onChange;
            onChange(value);
            // return (value: any) => {
            //   onChange(value)
            // }
        };
        const transformedOptions = transformeOptions(props);
        const validator = computed(() => {
            const { ajvOptions } = transformedOptions.value;
            return createInstance(ajvOptions);
        });
        const context = computed(() => {
            const { locale } = props;
            const { formatMaps } = transformedOptions.value;
            const v = validator.value;
            return {
                formatMaps,
                SchemaItem,
                validate: (schema, data) => {
                    const valid = v.validate(schema, data);
                    i18n[locale](v.errors);
                    const errors = v.errors;
                    return {
                        valid,
                        errors,
                    };
                },
                errors: formErrorsRef.value
            };
        });
        provide(VJSFContext, context);
        watch(() => props.contextRef, (ref) => {
            if (isRef(ref)) {
                ref.value = {
                    doValidate: () => {
                        try {
                            const valid = validator.value.validate(props.schema, props.value);
                            formErrorsRef.value = validator.value.errors || [];
                            i18n[props.locale](validator.value.errors);
                            return {
                                valid,
                                errors: validator.value.errors
                            };
                        }
                        catch (err) {
                            // TODO: add schemaError
                            return {
                                valid: false,
                                errors: []
                            };
                        }
                    }
                };
            }
        }, { immediate: true });
        return () => {
            const { formProps, value, schema, uiSchema } = props;
            return (<Form.value {...formProps}>
          <SchemaItem id="root" required={false} requiredError={false} isDependenciesKey={false} value={value} rootSchema={schema} uiSchema={uiSchema || {}} schema={schema} path="" onChange={handleChange}/>
        </Form.value>);
        };
    },
});
