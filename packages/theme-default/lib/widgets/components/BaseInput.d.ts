import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
export default _default;
