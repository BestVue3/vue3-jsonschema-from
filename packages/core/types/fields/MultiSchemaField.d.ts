import { PropType } from 'vue';
import { JSONSchema6Definition, JSONSchema7Definition } from 'json-schema';
import { Schema, SchemaTypes } from '../types';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<JSONSchema6Definition[] | JSONSchema7Definition[]>;
        required: true;
    };
    baseType: {
        type: PropType<SchemaTypes>;
        required: true;
    };
    errorSchema: {
        readonly type: PropType<import("../types").ErrorSchema>;
        readonly required: true;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options: JSONSchema6Definition[] | JSONSchema7Definition[];
    baseType: SchemaTypes;
    errorSchema: import("../types").ErrorSchema;
    id: string;
    path: string;
    value: unknown;
    schema: Schema;
    rootSchema: Schema;
    uiSchema: import("../types").UISchema;
    onChange: (value: any) => void;
    required: boolean;
    isDependenciesKey: boolean;
} & {}>, {}>;
export default _default;
//# sourceMappingURL=MultiSchemaField.d.ts.map