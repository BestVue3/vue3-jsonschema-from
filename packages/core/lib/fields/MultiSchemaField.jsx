import { defineComponent, computed, reactive, watchEffect } from 'vue';
import { CommonFieldPropsDefine } from '../types';
import { useVJSFContext } from '../Context';
import { getMatchingOption, guessType, getDefaultFormState } from '../utils';
import { retrieveSchema } from '../schema';
import { useWidget } from '../theme';
export default defineComponent({
    name: 'MultiSchemaField',
    props: {
        ...CommonFieldPropsDefine,
        options: {
            type: Array,
            required: true,
        },
        baseType: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const state = reactive({
            selectedOption: 0,
        });
        const formContextRef = useVJSFContext();
        const isValidRef = computed(() => {
            const { validate } = formContextRef.value;
            return (schema, data) => validate(schema, data).valid;
        });
        function getMatchingOptionLocal(data, options) {
            // const { rootSchema } = props
            let option = getMatchingOption(data, options, isValidRef.value);
            if (option !== 0) {
                return option;
            }
            // If the form data matches none of the options, use the currently selected
            // option, assuming it's available; otherwise use the first option
            return state.selectedOption || 0;
        }
        const onOptionChange = (option) => {
            const selectedOption = parseInt(option, 10);
            const { value, onChange, options } = props;
            const { rootSchema } = props;
            const newOption = retrieveSchema(options[selectedOption], rootSchema, value);
            // If the new option is of type object and the current data is an object,
            // discard properties added using the old option.
            let newFormData = undefined;
            if (guessType(value) === 'object' &&
                (newOption.type === 'object' || newOption.properties)) {
                newFormData = Object.assign({}, value);
                const optionsToDiscard = options.slice();
                optionsToDiscard.splice(selectedOption, 1);
                // Discard any data added using other options
                for (const option of optionsToDiscard) {
                    if (option.properties) {
                        for (const key in option.properties) {
                            if (newFormData.hasOwnProperty(key)) {
                                delete newFormData[key];
                            }
                        }
                    }
                }
            }
            // Call getDefaultFormState to make sure defaults are populated on change.
            onChange(getDefaultFormState(options[selectedOption], newFormData));
            state.selectedOption = selectedOption;
        };
        const WidgetRef = computed(() => {
            const { uiSchema } = props;
            const { widget = 'select' } = uiSchema;
            return useWidget({ type: 'number' }, widget).value;
        });
        watchEffect(() => {
            state.selectedOption = getMatchingOptionLocal(props.value, props.options);
        });
        return () => {
            const { options, baseType, id, schema, uiSchema, value, onChange, ...rest } = props;
            const SchemaItem = formContextRef.value.SchemaItem;
            // const { widgets } = registry;
            const { selectedOption } = state;
            // const { widget = "select", ...uiOptions } = getUiOptions(uiSchema);
            // const Widget = getWidget({ type: "number" }, widget, widgets);
            const Widget = WidgetRef.value;
            const option = options[selectedOption] || null;
            let optionSchema;
            if (option) {
                // If the subschema doesn't declare a type, infer the type from the
                // parent schema
                optionSchema = option.type
                    ? option
                    : Object.assign({}, option, { type: baseType });
            }
            const enumOptions = options.map((option, index) => ({
                key: option.title || `Option ${index + 1}`,
                value: index,
            }));
            return (<>
          <Widget {...rest} title="test" uiSchema={{}} id={`${id}${schema.oneOf ? '__oneof_select' : '__anyof_select'}`} schema={{ type: 'number', default: 0 }} onChange={onOptionChange} value={selectedOption} options={{ ...uiSchema, enumOptions }}/>

          {option !== null && (<SchemaItem id={id} schema={optionSchema} uiSchema={uiSchema} 
            // errorSchema={errorSchema}
            value={value} onChange={onChange} {...rest}/>)}
        </>);
        };
    },
});
