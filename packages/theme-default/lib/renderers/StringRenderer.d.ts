import { PropType } from 'vue';
declare const _default: {
    new (): import("vue").ComponentPublicInstance<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        onChange: (value: any) => void;
        requiredError: boolean;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
    } & {
        errors?: any[] | undefined;
        uiSchema?: import("vue3-jsonschema-form").UISchema | undefined;
    }, () => JSX.Element, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        onChange: (value: any) => void;
        requiredError: boolean;
        schema: import("vue3-jsonschema-form").Schema;
        rootSchema: import("vue3-jsonschema-form").Schema;
        isDependenciesKey: boolean;
    } & {
        errors?: any[] | undefined;
        uiSchema?: import("vue3-jsonschema-form").UISchema | undefined;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    required: boolean;
    title: string;
    path: string;
    value: unknown;
    id: string;
    onChange: (value: any) => void;
    requiredError: boolean;
    schema: import("vue3-jsonschema-form").Schema;
    rootSchema: import("vue3-jsonschema-form").Schema;
    isDependenciesKey: boolean;
} & {
    errors?: any[] | undefined;
    uiSchema?: import("vue3-jsonschema-form").UISchema | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: {
        readonly title: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly errors: {
            readonly type: PropType<any[]>;
        };
        readonly id: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly path: {
            readonly type: PropType<string>;
            readonly required: true;
        };
        readonly value: {
            readonly required: true;
        };
        readonly schema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly rootSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").Schema>;
            readonly required: true;
        };
        readonly uiSchema: {
            readonly type: PropType<import("vue3-jsonschema-form").UISchema>;
        };
        readonly onChange: {
            readonly type: PropType<(value: any) => void>;
            readonly required: true;
        };
        readonly requiredError: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly required: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
        readonly isDependenciesKey: {
            readonly type: PropType<boolean>;
            readonly required: true;
        };
    } & ThisType<void>;
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    required: boolean;
    title: string;
    path: string;
    value: unknown;
    id: string;
    onChange: (value: any) => void;
    requiredError: boolean;
    schema: import("vue3-jsonschema-form").Schema;
    rootSchema: import("vue3-jsonschema-form").Schema;
    isDependenciesKey: boolean;
} & {
    errors?: any[] | undefined;
    uiSchema?: import("vue3-jsonschema-form").UISchema | undefined;
}>, () => JSX.Element, {}, {}, {}, Record<string, any>, Readonly<{
    required: boolean;
    title: string;
    path: string;
    value: unknown;
    id: string;
    onChange: (value: any) => void;
    requiredError: boolean;
    schema: import("vue3-jsonschema-form").Schema;
    rootSchema: import("vue3-jsonschema-form").Schema;
    isDependenciesKey: boolean;
} & {
    errors?: any[] | undefined;
    uiSchema?: import("vue3-jsonschema-form").UISchema | undefined;
}>, import("vue").ComponentOptionsBase<Readonly<{
    required: boolean;
    title: string;
    path: string;
    value: unknown;
    id: string;
    onChange: (value: any) => void;
    requiredError: boolean;
    schema: import("vue3-jsonschema-form").Schema;
    rootSchema: import("vue3-jsonschema-form").Schema;
    isDependenciesKey: boolean;
} & {
    errors?: any[] | undefined;
    uiSchema?: import("vue3-jsonschema-form").UISchema | undefined;
}>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
export default _default;
