import { PropType } from 'vue';
declare const _default: {
    new (): import("vue").ComponentPublicInstance<{
        length: number;
        index: number;
        onDown: (e: MouseEvent) => void;
        onUp: (e: MouseEvent) => void;
        onDelete: (e: MouseEvent) => void;
        onAdd: (e: MouseEvent) => void;
    } & {}, () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
        length: number;
        index: number;
        onDown: (e: MouseEvent) => void;
        onUp: (e: MouseEvent) => void;
        onDelete: (e: MouseEvent) => void;
        onAdd: (e: MouseEvent) => void;
    } & {}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    length: number;
    index: number;
    onDown: (e: MouseEvent) => void;
    onUp: (e: MouseEvent) => void;
    onDelete: (e: MouseEvent) => void;
    onAdd: (e: MouseEvent) => void;
} & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: {
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
    } & ThisType<void>;
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    length: number;
    index: number;
    onDown: (e: MouseEvent) => void;
    onUp: (e: MouseEvent) => void;
    onDelete: (e: MouseEvent) => void;
    onAdd: (e: MouseEvent) => void;
} & {}>, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{
    length: number;
    index: number;
    onDown: (e: MouseEvent) => void;
    onUp: (e: MouseEvent) => void;
    onDelete: (e: MouseEvent) => void;
    onAdd: (e: MouseEvent) => void;
} & {}>, import("vue").ComponentOptionsBase<Readonly<{
    length: number;
    index: number;
    onDown: (e: MouseEvent) => void;
    onUp: (e: MouseEvent) => void;
    onDelete: (e: MouseEvent) => void;
    onAdd: (e: MouseEvent) => void;
} & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
export default _default;
