declare const _default: import("vue").DefineComponent<{
    readonly title: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    readonly errors: {
        readonly type: import("vue").PropType<string[]>;
    };
    readonly options: {
        readonly type: import("vue").PropType<import("@v3jsf/core/types").WidgetOptions>;
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
        readonly type: import("vue").PropType<import("@v3jsf/core/types").Schema>;
        readonly required: true;
    };
    readonly rootSchema: {
        readonly type: import("vue").PropType<import("@v3jsf/core/types").Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: import("vue").PropType<import("@v3jsf/core/types").UISchema>;
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
export default _default;
//# sourceMappingURL=TextWidget.d.ts.map