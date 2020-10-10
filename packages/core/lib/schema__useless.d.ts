import { Schema, VueJsonSchemaConfig } from './types';
export declare function resolveSchema(schema: Schema, rootSchema?: {}, formData?: {}): Schema;
export declare function retrieveSchema(schema: any, rootSchema?: {}, formData?: any): Schema;
export declare const ADDITIONAL_PROPERTY_FLAG = "__additional_property";
export declare function stubExistingAdditionalProperties(schema: Schema, rootSchema?: Schema, formData?: any): Schema;
export declare function findSchemaDefinition($ref: string, rootSchema?: {}): Schema;
export declare function mergeSchemas(obj1: any, obj2: any): any;
export declare function getVJSFConfig(schema: Schema, uiSchema: VueJsonSchemaConfig | undefined): VueJsonSchemaConfig;
