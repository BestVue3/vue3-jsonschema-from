import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly onDown: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly onUp: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly onDelete: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly onAdd: {
        readonly type: PropType<() => void>;
        readonly required: true;
    };
    readonly length: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
    readonly index: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly controls: {
        readonly type: PropType<{
            sortable?: boolean | undefined;
            removable?: boolean | undefined;
            addable?: boolean | undefined;
        }>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    onDown: () => void;
    onUp: () => void;
    onDelete: () => void;
    onAdd: () => void;
    length: number;
    index: number;
    title: string;
} & {
    controls?: {
        sortable?: boolean | undefined;
        removable?: boolean | undefined;
        addable?: boolean | undefined;
    } | undefined;
}>, {}>;
export default _default;
//# sourceMappingURL=ArrayActions.d.ts.map