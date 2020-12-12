declare const _default: import("vue").DefineComponent<{
    readonly errorSchema: {
        readonly type: import("vue").PropType<import("../types").ErrorSchema>;
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
        readonly type: import("vue").PropType<import("../types").Schema>;
        readonly required: true;
    };
    readonly rootSchema: {
        readonly type: import("vue").PropType<import("../types").Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: import("vue").PropType<import("../types").UISchema>;
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
}, () => (JSX.Element | null)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    errorSchema: import("../types").ErrorSchema;
    id: string;
    path: string;
    value: unknown;
    schema: import("../types").Schema;
    rootSchema: import("../types").Schema;
    uiSchema: import("../types").UISchema;
    onChange: (value: any) => void;
    required: boolean;
    isDependenciesKey: boolean;
} & {}>, {}>;
export default _default;
//# sourceMappingURL=ObjectField.d.ts.map