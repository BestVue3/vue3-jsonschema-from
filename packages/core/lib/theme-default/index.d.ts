import Form from './Form';
import FormItem from './FormItem';
import ArrayRenderer from './renderers/ArrayRenderer';
import BooleanRenderer from './renderers/BooleanRenderer';
import SingleTypeArray from './SingleTypeArrayWrapper';
import Header from './Header';
export * from './theme';
declare const StringRenderer: {
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
declare const NumberRenderer: {
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
export { renderItem } from './utils';
export { FormItem, Form, StringRenderer, NumberRenderer, ArrayRenderer, SingleTypeArray, BooleanRenderer, Header, };
declare const _default: {
    components: {
        Form: {
            new (): import("vue").ComponentPublicInstance<{}, () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
            props?: undefined;
        } & ThisType<import("vue").ComponentPublicInstance<{}, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{}>, import("vue").ComponentOptionsBase<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
        StringRenderer: {
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
        NumberRenderer: {
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
        ArrayRenderer: {
            new (): import("vue").ComponentPublicInstance<{
                [x: string]: any;
            } | ({
                [x: string]: any;
            } & {
                [x: number]: any;
            }), () => JSX.Element | undefined, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
                [x: string]: any;
            } | ({
                [x: string]: any;
            } & {
                [x: number]: any;
            }), () => JSX.Element | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<{
            [x: string]: any;
        }> | Readonly<{
            [x: string]: any;
        } & {
            [x: number]: any;
        }>, () => JSX.Element | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
            props: any;
        } & ThisType<import("vue").ComponentPublicInstance<Readonly<{
            [x: string]: any;
        }> | Readonly<{
            [x: string]: any;
        } & {
            [x: number]: any;
        }>, () => JSX.Element | undefined, {}, {}, {}, Record<string, any>, Readonly<{
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
        }>, () => JSX.Element | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
        SingleTypeArray: {
            new (): import("vue").ComponentPublicInstance<{
                length: number;
                title: string;
                index: number;
                onDown: (e: MouseEvent) => void;
                onUp: (e: MouseEvent) => void;
                onDelete: (e: MouseEvent) => void;
                onAdd: (e: MouseEvent) => void;
            } & {}, () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
                length: number;
                title: string;
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
            title: string;
            index: number;
            onDown: (e: MouseEvent) => void;
            onUp: (e: MouseEvent) => void;
            onDelete: (e: MouseEvent) => void;
            onAdd: (e: MouseEvent) => void;
        } & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
            props: {
                onDown: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    required: true;
                };
                onUp: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    required: true;
                };
                onDelete: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    required: true;
                };
                onAdd: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
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
                title: {
                    type: StringConstructor;
                    required: true;
                };
            } & ThisType<void>;
        } & ThisType<import("vue").ComponentPublicInstance<Readonly<{
            length: number;
            title: string;
            index: number;
            onDown: (e: MouseEvent) => void;
            onUp: (e: MouseEvent) => void;
            onDelete: (e: MouseEvent) => void;
            onAdd: (e: MouseEvent) => void;
        } & {}>, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{
            length: number;
            title: string;
            index: number;
            onDown: (e: MouseEvent) => void;
            onUp: (e: MouseEvent) => void;
            onDelete: (e: MouseEvent) => void;
            onAdd: (e: MouseEvent) => void;
        } & {}>, import("vue").ComponentOptionsBase<Readonly<{
            length: number;
            title: string;
            index: number;
            onDown: (e: MouseEvent) => void;
            onUp: (e: MouseEvent) => void;
            onDelete: (e: MouseEvent) => void;
            onAdd: (e: MouseEvent) => void;
        } & {}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
        BooleanRenderer: {
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
        Header: {
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
                    type: import("vue").PropType<string>;
                    required: true;
                };
                type: {
                    type: import("vue").PropType<"object" | "array">;
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
    };
};
export default _default;
