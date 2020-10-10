import { PropType } from 'vue';
declare const Radios: import("vue").DefineComponent<{
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
export default Radios;
