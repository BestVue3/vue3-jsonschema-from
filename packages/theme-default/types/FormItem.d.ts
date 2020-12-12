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
    readonly hideLabel: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label: string;
    required: boolean;
    errors: string[];
    id: string;
} & {
    requiredError?: boolean | undefined;
    uiSchema?: unknown;
    hideLabel?: boolean | undefined;
}>, {
    errors: string[];
}>;
export default _default;
//# sourceMappingURL=FormItem.d.ts.map