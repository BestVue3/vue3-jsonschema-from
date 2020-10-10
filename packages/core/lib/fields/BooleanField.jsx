import { defineComponent, computed } from 'vue';
import { BuiltInWidgets } from '../theme';
import { CommonFieldPropsDefine } from '../types';
import { useCommonField } from './common';
const Comp = defineComponent({
    name: 'BooleanField',
    props: CommonFieldPropsDefine,
    setup(props) {
        const { ComponentRef, rendererPropsRef } = useCommonField(props, BuiltInWidgets.CheckboxWidget);
        const handleChangeRef = computed(() => {
            const { onChange } = props;
            return (v) => {
                // TODO: 处理空值
                onChange(v);
            };
        });
        const { value, schema } = props;
        if (value === undefined || typeof value !== 'boolean') {
            if (typeof schema.default === 'boolean') {
                handleChangeRef.value(schema.default);
            }
            else {
                handleChangeRef.value(!!value);
            }
        }
        return () => {
            const BooleanRenderer = ComponentRef.value;
            return (<BooleanRenderer {...rendererPropsRef.value} onChange={handleChangeRef.value}/>);
        };
    },
});
export default Comp;
