import { Theme } from 'vue3-jsonschema-form';
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    CheckboxWidget: import("vue").DefineComponent<{
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<string[]>;
        };
        readonly options: {
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    CheckboxesWidget: import("vue").DefineComponent<{
        enumOptions: {
            type: PropType<{
                key: string | number;
                value: string | number;
            }[]>;
            required: true;
        };
        title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        errors: {
            readonly type: PropType<string[]>;
        };
        options: {
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
        enumOptions: {
            key: string | number;
            value: string | number;
        }[];
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
    } & {
        errors?: string[] | undefined;
    }>, {}>;
    SelectWidget: import("vue").DefineComponent<{
        multiple: {
            type: BooleanConstructor;
        };
        title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        errors: {
            readonly type: PropType<string[]>;
        };
        options: {
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
    } & {
        multiple?: boolean | undefined;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
            readonly type: PropType<import("vue3-jsonschema-form").WidgetOptions>;
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
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
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
        readonly errorSchema: {
            readonly type: PropType<any>;
            readonly required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("vue3-jsonschema-form").WidgetOptions;
        onChange: (value: any) => void;
        uiSchema: import("vue3-jsonschema-form").UISchema;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
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
        onDown: {
            type: PropType<(e: MouseEvent) => void>;
            required: true;
        };
        onUp: {
            type: PropType<(e: MouseEvent) => void>;
            required: true;
        };
        onDelete: {
            type: PropType<(e: MouseEvent) => void>;
            required: true;
        };
        onAdd: {
            type: PropType<(e: MouseEvent) => void>;
            required: true;
        };
        index: {
            type: NumberConstructor;
            required: true;
        };
        length: {
            type: NumberConstructor;
            required: true;
        };
        title: {
            type: StringConstructor;
            required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        length: number;
        title: string;
        index: number;
        onDown: (e: MouseEvent) => void;
        onUp: (e: MouseEvent) => void;
        onDelete: (e: MouseEvent) => void;
        onAdd: (e: MouseEvent) => void;
    } & {}>, {}>;
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
