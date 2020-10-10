import { PropType } from 'vue';
declare const _default: {
    new (): import("vue").ComponentPublicInstance<{
        title: string;
        type: "object" | "array";
    } & {}, () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
        title: string;
        type: "object" | "array";
    } & {}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    title: string;
    type: "object" | "array";
} & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: {
        title: {
            type: PropType<string>;
            required: true;
        };
        type: {
            type: PropType<"object" | "array">;
            required: true;
        };
    } & ThisType<void>;
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    title: string;
    type: "object" | "array";
} & {}>, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{
    title: string;
    type: "object" | "array";
} & {}>, import("vue").ComponentOptionsBase<Readonly<{
    title: string;
    type: "object" | "array";
} & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
export default _default;
