import { PropType, DefineComponent } from 'vue';
export declare const SingleTypeArrayProps: {
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
};
export declare type SingleTypeArrayDefine = DefineComponent<typeof SingleTypeArrayProps, {}, {}>;
//# sourceMappingURL=types.d.ts.map