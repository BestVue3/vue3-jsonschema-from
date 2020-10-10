import { defineComponent, ref, computed } from 'vue';
import { CommonFieldPropsDefine } from '../types';
import { isObject } from '../utils';
import { useVJSFContext } from '../Context';
import { useComponent, ThemeLayoutsNames } from '../theme';
import { getUiSchema } from './common';
export default defineComponent({
    name: 'ObjectField',
    props: CommonFieldPropsDefine,
    setup(props) {
        const valueRef = ref({});
        const formContextRef = useVJSFContext();
        const { schema } = props;
        if (!props.value || !isObject(props.value)) {
            if (schema.default && isObject(schema.default)) {
                props.onChange(schema.default);
            }
            else if (!isObject(props.value)) {
                props.onChange(undefined);
            }
        }
        // const retrievedSchemaRef = computed(() => {
        //   const { schema, rootSchema, value } = props
        //   return retrieveSchema(schema, rootSchema, value)
        // })
        const HeaderRef = useComponent(ThemeLayoutsNames.Header);
        // const propertiesUiSchemaRef = computed(() => {
        //   const uiSchema = props.uiSchema || {}
        //   return uiSchema.properties || {}
        // })
        // const propertiesRef = computed(() => {
        //   if (retrievedSchemaRef.value.properties) {
        //     console.warn(
        //       'schema of type object contain no properties',
        //       props.schema,
        //     )
        //   }
        //   return retrievedSchemaRef.value.properties
        // })
        const handlePropertyChange = (k, v) => {
            // props.value[key]
            const value = props.value || {};
            if (v === undefined) {
                delete value[k];
            }
            else {
                /**
                 * since our value is always object and will be nested very deep
                 * we decide to mutate object prop field directly
                 * but we still will trigger `onChange` to notify parent
                 * in case parent have some action to do
                 * it is not recommend to do it this way
                 * but if we force update object filed at top level
                 * it may cause performance issue and also
                 * it will be to complex to manager
                 * we stil not found any problem when we doing so
                 * so we will keep doing it this way
                 */
                value[k] = v;
            }
            props.onChange(value);
        };
        const objectErrorsRef = computed(() => {
            const errors = formContextRef.value.errors;
            const objErrors = errors.filter((e) => e.dataPath === props.path);
            return objErrors;
        });
        const requiredErrorKeysRef = computed(() => {
            const set = new Set();
            objectErrorsRef.value
                .filter((e) => e.keyword === 'required')
                .forEach((e) => {
                set.add(e.params.missingProperty);
            });
            return Array.from(set);
        });
        const uiSchemaRef = getUiSchema(props);
        const titleRef = computed(() => {
            const vjsf = uiSchemaRef.value;
            return props.schema.title || (vjsf ? vjsf.title : '');
        });
        const propertiesRef = computed(() => {
            const { uiSchema, schema } = props;
            // const schema = retrievedSchemaRef.value
            const properties = schema.properties || {};
            const propertiesOrder = uiSchema && uiSchema.propertiesOrder;
            if (!propertiesOrder)
                return Object.keys(properties);
            else {
                const before = [];
                const after = [];
                const keys = new Set(Object.keys(properties));
                let isBefore = true;
                let alreadyHandleLeft = false;
                propertiesOrder.forEach(k => {
                    const arr = isBefore ? before : after;
                    if (keys.has(k) && k !== '*') {
                        arr.push(k);
                        keys.delete(k);
                    }
                    else if (k === '*') {
                        isBefore = false;
                        alreadyHandleLeft = true;
                    }
                });
                return [...before, ...keys, ...after];
            }
        });
        return () => {
            // console.log('............', retrievedSchemaRef.value)
            const { path, value, schema, rootSchema, uiSchema } = props;
            const requiredErrorKeys = requiredErrorKeysRef.value;
            // const schema = retrievedSchemaRef.value
            const SchemaItem = formContextRef.value.SchemaItem;
            const Header = HeaderRef.value;
            const requires = schema.required || [];
            if (!schema.properties) {
                console.warn('schema of type object contain no properties', props.schema);
            }
            const properties = schema.properties || {};
            // const dependencies = originalSchema.dependencies || {}
            const title = titleRef.value;
            return [
                title ? <Header title={title} type="object"></Header> : null,
                propertiesRef.value.map((k) => {
                    const fieldUiSchema = uiSchema && uiSchema.properties ? uiSchema.properties[k] : undefined;
                    return (<SchemaItem id={`${props.id}_k`} path={`${path}/${k}`} key={k} value={value && value[k]} onChange={(v) => handlePropertyChange(k, v)} 
                    // TODO:
                    isDependenciesKey={false} required={requires.indexOf(k) > -1} requiredError={requiredErrorKeys.indexOf(k) > -1} schema={properties[k]} rootSchema={rootSchema} uiSchema={fieldUiSchema || {}}/>);
                }),
            ];
        };
    },
});
