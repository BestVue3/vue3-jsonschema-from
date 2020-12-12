import { Ref } from 'vue';
import { Schema, JsonSchemFormPlugin, UISchema } from './types';
declare const _default: import("vue").DefineComponent<{
    schema: {
        readonly type: import("vue").PropType<Schema>;
        readonly required: true;
    };
    uiSchema: {
        readonly type: import("vue").PropType<UISchema>;
    };
    value: {
        readonly type: import("vue").PropType<any>;
    };
    onChange: {
        readonly type: import("vue").PropType<(value: any) => void>;
        readonly required: true;
    };
    formProps: {
        readonly type: import("vue").PropType<{
            [key: string]: any;
        }>;
    };
    plugins: {
        readonly type: import("vue").PropType<JsonSchemFormPlugin | JsonSchemFormPlugin[]>;
    };
    locale: {
        readonly type: import("vue").PropType<string>;
        readonly default: "zh";
    };
    ajvInstanceOptions: {
        readonly type: import("vue").PropType<import("ajv").Options>;
    };
    contextRef: {
        readonly type: import("vue").PropType<Ref<any>>;
    };
    customValidate: {
        readonly type: import("vue").PropType<(data: any, errors: any) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    schema: Schema;
    onChange: (value: any) => void;
    locale: string;
} & {
    uiSchema?: UISchema | undefined;
    value?: unknown;
    formProps?: {
        [key: string]: any;
    } | undefined;
    plugins?: JsonSchemFormPlugin | JsonSchemFormPlugin[] | undefined;
    ajvInstanceOptions?: import("ajv").Options | undefined;
    contextRef?: Ref<any> | undefined;
    customValidate?: ((data: any, errors: any) => void) | undefined;
}>, {
    locale: string;
}>;
export default _default;
//# sourceMappingURL=SchemaForm.d.ts.map