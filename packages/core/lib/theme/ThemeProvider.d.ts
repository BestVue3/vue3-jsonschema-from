import { ComponentPublicInstance, ExtractPropTypes } from 'vue';
import type { PropType } from 'vue';
import { CommonFieldPropsDefine } from '../types';
import { RegisteredWidgets } from './utils';
declare const HeaderProps: {
    readonly title: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly type: {
        readonly type: PropType<"object" | "array">;
        readonly required: true;
    };
};
declare type RendererComponentType = ComponentPublicInstance<ExtractPropTypes<typeof CommonFieldPropsDefine>>;
declare type HeaderComponentType = ComponentPublicInstance<ExtractPropTypes<typeof HeaderProps>>;
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
declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance> = {
    new (): T;
};
export declare type RendererComponentDefine = ComponentPublicInstanceConstructor<RendererComponentType>;
export declare type FormDefine = ComponentPublicInstanceConstructor<ComponentPublicInstance<any>>;
export declare type HeaderDefine = ComponentPublicInstanceConstructor<HeaderComponentType>;
export declare type SingleTypeArrayDefine = ComponentPublicInstanceConstructor<ComponentPublicInstance<any>>;
export interface Components {
    [ThemeLayoutsNames.Form]: FormDefine;
    [ThemeLayoutsNames.SingleTypeArrayWrapper]: SingleTypeArrayDefine;
    [ThemeLayoutsNames.Header]: HeaderDefine;
    [ThemeRendererComponentNames.StringRenderer]: RendererComponentDefine;
    [ThemeRendererComponentNames.NumberRenderer]: RendererComponentDefine;
    [ThemeRendererComponentNames.ArrayRenderer]: RendererComponentDefine;
    [ThemeRendererComponentNames.BooleanRenderer]: RendererComponentDefine;
}
export interface Layouts {
    [ThemeLayoutsNames.Form]: FormDefine;
    [ThemeLayoutsNames.SingleTypeArrayWrapper]: SingleTypeArrayDefine;
    [ThemeLayoutsNames.Header]: HeaderDefine;
}
export interface Theme {
    layouts: Layouts;
    widgets: RegisteredWidgets;
}
declare const _default: import("vue").DefineComponent<{
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
