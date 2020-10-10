import { computed, ExtractPropTypes } from 'vue'

import {
  useComponent,
  ThemeRendererComponentNames,
  ThemeOtherComponnetNames,
} from '../theme'
import { useVJSFContext } from '../Context'
import { CommonTypePropsDefine } from '../types'

type PropsArg = ExtractPropTypes<typeof CommonTypePropsDefine>

export const getUiSchema = (props: PropsArg) => {
  const uiSchemaRef = computed(() => {
    const uiSchema = props.uiSchema
    const vjsf = props.schema.vjsf

    if (uiSchema && vjsf) {
      return { ...vjsf, ...uiSchema }
    } else {
      return uiSchema || vjsf || undefined
    }
  })

  return uiSchemaRef
}

export function useCommonField<
  N extends ThemeOtherComponnetNames | ThemeRendererComponentNames
>(props: PropsArg, name: N) {
  const ComponentRef = useComponent(name)

  const formContextRef = useVJSFContext()

  const formatRef = computed(() => props.schema.format)

  const errorsRef = computed(() => {
    const errors = formContextRef.value.errors.filter(
      (e: any) => e.dataPath === props.path,
    )
    return errors
  })

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
    return schema.title || (vjsf ? vjsf.title : '')
  })

  // const titleRef = computed(() => {
  //   return schemaTitleRef.value || ''
  // })
  /* title about */

  const rendererPropsRef = computed(() => {
    return {
      value: props.value,
      // onChange: handleChangeRef.value,
      format: formatRef.value,
      schema: props.schema,
      uiSchema: uiSchemaRef.value,
      errors: errorsRef.value,
      title: schemaTitleRef.value,
      required: props.required,
      requiredError: props.requiredError,
      rootSchema: props.rootSchema,
      // description: props.description,
      // vjsf: props.schema.vjsf,
      path: props.path,
      isDependenciesKey: props.isDependenciesKey,
      // additionProps: vjsfRef.value.additionProps || {},
      // ...props.vjsf.additionProps,
    }
  })

  return {
    rendererPropsRef,
    ComponentRef,
    vjsfRef,
    schemaTitleRef,
    formContextRef,
  }
}
