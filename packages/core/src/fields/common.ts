import { computed, ExtractPropTypes } from 'vue'

import {
  useWidget,
  ThemeRendererComponentNames,
  BuiltInWidgets,
  // BuiltInWidgets
} from '../theme'
import { useVJSFContext } from '../Context'
import { CommonFieldPropsDefine, Schema, SchemaTypes } from '../types'
import { getSchemaType, isSelect, optionsList } from '../utils'

type PropsArg = ExtractPropTypes<typeof CommonFieldPropsDefine>

export const getUiSchema = (props: PropsArg) => {
  const uiSchemaRef = computed(() => {
    const uiSchema = props.uiSchema
    const vjsf = props.schema.vjsf

    if (uiSchema && vjsf) {
      return { ...vjsf, ...uiSchema }
    } else {
      return uiSchema || vjsf || {}
    }
  })

  return uiSchemaRef
}

function getDefaultWidgetOfSchema(schema: Schema, type: SchemaTypes) {
  let defaultType: string = 'text'
  switch (type) {
    case SchemaTypes.NUMBER:
    case SchemaTypes.INTEGER: {
      defaultType = 'number'
      break
    }
    case SchemaTypes.STRING: {
      defaultType = 'text'
      break
    }
    case SchemaTypes.BOOLEAN: {
      defaultType = 'checkbox'
      break
    }
  }
  return isSelect(schema) ? 'select' : defaultType
}

// TODO: resovle widgets
export function useCommonField(props: PropsArg, type: SchemaTypes) {
  // const ComponentRef = useWidget(props.schema, name)

  const componentRef = computed(() => {
    const { uiSchema } = props

    const widget =
      uiSchema.widget || getDefaultWidgetOfSchema(props.schema, type)

    const Widget = useWidget(props.schema, widget)
    return Widget.value
    // const widget
  })

  const optionsRef = computed(() => {
    const { schema, uiSchema } = props
    const enumOptions = isSelect(schema) ? optionsList(schema) : []
    return {
      enumOptions,
      ...uiSchema,
    }
  })

  const formContextRef = useVJSFContext()

  const formatRef = computed(() => props.schema.format)

  // const errorsRef = computed(() => {
  //   const errors = formContextRef.value.errors.filter(
  //     (e: any) => e.dataPath === props.path,
  //   )
  //   return errors
  // })

  const vjsfRef = computed(() => {
    const { schema, uiSchema } = props

    return uiSchema || schema.vjsf || {}
    // return props.schema.vjsf || {}
  })

  const uiSchemaRef = getUiSchema(props)

  /* title about */
  const schemaTitleRef = computed(() => {
    const vjsf = uiSchemaRef.value
    const { schema } = props
    return schema.title || (vjsf && vjsf.title ? vjsf.title : '')
  })

  // const optionsRef = computed(() => {
  //   const { schema, uiSchema } = props
  // })

  // const titleRef = computed(() => {
  //   return schemaTitleRef.value || ''
  // })
  /* title about */

  const rendererPropsRef = computed(() => {
    return {
      id: props.id,
      value: props.value,
      // onChange: handleChangeRef.value,
      format: formatRef.value,
      schema: props.schema,
      uiSchema: uiSchemaRef.value,
      // errors: errorsRef.value,
      title: schemaTitleRef.value,
      required: props.required,
      // requiredError: props.requiredError,
      rootSchema: props.rootSchema,
      // description: props.description,
      // vjsf: props.schema.vjsf,
      path: props.path,
      isDependenciesKey: props.isDependenciesKey,
      // TODO: handle options
      options: optionsRef.value,
      errors: (props.errorSchema && props.errorSchema.__errors) || [],
      // additionProps: vjsfRef.value.additionProps || {},
      // ...props.vjsf.additionProps,
    }
  })

  return {
    rendererPropsRef,
    componentRef,
    vjsfRef,
    schemaTitleRef,
    formContextRef,
  }
}
