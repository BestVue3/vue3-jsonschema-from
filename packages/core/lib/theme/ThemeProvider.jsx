import { defineComponent, computed, provide } from 'vue';
import { ComponentsContext } from './Context';
import NotFoundWidget from './NotFoundWidget';
const HeaderProps = {
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
};
// export type FORM = 'Form' | string
export var ThemeLayoutsNames;
(function (ThemeLayoutsNames) {
    ThemeLayoutsNames["Form"] = "Form";
    ThemeLayoutsNames["SingleTypeArrayWrapper"] = "SingleTypeArrayWrapper";
    ThemeLayoutsNames["Header"] = "Header";
})(ThemeLayoutsNames || (ThemeLayoutsNames = {}));
export var ThemeRendererComponentNames;
(function (ThemeRendererComponentNames) {
    ThemeRendererComponentNames["StringRenderer"] = "StringRenderer";
    ThemeRendererComponentNames["NumberRenderer"] = "NumberRenderer";
    ThemeRendererComponentNames["ArrayRenderer"] = "ArrayRenderer";
    ThemeRendererComponentNames["BooleanRenderer"] = "BooleanRenderer";
})(ThemeRendererComponentNames || (ThemeRendererComponentNames = {}));
export default defineComponent({
    name: "ThemeProvider",
    props: {
        theme: {
            type: Object,
            required: true
        },
    },
    setup(props, { slots }) {
        const components = computed(() => {
            const { theme } = props;
            return {
                layouts: theme.layouts,
                widgets: {
                    ...theme.widgets,
                    NotFoundWidget,
                }
            };
        });
        provide(ComponentsContext, components);
        return () => {
            if (!slots.default || typeof slots.default !== 'function') {
                throw new Error(`default slot of ThemeProvider should be function`);
            }
            return slots.default && slots.default();
        };
    },
});
