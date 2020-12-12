import {
  defineComponent,
  computed,
  provide,
  watch,
  isRef,
  ref,
  Ref,
  toRaw,
} from 'vue'

import { useComponent, ThemeLayoutsNames as TCN } from './theme'
import { VJSFContext } from './Context'
import { createInstance, validateFormData } from './validator'
import SchemaItem from './SchemaItem'

import {
  Schema,
  JsonSchemFormPlugin,
  UISchema,
  SchemaFormPropsDefine,
  ErrorSchema,
} from './types'

import { CreateInstanceOptions, FormatedErrorObject } from './validator'

function transformOptions(props: any) {
  return computed(() => {
    const { ajvInstanceOptions, plugins } = props
    // debugger
    const ajvOptions: CreateInstanceOptions = {
      options: ajvInstanceOptions || {},
      formats: [],
      keywords: [],
    }

    /**
     * TODO: 是否需要默认的map
     */
    const formatMaps: any = {
      string: {},
      number: {},
    }

    const keywordTransforms: Record<string, any> = {}

    const innerPlugins = plugins
      ? Array.isArray(plugins)
        ? plugins
        : [plugins]
      : []

    innerPlugins.forEach((plugin: JsonSchemFormPlugin) => {
      const { customFormats, customKeywords } = plugin
      if (customFormats && Array.isArray(customFormats)) {
        customFormats.forEach(({ name, definition, component }) => {
          const type: string = definition && (definition as any).type
          if (component) {
            if (type) formatMaps[type][name] = component
            else {
              formatMaps.string[name] = component
              formatMaps.number[name] = component
            }
          }
          const formats: any = ajvOptions.formats || []
          formats.push({
            name,
            definition,
          })
        })
      }

      if (customKeywords && Array.isArray(customKeywords)) {
        customKeywords.forEach(({ name, definition, transformSchema }) => {
          const keywords: any = ajvOptions.keywords || []

          keywords.push({
            name,
            definition,
          })

          if (transformSchema && typeof transformSchema === 'function') {
            if (keywordTransforms[name]) {
              console.warn(
                `keyword ${name} already registered, please conside change to another keyword`,
              )
            }
            keywordTransforms[name] = transformSchema
          }
        })
      }
    })

    return {
      ajvOptions,
      formatMaps,
      keywordTransforms,
    }
  })
}

export default defineComponent({
  name: 'JsonSchemaForm',
  props: {
    ...SchemaFormPropsDefine,
  },
  setup(props) {
    const Form = useComponent(TCN.Form)

    /**
     * TODO: change of props.value & props.schema should reset errors?
     */
    const formErrorsRef: Ref<{
      errors: FormatedErrorObject[]
      errorSchema: ErrorSchema
    }> = ref({
      errors: [],
      errorSchema: {
        __errors: [],
      } as any,
    })

    const handleChange = (value: any) => {
      const onChange = props.onChange
      onChange(value)
      // return (value: any) => {
      //   onChange(value)
      // }
    }

    const transformedOptions = transformOptions(props)

    const validator = computed(() => {
      const { ajvOptions } = transformedOptions.value

      return createInstance(ajvOptions)
    })

    const context = computed(() => {
      const { locale } = props
      const { formatMaps } = transformedOptions.value
      // const v = validator.value

      return {
        formatMaps,
        SchemaItem,
        validate: (schema: Schema, data: any) => {
          const { errorSchema, errors } = validateFormData(
            toRaw(data),
            toRaw(schema),
            validator.value,
            locale,
            props.customValidate,
          )

          return {
            errorSchema,
            errors,
            valid: errors.length === 0,
          }
        },
      }
    })

    provide(VJSFContext, context)

    watch(
      () => props.contextRef,
      ref => {
        if (isRef(ref)) {
          ref.value = {
            doValidate: () => {
              const { schema, value, locale, customValidate } = props

              const { errorSchema, errors } = validateFormData(
                toRaw(value),
                toRaw(schema),
                validator.value,
                locale,
                customValidate,
              )

              formErrorsRef.value = {
                errors,
                errorSchema,
              }

              return {
                errorSchema,
                errors,
                valid: errors.length === 0,
              }
            },
          }
        }
      },
      { immediate: true },
    )

    return () => {
      const { formProps, value, schema, uiSchema } = props
      const { errorSchema } = formErrorsRef.value

      return (
        <Form.value {...formProps}>
          <SchemaItem
            id="root"
            required={false}
            // requiredError={false}
            isDependenciesKey={false}
            value={value}
            rootSchema={schema}
            uiSchema={uiSchema || {}}
            schema={schema}
            path=""
            errorSchema={errorSchema || {}}
            onChange={handleChange}
          />
        </Form.value>
      )
    }
  },
})
