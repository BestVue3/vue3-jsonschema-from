import { defineComponent, computed } from 'vue';
import { BuiltInWidgets } from '../theme';
import { CommonWidgetPropsDefine } from '../types';
import { useCommonField } from './common';
const Comp = defineComponent({
    name: 'NumberField',
    props: CommonWidgetPropsDefine,
    setup(props) {
        const { ComponentRef, rendererPropsRef } = useCommonField(props, BuiltInWidgets.NumberWidget);
        const handleChangeRef = computed(() => {
            const { onChange } = props;
            return (v) => {
                const num = Number(v);
                if (Number.isNaN(num))
                    onChange(undefined);
                else
                    onChange(num);
            };
        });
        const { value, schema } = props;
        if (value === undefined || typeof value !== 'number') {
            if (typeof schema.default === 'number') {
                handleChangeRef.value(schema.default);
            }
        }
        return () => {
            const NumberRenderer = ComponentRef.value;
            return (<NumberRenderer {...rendererPropsRef.value} onChange={handleChangeRef.value}/>);
        };
    },
});
export default Comp;
