import { PropType } from 'vue';
declare const Radios: {
    new (): import("vue").ComponentPublicInstance<{
        name: string;
        options: {
            key: string | number;
            value: string | number;
        }[];
        onChange: (v: any) => void;
    } & {
        value?: unknown;
    }, () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
        name: string;
        options: {
            key: string | number;
            value: string | number;
        }[];
        onChange: (v: any) => void;
    } & {
        value?: unknown;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    name: string;
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {
    value?: unknown;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: {
        options: {
            type: PropType<{
                key: string | number;
                value: string | number;
            }[]>;
            required: true;
        };
        value: {};
        onChange: {
            type: PropType<(v: any) => void>;
            required: true;
        };
        name: {
            type: StringConstructor;
            required: true;
        };
    } & ThisType<void>;
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    name: string;
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {
    value?: unknown;
}>, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{
    name: string;
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {
    value?: unknown;
}>, import("vue").ComponentOptionsBase<Readonly<{
    name: string;
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {
    value?: unknown;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
export declare function withCommonRadios(Comp: any): {
    new (): import("vue").ComponentPublicInstance<{
        [x: string]: any;
    } | ({
        [x: string]: any;
    } & {
        [x: number]: any;
    }), () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
        [x: string]: any;
    } | ({
        [x: string]: any;
    } & {
        [x: number]: any;
    }), () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: any;
} & {
    [x: number]: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: any;
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: any;
} & {
    [x: number]: any;
}>, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: any;
} & {
    [x: number]: any;
}>, import("vue").ComponentOptionsBase<Readonly<{
    [x: string]: any;
}> | Readonly<{
    [x: string]: any;
} & {
    [x: number]: any;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
export default Radios;
