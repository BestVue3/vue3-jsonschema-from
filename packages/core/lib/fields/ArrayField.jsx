import { defineComponent, computed } from 'vue';
import { createUseStyles } from 'vue-jss';
import { ThemeLayoutsNames, useComponent, BuiltInWidgets, } from '../theme';
import { CommonFieldPropsDefine } from '../types';
import { useCommonField } from './common';
import { useVJSFContext } from '../Context';
import { isObject } from '../utils';
import AddIcon from './icons/add';
const useStyles = createUseStyles({
    addBtn: {
        border: '1px solid #aaa',
        padding: '10px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        background: '#fefefe',
        cursor: 'pointer',
        marginBottom: 20,
    },
});
var ArrayItemAction;
(function (ArrayItemAction) {
    ArrayItemAction["ADD"] = "add";
    ArrayItemAction["DELETE"] = "delete";
    ArrayItemAction["DOWN"] = "down";
    ArrayItemAction["UP"] = "up";
})(ArrayItemAction || (ArrayItemAction = {}));
const Comp = defineComponent({
    name: 'ArrayField',
    props: CommonFieldPropsDefine,
    setup(props) {
        const { ComponentRef, rendererPropsRef, schemaTitleRef } = useCommonField(props, BuiltInWidgets.NumberWidget);
        const SingleTypeArrayWrapperRef = useComponent(ThemeLayoutsNames.SingleTypeArrayWrapper);
        const HeaderRef = useComponent(ThemeLayoutsNames.Header);
        const formContextRef = useVJSFContext();
        const handleChangeRef = computed(() => {
            const { onChange } = props;
            return (v) => {
                // TODO: 处理空值
                onChange(v);
            };
        });
        const isSingleTypeRef = computed(() => {
            return (typeof props.schema.items === 'object' &&
                !Array.isArray(props.schema.items));
        });
        const { value, schema } = props;
        if (value === undefined || !Array.isArray(value)) {
            if (Array.isArray(schema.default)) {
                handleChangeRef.value(schema.default);
            }
        }
        const handleValueChange = (index, v) => {
            console.log('------------------>', props.value);
            const value = props.value || [];
            // ;(props.value as any)[index] = v
            value[index] = v;
            props.onChange(value);
        };
        const arrayItemAction = (action, index) => {
            const schema = props.schema;
            const value = props.value || [];
            const len = value.length;
            switch (action) {
                case ArrayItemAction.DOWN: {
                    if (index < len - 1) {
                        const item = value.splice(index, 1);
                        value.splice(index + 1, 0, item);
                    }
                    break;
                }
                case ArrayItemAction.UP: {
                    if (index > 0) {
                        const item = value.splice(index, 1);
                        value.splice(index - 1, 0, item);
                    }
                    break;
                }
                case ArrayItemAction.ADD: {
                    // TODO: should use default value of type
                    value.splice(index + 1, 0, schema.default || undefined);
                    break;
                }
                case ArrayItemAction.DELETE: {
                    value.splice(index, 1);
                    break;
                }
                default: {
                    console.warn(`array action of ${action} is not supported`);
                }
            }
            props.onChange(value);
        };
        const isMultiSelectionRef = computed(() => {
            const { schema, uiSchema } = props;
            const items = schema.items;
            return (uiSchema?.widget ||
                (items &&
                    isObject(items) &&
                    (items.enum || items.enumKeyValue)));
        });
        const classesRef = useStyles();
        return () => {
            const ArrayRenderer = ComponentRef.value;
            const Header = HeaderRef.value;
            const SchemaItem = formContextRef.value.SchemaItem;
            const { value, schema, path, rootSchema, uiSchema } = props;
            const isSingleType = isSingleTypeRef.value;
            const isMultiType = Array.isArray(schema.items);
            const arr = value || [];
            const isMultiSelection = isMultiSelectionRef.value;
            const commonProps = {
                isDependenciesKey: false,
                required: false,
                requiredError: false,
                rootSchema: rootSchema,
            };
            const classes = classesRef.value;
            let content;
            if (schema.additionalItems) {
                console.warn('additionalItems not supported yet');
            }
            if (isMultiSelection) {
                content = (<ArrayRenderer {...rendererPropsRef.value} onChange={handleChangeRef.value}/>);
            }
            else if (isSingleType) {
                const SingleTypeArrayWrapper = SingleTypeArrayWrapperRef.value;
                content =
                    arr.length > 0 ? (arr.map((item, index) => (<SingleTypeArrayWrapper onDown={() => arrayItemAction(ArrayItemAction.DOWN, index)} onUp={() => arrayItemAction(ArrayItemAction.UP, index)} onDelete={() => arrayItemAction(ArrayItemAction.DELETE, index)} onAdd={() => arrayItemAction(ArrayItemAction.ADD, index)} length={arr.length} index={index} title={rendererPropsRef.value.title}>
                <SchemaItem {...commonProps} id={`${props.id}_${index}`} path={`${path}/${index}`} key={index} value={arr[index]} onChange={(v) => handleValueChange(index, v)} schema={schema.items} uiSchema={uiSchema?.items}/>
              </SingleTypeArrayWrapper>))) : (<a onClick={() => arrayItemAction(ArrayItemAction.ADD, 0)} class={classes.addBtn}>
              <AddIcon /> {schemaTitleRef.value || props.path}
            </a>);
            }
            else if (isMultiType) {
                const itemTypes = schema.items;
                content = itemTypes.map((item, index) => (<SchemaItem {...commonProps} id={`${props.id}_${index}`} schema={item} key={index} path={`${path}/${index}`} value={value[index]} onChange={(v) => handleValueChange(index, v)} uiSchema={(uiSchema?.items &&
                    uiSchema.items[index]) ||
                    {}}/>));
            }
            else {
                content = (<ArrayRenderer {...rendererPropsRef.value} onChange={handleChangeRef.value}/>);
            }
            return [
                schemaTitleRef.value ? (<Header title={schemaTitleRef.value} type="array"/>) : null,
                content,
            ];
            // return (
            //   <ArrayRenderer
            //     {...rendererPropsRef.value}
            //     onChange={handleChangeRef.value}
            //   />
            // )
        };
    },
});
export default Comp;
