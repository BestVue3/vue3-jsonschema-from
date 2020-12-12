import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
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
export default _default;
//# sourceMappingURL=CheckboxesWidget.d.ts.map