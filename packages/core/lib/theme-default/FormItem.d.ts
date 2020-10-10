import { PropType } from 'vue';
declare const _default: {
    new (): import("vue").ComponentPublicInstance<{
        required: boolean;
        label: string;
        id: string;
    } & {
        errors?: any[] | undefined;
        uiSchema?: unknown;
        requiredError?: boolean | undefined;
    }, () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
        required: boolean;
        label: string;
        id: string;
    } & {
        errors?: any[] | undefined;
        uiSchema?: unknown;
        requiredError?: boolean | undefined;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    required: boolean;
    label: string;
    id: string;
    errors: any[];
} & {
    uiSchema?: unknown;
    requiredError?: boolean | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: {
        readonly errors: {
            readonly type: PropType<any[]>;
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
    } & ThisType<void>;
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    required: boolean;
    label: string;
    id: string;
    errors: any[];
} & {
    uiSchema?: unknown;
    requiredError?: boolean | undefined;
}>, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{
    required: boolean;
    label: string;
    id: string;
    errors: any[];
} & {
    uiSchema?: unknown;
    requiredError?: boolean | undefined;
}>, import("vue").ComponentOptionsBase<Readonly<{
    required: boolean;
    label: string;
    id: string;
    errors: any[];
} & {
    uiSchema?: unknown;
    requiredError?: boolean | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
export default _default;
