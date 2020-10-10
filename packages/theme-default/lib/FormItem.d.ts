import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly errors: {
        readonly type: PropType<string[]>;
        readonly default: readonly [];
    };
    readonly label: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    readonly id: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    readonly required: {
        readonly type: PropType<boolean>;
        readonly required: true;
    };
    readonly requiredError: {
        readonly type: PropType<boolean>;
    };
    readonly uiSchema: {
        readonly type: PropType<any>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    required: boolean;
    label: string;
    id: string;
    errors: string[];
} & {
    requiredError?: boolean | undefined;
    uiSchema?: unknown;
}>, {
    errors: string[];
}>;
export default _default;
