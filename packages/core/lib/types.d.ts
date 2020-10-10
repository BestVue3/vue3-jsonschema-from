import { PropType, ComponentObjectPropsOptions, ComponentPublicInstance, Prop, Ref, ExtractPropTypes, VNodeChild } from 'vue';
import { Options as AjvOptions } from 'ajv';
import { AjvFormat, AjvKeyword } from './validator/types';
import { WidgetComponentDefine } from '../lib/theme/utils';
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
}
declare type SchemaRef = {
    $ref: string;
};
export interface Schema {
    type?: SchemaTypes | string;
    const?: any;
    format?: string;
    title?: string;
    default?: any;
    properties?: {
        [key: string]: Schema | {
            $ref: string;
        };
    };
    items?: Schema | Schema[] | SchemaRef;
    uniqueItems?: any;
    dependencies?: {
        [key: string]: string[] | Schema | SchemaRef;
    };
    oneOf?: Schema[];
    anyOf?: Schema[];
    allOf?: Schema[];
    vjsf?: VueJsonSchemaConfig;
    required?: string[];
    enum?: any[];
    enumNames?: any[];
    enumKeyValue?: any[];
    additionalProperties?: any;
    additionalItems?: Schema;
    minLength?: number;
    maxLength?: number;
    minimun?: number;
    maximum?: number;
    multipleOf?: number;
    exclusiveMaximum?: number;
    exclusiveMinimum?: number;
}
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
export interface A extends ComponentObjectPropsOptions {
    path: Prop<string>;
    value: Prop<any>;
    schema: Prop<Schema>;
    rootSchema: Prop<Schema>;
    uiSchema: Prop<UISchema>;
    onChange: Prop<(value: any) => void>;
    requiredError: Prop<boolean>;
    required: Prop<boolean>;
}
export declare type ErrorSchema = {
    [level: string]: ErrorSchema;
} & {
    __errors: string[];
};
export declare const CommonFieldPropsDefine: {
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
    readonly errorSchema: {
        readonly type: PropType<any>;
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
    readonly errorSchema: {
        readonly type: PropType<any>;
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
        readonly type: PropType<any>;
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
};
export {};
