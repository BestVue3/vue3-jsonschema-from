import { Schema } from './types';
import SchemaItem from './SchemaItem';
import { Ref } from 'vue';
export declare const VJSFContext: unique symbol;
export interface VJSFContext {
    formatMaps: Record<string, any>;
    validate: (schema: Schema, data: any) => {
        valid: boolean;
        errors: any[];
    };
    SchemaItem: typeof SchemaItem;
}
export declare function useVJSFContext(): Ref<VJSFContext>;
