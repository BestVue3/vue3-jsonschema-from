import { ExtractPropTypes } from 'vue';
import { CommonFieldPropsDefine, Schema, SchemaTypes } from '../types';
declare type PropsArg = ExtractPropTypes<typeof CommonFieldPropsDefine>;
export declare const getUiSchema: (props: PropsArg) => import("vue").ComputedRef<import("../types").UISchema>;
export declare function useCommonField(props: PropsArg, type: SchemaTypes): {
    rendererPropsRef: import("vue").ComputedRef<{
        id: string;
        value: unknown;
        format: string | undefined;
        schema: Schema;
        uiSchema: import("../types").UISchema;
        title: string;
        required: boolean;
        rootSchema: Schema;
        path: string;
        isDependenciesKey: boolean;
        options: {
            properties?: {
                [property: string]: import("../types").UISchema;
            } | undefined;
            title?: string | undefined;
            descrription?: string | undefined;
            component?: string | undefined;
            options?: {
                [key: string]: any;
            } | undefined;
            withFormItem?: boolean | undefined;
            widget?: string | undefined;
            items?: import("../types").UISchema | import("../types").UISchema[] | undefined;
            propertiesOrder?: string[] | undefined;
            enumOptions: {
                key: any;
                value: any;
            }[];
        };
        errors: any;
    }>;
    componentRef: import("vue").ComputedRef<new () => import("vue").ComponentPublicInstance<{
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("../types").WidgetOptions;
        onChange: (value: any) => void;
        schema: Schema;
        rootSchema: Schema;
        uiSchema: import("../types").UISchema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
    } & {
        errors?: string[] | undefined;
    }, {}, {}, {}, {}, {}, {
        required: boolean;
        title: string;
        path: string;
        value: unknown;
        id: string;
        options: import("../types").WidgetOptions;
        onChange: (value: any) => void;
        schema: Schema;
        rootSchema: Schema;
        uiSchema: import("../types").UISchema;
        isDependenciesKey: boolean;
        errorSchema: unknown;
    } & {
        errors?: string[] | undefined;
    }, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
    vjsfRef: import("vue").ComputedRef<import("../types").UISchema>;
    schemaTitleRef: import("vue").ComputedRef<string>;
    formContextRef: import("vue").Ref<import("../Context").VJSFContext>;
};
export {};
