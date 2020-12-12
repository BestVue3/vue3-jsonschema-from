import { PropType, ComponentPublicInstance, Ref, ExtractPropTypes, VNodeChild } from 'vue';
import { JSONSchema6, JSONSchema7 } from 'json-schema';
import { Options as AjvOptions } from 'ajv';
import { AjvFormat, AjvKeyword } from './validator/types';
import { WidgetComponentDefine } from './theme/utils';
export declare enum SchemaTypes {
    'NUMBER' = "number",
    'INTEGER' = "integer",
    'STRING' = "string",
    'OBJECT' = "object",
    'ARRAY' = "array",
    'BOOLEAN' = "boolean"
}
export interface VueJsonSchemaConfig {
    title?: string;
    descrription?: string;
    component?: string;
    options?: {
        [key: string]: any;
    };
    withFormItem?: boolean;
    widget?: 'checkbox' | 'textarea' | 'select' | 'radio' | 'range' | string;
    items?: UISchema | UISchema[];
    propertiesOrder?: string[];
    controls?: {
        sortable?: boolean;
        removeable?: boolean;
        addable?: boolean;
    };
}
export declare type Schema = (JSONSchema6 | JSONSchema7) & {
    enumNames?: (string | number)[];
    vjsf?: VueJsonSchemaConfig;
};
declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance> = {
    new (): T;
};
export interface UISchema extends VueJsonSchemaConfig {
    properties?: {
        [property: string]: UISchema;
    };
}
export interface CustomFormat extends AjvFormat {
    component: ComponentPublicInstanceConstructor<ComponentPublicInstance<ExtractPropTypes<typeof CommonWidgetPropsDefine>>>;
}
export interface CustomKeyword extends AjvKeyword {
    transformSchema?: (originSchema: Schema) => Schema;
}
export interface JsonSchemFormPlugin {
    customFormats?: CustomFormat[] | CustomFormat;
    customKeywords?: CustomKeyword[] | CustomKeyword;
}
interface ErrorSchemaObject {
    [level: string]: ErrorSchema;
}
export declare type ErrorSchema = ErrorSchemaObject & {
    __errors: string[];
};
export declare const CommonPropsDefine: {
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
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly rootSchema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UISchema>;
        readonly required: true;
    };
    readonly onChange: {
        readonly type: PropType<(value: any) => void>;
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
};
export declare const CommonFieldPropsDefine: {
    readonly errorSchema: {
        readonly type: PropType<ErrorSchema>;
        readonly required: true;
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
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly rootSchema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UISchema>;
        readonly required: true;
    };
    readonly onChange: {
        readonly type: PropType<(value: any) => void>;
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
};
export interface WidgetOptions {
    enumOptions?: {
        key: string;
        value: string | number | boolean;
    }[];
    widget?: string | WidgetComponentDefine;
    disabled?: boolean;
    readonly?: boolean;
    description?: string | VNodeChild;
    multiple?: boolean;
}
export declare const CommonWidgetPropsDefine: {
    readonly title: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    readonly errors: {
        readonly type: PropType<string[]>;
    };
    readonly options: {
        readonly type: PropType<WidgetOptions>;
        readonly required: true;
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
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly rootSchema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UISchema>;
        readonly required: true;
    };
    readonly onChange: {
        readonly type: PropType<(value: any) => void>;
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
};
export declare const SchemaFormPropsDefine: {
    readonly schema: {
        readonly type: PropType<Schema>;
        readonly required: true;
    };
    readonly uiSchema: {
        readonly type: PropType<UISchema>;
    };
    readonly value: {
        readonly type: PropType<any>;
    };
    readonly onChange: {
        readonly type: PropType<(value: any) => void>;
        readonly required: true;
    };
    readonly formProps: {
        readonly type: PropType<{
            [key: string]: any;
        }>;
    };
    readonly plugins: {
        readonly type: PropType<JsonSchemFormPlugin | JsonSchemFormPlugin[]>;
    };
    readonly locale: {
        readonly type: PropType<string>;
        readonly default: "zh";
    };
    readonly ajvInstanceOptions: {
        readonly type: PropType<AjvOptions>;
    };
    /**
     * use this to provide owner `doValidate`
     */
    readonly contextRef: {
        readonly type: PropType<Ref<any>>;
    };
    readonly customValidate: {
        readonly type: PropType<(data: any, errors: any) => void>;
    };
};
export * from './theme/types';
//# sourceMappingURL=types.d.ts.map