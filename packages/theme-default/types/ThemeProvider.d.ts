import { Theme } from '@v3jsf/core';
import { SetupContext, PropType } from 'vue';
export declare const widgets: {
    TextWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    TextareaWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    CheckboxWidget: import("vue").DefineComponent<{
        title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        errors: {
            readonly type: PropType<string[]>;
        };
        options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        value: {
            readonly required: true;
        };
        schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    CheckboxesWidget: import("vue").DefineComponent<{
        title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        errors: {
            readonly type: PropType<string[]>;
        };
        options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        value: {
            readonly required: true;
        };
        schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    RadioWidget: import("vue").DefineComponent<{
        title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        errors: {
            readonly type: PropType<string[]>;
        };
        options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        value: {
            readonly required: true;
        };
        schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    SelectWidget: import("vue").DefineComponent<{
        title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        errors: {
            readonly type: PropType<string[]>;
        };
        options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        value: {
            readonly required: true;
        };
        schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    HiddenWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    PasswordWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    EmailWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    URLWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    DateWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    DateTimeWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    ColorWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    RangeWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    NumberWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("@v3jsf/core/types").WidgetOptions>;
            readonly required: true;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("@v3jsf/core/types").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("@v3jsf/core/types").UISchema>;
            readonly required: true;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        options: import("@v3jsf/core/types").WidgetOptions;
        id: string;
        path: string;
        value: unknown;
        schema: import("@v3jsf/core/types").Schema;
        rootSchema: import("@v3jsf/core/types").Schema;
        uiSchema: import("@v3jsf/core/types").UISchema;
        onChange: (value: any) => void;
        required: boolean;
        isDependenciesKey: boolean;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
};
export declare const layouts: {
    Form: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
    Header: import("vue").DefineComponent<{
        title: {
            type: PropType<string>;
            required: true;
        };
        type: {
            type: PropType<"object" | "array">;
            required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        type: "object" | "array";
    } & {}>, {}>;
    SingleTypeArrayWrapper: import("vue").DefineComponent<{
        readonly onDown: {
            readonly type: PropType<() => void>;
            readonly required: true;
        };
        readonly onUp: {
            readonly type: PropType<() => void>;
            readonly required: true;
        };
        readonly onDelete: {
            readonly type: PropType<() => void>;
            readonly required: true;
        };
        readonly onAdd: {
            readonly type: PropType<() => void>;
            readonly required: true;
        };
        readonly length: {
            readonly type: NumberConstructor;
            readonly required: true;
        };
        readonly index: {
            readonly type: NumberConstructor;
            readonly required: true;
        };
        readonly title: {
            readonly type: StringConstructor;
            readonly required: true;
        };
        readonly controls: {
            readonly type: PropType<{
                sortable?: boolean | undefined;
                removable?: boolean | undefined;
                addable?: boolean | undefined;
            }>;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title: string;
        length: number;
        onDown: () => void;
        onUp: () => void;
        onDelete: () => void;
        onAdd: () => void;
        index: number;
    } & {
        controls?: {
            sortable?: boolean | undefined;
            removable?: boolean | undefined;
            addable?: boolean | undefined;
        } | undefined;
    }>, {}>;
};
export declare const theme: Theme;
interface Props<T> {
    theme?: Theme;
    styleTheme?: T;
}
declare function VjsfDefaultThemeProvider<T>(props: Props<T>, { slots }: SetupContext): JSX.Element;
declare namespace VjsfDefaultThemeProvider {
    var props: {
        theme: {
            type: PropType<Theme>;
        };
        styleTheme: {
            type: ObjectConstructor;
        };
    };
}
export default VjsfDefaultThemeProvider;
//# sourceMappingURL=ThemeProvider.d.ts.map