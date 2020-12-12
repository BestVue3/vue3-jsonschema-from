import { Schema, VueJsonSchemaConfig } from './types';
export declare function optionsList(schema: Schema): {
    key: any;
    value: any;
}[];
export declare function resolveSchema(schema: Schema, rootSchema?: {}, formData?: {}): (import("json-schema").JSONSchema6 & {
    enumNames?: (string | number)[] | undefined;
    vjsf?: VueJsonSchemaConfig | undefined;
}) | (import("json-schema").JSONSchema7 & {
    enumNames?: (string | number)[] | undefined;
    vjsf?: VueJsonSchemaConfig | undefined;
}) | {
    allOf: any;
    $id?: string | undefined;
    $ref?: string | undefined;
    $schema?: string | undefined;
    multipleOf?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    minimum?: number | undefined; /**
     * 直接调用`obj.hasOwnProperty`有可能会因为
     * obj 覆盖了 prototype 上的 hasOwnProperty 而产生错误
     */
    exclusiveMinimum?: number | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    items?: boolean | import("json-schema").JSONSchema6 | import("json-schema").JSONSchema6Definition[] | undefined;
    additionalItems?: boolean | import("json-schema").JSONSchema6 | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    uniqueItems?: boolean | undefined;
    contains?: boolean | import("json-schema").JSONSchema6 | undefined;
    maxProperties?: number | undefined;
    minProperties?: number | undefined;
    required?: string[] | undefined;
    properties?: {
        [k: string]: import("json-schema").JSONSchema6Definition;
    } | undefined;
    patternProperties?: {
        [k: string]: import("json-schema").JSONSchema6Definition;
    } | undefined;
    additionalProperties?: boolean | import("json-schema").JSONSchema6 | undefined;
    dependencies?: {
        [k: string]: boolean | import("json-schema").JSONSchema6 | string[];
    } | undefined;
    propertyNames?: boolean | import("json-schema").JSONSchema6 | undefined;
    enum?: import("json-schema").JSONSchema6Type[] | undefined;
    const?: string | number | boolean | import("json-schema").JSONSchema6Object | import("json-schema").JSONSchema6Array | null | undefined;
    type?: "string" | "number" | "boolean" | "object" | "integer" | "array" | "null" | "any" | import("json-schema").JSONSchema6TypeName[] | undefined;
    anyOf?: import("json-schema").JSONSchema6Definition[] | undefined;
    oneOf?: import("json-schema").JSONSchema6Definition[] | undefined;
    not?: boolean | import("json-schema").JSONSchema6 | undefined;
    definitions?: {
        [k: string]: import("json-schema").JSONSchema6Definition;
    } | undefined;
    title?: string | undefined;
    description?: string | undefined;
    default?: string | number | boolean | import("json-schema").JSONSchema6Object | import("json-schema").JSONSchema6Array | null | undefined;
    examples?: import("json-schema").JSONSchema6Type[] | undefined;
    format?: string | undefined;
    enumNames?: (string | number)[] | undefined;
    vjsf?: VueJsonSchemaConfig | undefined;
} | {
    allOf: any;
    $id?: string | undefined;
    $ref?: string | undefined;
    $schema?: string | undefined;
    $comment?: string | undefined;
    type?: "string" | "number" | "boolean" | "object" | "integer" | "array" | "null" | import("json-schema").JSONSchema7TypeName[] | undefined;
    enum?: import("json-schema").JSONSchema7Type[] | undefined;
    const?: string | number | boolean | import("json-schema").JSONSchema7Object | import("json-schema").JSONSchema7Array | null | undefined;
    multipleOf?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: number | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: number | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    items?: boolean | import("json-schema").JSONSchema7 | import("json-schema").JSONSchema7Definition[] | undefined;
    additionalItems?: boolean | import("json-schema").JSONSchema7 | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    uniqueItems?: boolean | undefined;
    contains?: import("json-schema").JSONSchema7 | undefined;
    maxProperties?: number | undefined;
    minProperties?: number | undefined;
    required?: string[] | undefined;
    properties?: {
        [key: string]: import("json-schema").JSONSchema7Definition;
    } | undefined;
    patternProperties?: {
        [key: string]: import("json-schema").JSONSchema7Definition;
    } | undefined;
    additionalProperties?: boolean | import("json-schema").JSONSchema7 | undefined;
    dependencies?: {
        [key: string]: boolean | import("json-schema").JSONSchema7 | string[];
    } | undefined;
    propertyNames?: boolean | import("json-schema").JSONSchema7 | undefined;
    if?: boolean | import("json-schema").JSONSchema7 | undefined;
    then?: boolean | import("json-schema").JSONSchema7 | undefined;
    else?: boolean | import("json-schema").JSONSchema7 | undefined;
    anyOf?: import("json-schema").JSONSchema7Definition[] | undefined;
    oneOf?: import("json-schema").JSONSchema7Definition[] | undefined;
    not?: boolean | import("json-schema").JSONSchema7 | undefined;
    format?: string | undefined;
    contentMediaType?: string | undefined;
    contentEncoding?: string | undefined;
    definitions?: {
        [key: string]: import("json-schema").JSONSchema7Definition;
    } | undefined;
    title?: string | undefined;
    description?: string | undefined;
    default?: string | number | boolean | import("json-schema").JSONSchema7Object | import("json-schema").JSONSchema7Array | null | undefined;
    readOnly?: boolean | undefined;
    writeOnly?: boolean | undefined;
    examples?: string | number | boolean | import("json-schema").JSONSchema7Object | import("json-schema").JSONSchema7Array | null | undefined;
    enumNames?: (string | number)[] | undefined;
    vjsf?: VueJsonSchemaConfig | undefined;
};
export declare function retrieveSchema(schema: any, rootSchema?: {}, formData?: any): Schema;
export declare const ADDITIONAL_PROPERTY_FLAG = "__additional_property";
export declare function stubExistingAdditionalProperties(schema: Schema, rootSchema?: Schema, formData?: any): Schema;
export declare function findSchemaDefinition($ref: string, rootSchema?: {}): Schema;
export declare function mergeSchemas(obj1: any, obj2: any): any;
export declare function getVJSFConfig(schema: Schema, uiSchema: VueJsonSchemaConfig | undefined): VueJsonSchemaConfig;
export declare function isObject(thing: any): boolean;
export declare function isEmptyObject(thing: any): boolean;
export declare function hasOwnProperty(obj: any, key: string): boolean;
export declare function getSchemaType(schema: Schema): string | undefined;
export declare const guessType: (value: any) => "string" | "number" | "boolean" | "object" | "array" | "null";
export declare function isConstant(schema: Schema): boolean;
export declare function isSelect(_schema: any, rootSchema?: Schema): any;
export declare function isMultiSelect(schema: Schema, rootSchema?: Schema): any;
export declare function getMatchingOption(formData: any, options: Schema[], isValid: (schema: Schema, data: any) => boolean): number;
export declare function mergeDefaultsWithFormData(defaults: any, formData: any): any;
export declare function getDefaultFormState(_schema: Schema, formData: any): any;
//# sourceMappingURL=utils.d.ts.map