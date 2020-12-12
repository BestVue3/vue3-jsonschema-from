import { PropType, DefineComponent } from 'vue';
import { RegisteredWidgets } from './utils';
import { SingleTypeArrayDefine } from './types';
export declare enum ThemeLayoutsNames {
    Form = "Form",
    SingleTypeArrayWrapper = "SingleTypeArrayWrapper",
    Header = "Header"
}
export declare enum ThemeRendererComponentNames {
    StringRenderer = "StringRenderer",
    NumberRenderer = "NumberRenderer",
    ArrayRenderer = "ArrayRenderer",
    BooleanRenderer = "BooleanRenderer"
}
export declare type FormDefine = DefineComponent<any, {}, {}>;
export declare type HeaderDefine = DefineComponent<any, {}, {}>;
export interface Layouts {
    [ThemeLayoutsNames.Form]: FormDefine;
    [ThemeLayoutsNames.SingleTypeArrayWrapper]: SingleTypeArrayDefine;
    [ThemeLayoutsNames.Header]: HeaderDefine;
}
export interface Theme {
    layouts: Layouts;
    widgets: RegisteredWidgets;
}
declare const _default: DefineComponent<{
    theme: {
        type: PropType<Theme>;
        required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    theme: Theme;
} & {}>, {}>;
export default _default;
//# sourceMappingURL=ThemeProvider.d.ts.map