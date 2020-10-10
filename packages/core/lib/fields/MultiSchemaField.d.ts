import { PropType } from 'vue';
import { Schema, SchemaTypes } from '../types';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<Schema[]>;
        required: true;
    };
    baseType: {
        type: PropType<SchemaTypes>;
        required: true;
    };
    id: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    path: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    value: {
        readonly required: true;
    };
    schema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    rootSchema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    uiSchema: {
        readonly type: PropType<import("../types").UISchema>;
        readonly required: true;
    };
    onChange: {
        readonly type: PropType<(value: any) => void>;
        readonly required: true;
    };
    required: {
        readonly type: PropType<boolean>;
        readonly required: true;
    };
    isDependenciesKey: {
        readonly type: PropType<boolean>;
        readonly required: true;
    };
    errorSchema: {
        readonly type: PropType<any>;
        readonly required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    required: boolean;
    path: string;
    value: unknown;
    id: string;
    options: Schema[];
    onChange: (value: any) => void;
    schema: Schema;
    rootSchema: Schema;
    uiSchema: import("../types").UISchema;
    isDependenciesKey: boolean;
    errorSchema: unknown;
    baseType: SchemaTypes;
} & {}>, {}>;
export default _default;
