import { PropType } from 'vue';
declare const _default: {
    new (): import("vue").ComponentPublicInstance<{
        value: any[];
        options: {
            key: string | number;
            value: string | number;
        }[];
        onChange: (v: any) => void;
    } & {}, () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
        value: any[];
        options: {
            key: string | number;
            value: string | number;
        }[];
        onChange: (v: any) => void;
    } & {}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    value: any[];
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: {
        options: {
            type: PropType<{
                key: string | number;
                value: string | number;
            }[]>;
            required: true;
        };
        value: {
            type: PropType<any[]>;
            required: true;
        };
        onChange: {
            type: PropType<(v: any) => void>;
            required: true;
        };
    } & ThisType<void>;
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    value: any[];
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {}>, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{
    value: any[];
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {}>, import("vue").ComponentOptionsBase<Readonly<{
    value: any[];
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
export default _default;
