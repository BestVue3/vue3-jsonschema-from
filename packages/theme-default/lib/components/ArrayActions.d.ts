import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    onDown: {
        type: PropType<(e: MouseEvent) => void>;
        required: true;
    };
    onUp: {
        type: PropType<(e: MouseEvent) => void>;
        required: true;
    };
    onDelete: {
        type: PropType<(e: MouseEvent) => void>;
        required: true;
    };
    onAdd: {
        type: PropType<(e: MouseEvent) => void>;
        required: true;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
    length: {
        type: NumberConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    length: number;
    index: number;
    onDown: (e: MouseEvent) => void;
    onUp: (e: MouseEvent) => void;
    onDelete: (e: MouseEvent) => void;
    onAdd: (e: MouseEvent) => void;
} & {}>, {}>;
export default _default;
