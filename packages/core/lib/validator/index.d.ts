import Ajv from 'ajv';
import { CreateInstanceOptions } from './types';
import { Schema, ErrorSchema } from '../types';
export * from './types';
export declare function createInstance(opts?: CreateInstanceOptions): Ajv.Ajv;
export declare function validateData(schema: any, data: any): {
    valid: boolean | PromiseLike<any>;
    errors: Ajv.ErrorObject[] | null | undefined;
};
export interface FormatedErrorObject {
    name: string;
    property: string;
    message?: string;
    params: Ajv.ErrorParameters;
    stack: string;
    schemaPath: string;
}
/**
 * This function processes the formData with a user `validate` contributed
 * function, which receives the form data and an `errorHandler` object that
 * will be used to add custom validation errors for each field.
 */
export declare function validateFormData(formData: any, schema: Schema, instance: Ajv.Ajv, locale?: string, customValidate?: (data: any, errorSchema: any) => void, transformErrors?: (errors: FormatedErrorObject[]) => FormatedErrorObject[]): {
    errors: FormatedErrorObject[];
    errorSchema: any;
};
export declare function toErrorList(errorSchema: ErrorSchema, fieldName?: string): FormatedErrorObject[];
export declare function mergeObjects(obj1: any, obj2: any, concatArrays?: boolean): any;
