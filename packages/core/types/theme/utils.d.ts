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
export declare const widgetMap: {
    boolean: {
        checkbox: BuiltInWidgets;
        radio: BuiltInWidgets;
        select: BuiltInWidgets;
        hidden: BuiltInWidgets;
    };
    string: {
        text: BuiltInWidgets;
        password: BuiltInWidgets;
        email: BuiltInWidgets;
        hostname: BuiltInWidgets;
        ipv4: BuiltInWidgets;
        ipv6: BuiltInWidgets;
        uri: BuiltInWidgets;
        radio: BuiltInWidgets;
        select: BuiltInWidgets;
        textarea: BuiltInWidgets;
        hidden: BuiltInWidgets;
        date: BuiltInWidgets;
        datetime: BuiltInWidgets;
        'date-time': BuiltInWidgets;
        color: BuiltInWidgets;
    };
    number: {
        text: BuiltInWidgets;
        select: BuiltInWidgets;
        number: BuiltInWidgets;
        range: BuiltInWidgets;
        radio: BuiltInWidgets;
        hidden: BuiltInWidgets;
    };
    integer: {
        text: BuiltInWidgets;
        select: BuiltInWidgets;
        number: BuiltInWidgets;
        range: BuiltInWidgets;
        radio: BuiltInWidgets;
        hidden: BuiltInWidgets;
    };
    array: {
        select: BuiltInWidgets;
        checkboxes: BuiltInWidgets;
        hidden: BuiltInWidgets;
    };
};
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
//# sourceMappingURL=utils.d.ts.map