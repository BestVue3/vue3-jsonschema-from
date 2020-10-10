import { Schema, VueJsonSchemaConfig } from './types';
export declare function resolveSchema(schema: any, rootSchema?: {}, formData?: {}): any;
export declare function retrieveSchema(schema: any, rootSchema?: {}, formData?: any): Schema;
export declare function findSchemaDefinition($ref: string, rootSchema?: {}): Schema;
export declare function mergeSchemas(obj1: any, obj2: any): any;
export declare function getVJSFConfig(schema: Schema, uiSchema: VueJsonSchemaConfig | undefined): VueJsonSchemaConfig;
