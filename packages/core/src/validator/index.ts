import Ajv, { Options } from 'ajv'
import ajvErrors from 'ajv-errors'
import toPath from 'lodash.topath'

const i18n = require('ajv-i18n')

import { CreateInstanceOptions, ConstantCreateInstanceOptions } from './types'
import defaultOptions from './instance-default-options'
import { Schema, ErrorSchema } from '../types'
import { isObject } from '../utils'

export * from './types'

function mergeMaybeArray(a1: any, a2: any) {
  const f1 = a1 ? (Array.isArray(a1) ? a1 : [a1]) : []
  const f2 = a2 ? (Array.isArray(a2) ? a2 : [a2]) : []
  return [...f1, ...f2]
}

function mergerOptions(
  op1: CreateInstanceOptions,
  op2: CreateInstanceOptions,
): ConstantCreateInstanceOptions {
  const ajvOption: Options = {
    ...op1.options,
    ...op2.options,
  }

  const formats = mergeMaybeArray(op1.formats, op2.formats) // TODO: 去除 name 相同的？考虑名称相同但是 `number` 和 `string` 不同
  const keywords = mergeMaybeArray(op1.keywords, op2.keywords)

  return {
    // locale: op2.locale || op1.locale || 'zh',
    options: ajvOption,
    formats,
    keywords,
  }
}

export function createInstance(opts: CreateInstanceOptions = {}) {
  const options = mergerOptions(defaultOptions, opts)

  const { options: instanceOptions, formats, keywords } = options

  const ajv = new Ajv(instanceOptions)
  ajvErrors(ajv as any)

  formats.forEach(({ name, definition }) => ajv.addFormat(name, definition))
  keywords.forEach(({ name, definition }) => ajv.addKeyword(name, definition))

  // ajv.validate

  return ajv
}

const defaultInstance = createInstance({})

export function validateData(schema: any, data: any) {
  const valid = defaultInstance.validate(schema, data)
  return {
    valid,
    errors: defaultInstance.errors,
  }
}

// interface ErrorSchema {
//   [level: string]: ErrorSchema
//   __errors: string[]
// }

function toErrorSchema(errors: FormatedErrorObject[]) {
  // Transforms a ajv validation errors list:
  // [
  //   {property: ".level1.level2[2].level3", message: "err a"},
  //   {property: ".level1.level2[2].level3", message: "err b"},
  //   {property: ".level1.level2[4].level3", message: "err b"},
  // ]
  // Into an error tree:
  // {
  //   level1: {
  //     level2: {
  //       2: {level3: {errors: ["err a", "err b"]}},
  //       4: {level3: {errors: ["err b"]}},
  //     }
  //   }
  // };
  if (!errors.length) {
    return {}
  }
  return errors.reduce((errorSchema, error) => {
    const { property, message } = error
    const path = toPath(property)
    let parent = errorSchema

    // If the property is at the root (.level1) then toPath creates
    // an empty array element at the first index. Remove it.
    if (path.length > 0 && path[0] === '') {
      path.splice(0, 1)
    }

    for (const segment of path.slice(0)) {
      if (!(segment in parent)) {
        ;(parent as any)[segment] = {}
      }
      parent = parent[segment]
    }

    if (Array.isArray(parent.__errors)) {
      // We store the list of errors for this node in a property named __errors
      // to avoid name collision with a possible sub schema field named
      // "errors" (see `validate.createErrorHandler`).
      parent.__errors = parent.__errors.concat(message || '')
    } else {
      if (message) {
        parent.__errors = [message]
      }
    }
    return errorSchema
  }, {} as ErrorSchema)
}

export interface FormatedErrorObject {
  name: string
  property: string
  message?: string
  params: Ajv.ErrorParameters // specific to ajv
  stack: string
  schemaPath: string
}

/**
 * Transforming the error output from ajv to format used by jsonschema.
 * At some point, components should be updated to support ajv.
 */
function transformAjvErrors(
  errors: Ajv.ErrorObject[] | null | undefined = [],
): FormatedErrorObject[] {
  if (errors === null || errors === undefined) {
    return []
  }

  return errors.map(e => {
    const { dataPath, keyword, message, params, schemaPath } = e
    let property = `${dataPath}`

    // put data in expected format
    return {
      name: keyword,
      property,
      message,
      params, // specific to ajv
      stack: `${property} ${message}`.trim(),
      schemaPath,
    }
  })
}

/**
 * This function processes the formData with a user `validate` contributed
 * function, which receives the form data and an `errorHandler` object that
 * will be used to add custom validation errors for each field.
 */
export function validateFormData(
  formData: any,
  schema: Schema,
  instance: Ajv.Ajv,
  locale: string = 'zh',
  customValidate?: (data: any, errorSchema: any) => void,
  transformErrors?: (errors: FormatedErrorObject[]) => FormatedErrorObject[],
  // additionalMetaSchemas = [],
  // customFormats = {}
) {
  // Include form data with undefined values, which is required for validation.
  const rootSchema = schema
  // formData = getDefaultFormState(schema, formData, rootSchema, true);

  // const newMetaSchemas = !deepEquals(formerMetaSchema, additionalMetaSchemas);
  // const newFormats = !deepEquals(formerCustomFormats, customFormats);

  // if (newMetaSchemas || newFormats) {
  //   ajv = createAjvInstance();
  // }

  const ajv = instance

  // add more schemas to validate against
  // if (
  //   additionalMetaSchemas &&
  //   newMetaSchemas &&
  //   Array.isArray(additionalMetaSchemas)
  // ) {
  //   ajv.addMetaSchema(additionalMetaSchemas);
  //   formerMetaSchema = additionalMetaSchemas;
  // }

  // add more custom formats to validate against
  // if (customFormats && newFormats && isObject(customFormats)) {
  //   Object.keys(customFormats).forEach(formatName => {
  //     ajv.addFormat(formatName, customFormats[formatName]);
  //   });

  //   formerCustomFormats = customFormats;
  // }

  let validationError = null
  try {
    ajv.validate(schema, formData)
  } catch (err) {
    validationError = err
  }

  i18n[locale](ajv.errors)
  let errors = transformAjvErrors(ajv.errors)
  // Clear errors to prevent persistent errors, see #1104

  ajv.errors = null

  const noProperMetaSchema =
    validationError &&
    validationError.message &&
    typeof validationError.message === 'string' &&
    validationError.message.includes('no schema with key or ref ')

  if (noProperMetaSchema) {
    errors = [
      ...errors,
      {
        stack: validationError.message,
      } as FormatedErrorObject,
    ]
  }
  if (typeof transformErrors === 'function') {
    errors = transformErrors(errors)
  }

  let errorSchema = toErrorSchema(errors)

  if (noProperMetaSchema) {
    errorSchema = {
      ...errorSchema,
      ...{
        $schema: {
          __errors: [validationError.message],
        },
      },
    }
  }

  if (typeof customValidate !== 'function') {
    return { errors, errorSchema }
  }

  const customErrorSchemaProxy = createErrorHandlerProxy({})

  customValidate(formData, customErrorSchemaProxy)
  // const userErrorSchema = unwrapErrorHandler(toRaw(customErrorSchemaProxy))
  const userErrorSchema = toRaw(customErrorSchemaProxy) as ErrorSchema
  const newErrorSchema = mergeObjects(errorSchema, userErrorSchema, true)
  // XXX: The errors list produced is not fully compliant with the format
  // exposed by the jsonschema lib, which contains full field paths and other
  // properties.
  const newErrors = toErrorList(newErrorSchema)

  return {
    errors: newErrors,
    errorSchema: newErrorSchema,
  }
}

export function toErrorList(errorSchema: ErrorSchema, fieldName = 'root') {
  // XXX: We should transform fieldName as a full field path string.
  let errorList: FormatedErrorObject[] = []
  if ('__errors' in errorSchema) {
    errorList = errorList.concat(
      errorSchema.__errors!.map(stack => {
        return {
          stack: `${fieldName}: ${stack}`,
        } as FormatedErrorObject
      }),
    )
  }
  return Object.keys(errorSchema).reduce((acc, key) => {
    if (key !== '__errors') {
      acc = acc.concat(toErrorList(errorSchema[key], key))
    }
    return acc
  }, errorList)
}

export function mergeObjects(
  obj1: any,
  obj2: any,
  concatArrays: boolean = false,
) {
  // Recursively merge deeply nested objects.
  var acc = Object.assign({}, obj1) // Prevent mutation of source object.
  return Object.keys(obj2).reduce((acc, key) => {
    const left = obj1 ? obj1[key] : {},
      right = obj2[key]
    if (obj1 && obj1.hasOwnProperty(key) && isObject(right)) {
      acc[key] = mergeObjects(left, right, concatArrays)
    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
      acc[key] = left.concat(right)
    } else {
      acc[key] = right
    }
    return acc
  }, acc)
}

// function unwrapErrorHandler(errorHandler: any) {
//   return Object.keys(errorHandler).reduce((acc, key) => {
//     if (key === "addError") {
//       return acc;
//     } else if (key === "__errors") {
//       return { ...acc, [key]: errorHandler[key] };
//     }
//     return { ...acc, [key]: unwrapErrorHandler(errorHandler[key]) };
//   }, {});
// }

// function isProxy(obj: any) {
//   return obj.__is_proxy__
// }

function toRaw(p: any) {
  return p.__get_raw__
}

function createErrorHandlerProxy(raw: object = {}) {
  return new Proxy(raw, {
    get(target, key, receiver) {
      if (key === 'addError') {
        return (message: string) => {
          const t: any = target
          if (t.__errors) t.__errors.push(message)
          else t.__errors = [message]
        }
      }

      if (key === '__get_raw__') {
        return raw
      }

      /**
       * since we only use this method to handle customValidate
       * we know that the `raw` is always `{}`
       */
      // if (key === '__is_proxy__') {
      //   return true
      // }

      const res = Reflect.get(target, key, receiver)

      if (res === undefined) {
        const proxy: any = createErrorHandlerProxy({})
        ;(target as any)[key] = proxy
        return proxy
      }

      return res
    },
  })
}
