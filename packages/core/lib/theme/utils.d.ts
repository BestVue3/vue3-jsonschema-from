import { ComponentPublicInstance, ExtractPropTypes } from 'vue';
import { Schema } from '../types';
import { CommonWidgetPropsDefine } from '../types';
declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance> = {
    new (): T;
};
export declare type WidgetComponentType = ComponentPublicInstance<ExtractPropTypes<typeof CommonWidgetPropsDefine>>;
export declare type WidgetComponentDefine = ComponentPublicInstanceConstructor<WidgetComponentType>;
export declare enum BuiltInWidgets {
    CheckboxWidget = "CheckboxWidget",
    CheckboxesWidget = "CheckboxesWidget",
    RadioWidget = "RadioWidget",
    SelectWidget = "SelectWidget",
    HiddenWidget = "HiddenWidget",
    TextWidget = "TextWidget",
    PasswordWidget = "PasswordWidget",
    EmailWidget = "EmailWidget",
    URLWidget = "URLWidget",
    TextareaWidget = "TextareaWidget",
    DateWidget = "DateWidget",
    DateTimeWidget = "DateTimeWidget",
    ColorWidget = "ColorWidget",
    RangeWidget = "RangeWidget",
    NumberWidget = "NumberWidget"
}
export declare type RegisteredWidgets = {
    [k in BuiltInWidgets]: WidgetComponentDefine;
} & {
    [k: string]: WidgetComponentDefine;
} & {
    NotFoundWidget?: WidgetComponentDefine;
};
export declare function getWidget(schema: Schema, widget: any, // key of widgets | Component | key of some other string
registeredWidgets: RegisteredWidgets): WidgetComponentDefine;
export {};
