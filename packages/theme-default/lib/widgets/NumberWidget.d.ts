declare const _default: import("vue").DefineComponent<{
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    readonly errors: {
        readonly type: import("vue").PropType<string[]>;
    };
    readonly options: {
        readonly type: import("vue").PropType<import("vue3-jsonschema-form").WidgetOptions>;
        readonly required: true;
    };
    readonly id: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    readonly path: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    readonly value: {
        readonly required: true;
    };
    readonly schema: {
        readonly type: import("vue").PropType<import("vue3-jsonschema-form").Schema>;
        readonly required: true;
    };
    readonly rootSchema: {
        readonly type: import("vue").PropType<import("vue3-jsonschema-form").Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: import("vue").PropType<import("vue3-jsonschema-form").UISchema>;
        readonly required: true;
    };
    readonly onChange: {
        readonly type: import("vue").PropType<(value: any) => void>;
        readonly required: true;
    };
    readonly required: {
        readonly type: import("vue").PropType<boolean>;
        readonly required: true;
    };
    readonly isDependenciesKey: {
        readonly type: import("vue").PropType<boolean>;
        readonly required: true;
    };
    readonly errorSchema: {
        readonly type: import("vue").PropType<any>;
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
