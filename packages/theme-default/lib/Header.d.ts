import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: PropType<string>;
        required: true;
    };
    type: {
        type: PropType<"object" | "array">;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title: string;
    type: "object" | "array";
} & {}>, {}>;
export default _default;
