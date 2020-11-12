import {
  PropType,
  ComponentPublicInstance,
  Ref,
  ExtractPropTypes,
  VNodeChild,
  DefineComponent,
} from 'vue'

import { JSONSchema6, JSONSchema7 } from 'json-schema'
import { Options as AjvOptions } from 'ajv'

import { AjvFormat, AjvKeyword } from './validator/types'
import { WidgetComponentDefine } from './theme/utils'

export enum SchemaTypes {
  'NUMBER' = 'number',
  'INTEGER' = 'integer',
  'STRING' = 'string',
  'OBJECT' = 'object',
  'ARRAY' = 'array',
  'BOOLEAN' = 'boolean',
}

// type SchemaTypes =
//   | 'number'
//   | 'string'
//   | 'integer'
//   | 'object'
//   | 'array'
//   | 'boolean'

export interface VueJsonSchemaConfig {
  title?: string
  descrription?: string
  component?: string
  options?: {
    [key: string]: any
  }
  withFormItem?: boolean
  widget?: 'checkbox' | 'textarea' | 'select' | 'radio' | 'range' | string
  items?: UISchema | UISchema[]
  propertiesOrder?: string[]
  controls?: {
    sortable?: boolean
    removeable?: boolean
    addable?: boolean
  }
}

type SchemaRef = { $ref: string }

export type Schema = (JSONSchema6 | JSONSchema7) & {
  enumNames?: (string | number)[]
  vjsf?: VueJsonSchemaConfig
}

// type Schema = any
// export interface Schema {
//   type?: SchemaTypes | string
//   const?: any
//   format?: string

//   title?: string
//   default?: any

//   properties?: {
//     [key: string]: Schema | { $ref: string }
//   }
//   items?: Schema | Schema[] | SchemaRef
//   uniqueItems?: any
//   dependencies?: {
//     [key: string]: string[] | Schema | SchemaRef
//   }
//   oneOf?: Schema[]
//   anyOf?: Schema[]
//   allOf?: Schema[]
//   vjsf?: VueJsonSchemaConfig
//   required?: string[]
//   enum?: any[]
//   enumNames?: any[]
//   enumKeyValue?: any[]
//   additionalProperties?: any
//   additionalItems?: Schema

//   minLength?: number
//   maxLength?: number
//   minimun?: number
//   maximum?: number
//   multipleOf?: number
//   exclusiveMaximum?: number
//   exclusiveMinimum?: number
// }

// export interface UISchemaNest {
//   [property: string]: UISchema
// }

declare type ComponentPublicInstanceConstructor<
  T extends ComponentPublicInstance
> = {
  new (): T
}

export interface UISchema extends VueJsonSchemaConfig {
  properties?: {
    [property: string]: UISchema
  }
}

export interface CustomFormat extends AjvFormat {
  component: ComponentPublicInstanceConstructor<
    ComponentPublicInstance<ExtractPropTypes<typeof CommonWidgetPropsDefine>>
  >
}

export interface CustomKeyword extends AjvKeyword {
  transformSchema?: (originSchema: Schema) => Schema
}

export interface JsonSchemFormPlugin {
  customFormats?: CustomFormat[] | CustomFormat
  customKeywords?: CustomKeyword[] | CustomKeyword
}

// export interface A extends ComponentObjectPropsOptions {
//   path: Prop<string>
//   value: Prop<any>
//   schema: Prop<Schema>
//   rootSchema: Prop<Schema>
//   uiSchema: Prop<UISchema>
//   onChange: Prop<(value: any) => void>
//   requiredError: Prop<boolean>
//   required: Prop<boolean>
// }

// fix error TS2456: Type alias 'ErrorSchema' circularly references itself
interface ErrorSchemaObject {
  [level: string]: ErrorSchema
}

export type ErrorSchema = ErrorSchemaObject & {
  __errors: string[]
}

export const CommonPropsDefine = {
  id: {
    type: String as PropType<string>,
    required: true,
  },
  path: {
    type: String as PropType<string>,
    required: true,
  },
  value: {
    required: true,
  },
  schema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  rootSchema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  uiSchema: {
    type: Object as PropType<UISchema>,
    required: true,
  },
  onChange: {
    type: Function as PropType<(value: any) => void>,
    required: true,
  },
  // requiredError: {
  //   type: Boolean as PropType<boolean>,
  //   required: true,
  // },
  required: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  isDependenciesKey: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
} as const

export const CommonFieldPropsDefine = {
  ...CommonPropsDefine,
  errorSchema: {
    type: Object as PropType<ErrorSchema>,
    required: true,
  },
} as const

export interface WidgetOptions {
  enumOptions?: {
    key: string
    value: string | number | boolean
  }[]
  widget?: string | WidgetComponentDefine
  disabled?: boolean
  readonly?: boolean
  // TODO: can be component
  description?: string | VNodeChild
  multiple?: boolean
}
export const CommonWidgetPropsDefine = {
  ...CommonPropsDefine,
  title: {
    type: String as PropType<string>,
    required: true,
  },
  errors: {
    type: Array as PropType<string[]>,
  },
  options: {
    type: Object as PropType<WidgetOptions>,
    required: true,
  },
} as const

export const SchemaFormPropsDefine = {
  schema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  uiSchema: {
    type: Object as PropType<UISchema>,
  },
  value: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
  },
  onChange: {
    type: Function as PropType<(value: any) => void>,
    required: true,
  },
  formProps: {
    type: Object as PropType<{ [key: string]: any }>,
  },
  plugins: {
    type: Array as PropType<JsonSchemFormPlugin[] | JsonSchemFormPlugin>,
  },
  locale: {
    type: String as PropType<string>,
    default: 'zh',
  },
  ajvInstanceOptions: {
    type: Object as PropType<AjvOptions>,
  },
  /**
   * use this to provide owner `doValidate`
   */
  contextRef: {
    type: Object as PropType<Ref>,
  },
  customValidate: {
    type: Function as PropType<(data: any, errors: any) => void>,
  },
} as const

export * from './theme/types'
