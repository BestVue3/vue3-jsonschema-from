import { Schema, JsonSchemFormPlugin, UISchema } from './types';
import type { Ref, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly schema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UISchema>;
    };
    readonly value: {
        readonly type: PropType<any>;
    };
    readonly onChange: {
        readonly type: PropType<(value: any) => void>;
        readonly required: true;
    };
    readonly formProps: {
        readonly type: PropType<any>;
    };
    readonly plugins: {
        readonly type: PropType<JsonSchemFormPlugin | JsonSchemFormPlugin[]>;
    };
    readonly locale: {
        readonly type: PropType<string>;
        readonly default: "zh";
    };
    readonly ajvInstanceOptions: {
        readonly type: PropType<import("ajv").Options>;
    };
    readonly contextRef: {
        readonly type: PropType<Ref<any>>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    onChange: (value: any) => void;
    schema: Schema;
    locale: string;
} & {
    value?: unknown;
    uiSchema?: UISchema | undefined;
    formProps?: unknown;
    plugins?: JsonSchemFormPlugin | JsonSchemFormPlugin[] | undefined;
    ajvInstanceOptions?: import("ajv").Options | undefined;
    contextRef?: Ref<any> | undefined;
}>, {
    locale: string;
}>;
export default _default;
