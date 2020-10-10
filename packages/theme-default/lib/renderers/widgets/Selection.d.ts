import { PropType } from 'vue';
declare const Selection: {
    new (): import("vue").ComponentPublicInstance<{
        id: string;
        options: {
            key: string | number;
            value: string | number;
        }[];
        onChange: (v: any) => void;
    } & {
        value?: unknown;
        multiple?: boolean | undefined;
    }, () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
        id: string;
        options: {
            key: string | number;
            value: string | number;
        }[];
        onChange: (v: any) => void;
    } & {
        value?: unknown;
        multiple?: boolean | undefined;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    id: string;
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {
    value?: unknown;
    multiple?: boolean | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: {
        options: {
            type: PropType<{
                key: string | number;
                value: string | number;
            }[]>;
            required: true;
        };
        value: {
            type: PropType<any>;
        };
        onChange: {
            type: PropType<(v: any) => void>;
            required: true;
        };
        id: {
            type: StringConstructor;
            required: true;
        };
        multiple: {
            type: BooleanConstructor;
        };
    } & ThisType<void>;
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    id: string;
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {
    value?: unknown;
    multiple?: boolean | undefined;
}>, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{
    id: string;
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {
    value?: unknown;
    multiple?: boolean | undefined;
}>, import("vue").ComponentOptionsBase<Readonly<{
    id: string;
    options: {
        key: string | number;
        value: string | number;
    }[];
    onChange: (v: any) => void;
} & {
    value?: unknown;
    multiple?: boolean | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
export declare function withCommonSelection(Comp: any): {
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
export default Selection;
