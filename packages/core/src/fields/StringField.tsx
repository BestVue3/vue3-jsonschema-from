import { defineComponent, computed } from 'vue'

import { useThemeContext, getWidget } from '../theme'
import { CommonFieldPropsDefine, SchemaTypes } from '../types'

import { useCommonField } from './common'

function findFormatComponent(map: any, format: string, type: SchemaTypes) {
  let t = type
  if (t === SchemaTypes.INTEGER) t = SchemaTypes.NUMBER
  return map[t][format] || format // TODO: map.common[format]
}

const Comp = defineComponent({
  name: 'StringField',
  props: CommonFieldPropsDefine,
  setup(props) {
    const { componentRef, rendererPropsRef, formContextRef } = useCommonField(
      props,
      // BuiltInWidgets.TextWidget,
      SchemaTypes.STRING,
    )

    const themeContext = useThemeContext()

    const formatedComponentRef = computed(() => {
      const { schema } = props
      if (!schema.format) return componentRef.value
      const formContext = formContextRef.value
      let FormatComponent = findFormatComponent(
        formContext.formatMaps,
        schema.format,
        SchemaTypes.STRING,
      )
      if (FormatComponent && typeof FormatComponent === 'string') {
        FormatComponent = getWidget(
          schema,
          FormatComponent,
          themeContext.value.widgets,
        )
      }
      return FormatComponent
    })

    const handleChangeRef = computed(() => {
      const { onChange } = props

      return (v: string | undefined) => {
        // TODO: 处理空值
        onChange(v)
      }
    })

    const { value, schema } = props

    if (value === undefined || typeof value !== 'string') {
      if (typeof schema.default === 'string') {
        handleChangeRef.value(schema.default)
      }
    }

    return () => {
      const Component = formatedComponentRef.value
      // const { schema } = props

      // const formContext = formContextRef.value

      // if (schema.format) {
      //   let FormatComponent = findFormatComponent(
      //     formContext.formatMaps,
      //     schema.format,
      //     SchemaTypes.STRING,
      //   )
      //   if (FormatComponent) {
      //     return (
      //       <FormatComponent
      //         {...rendererPropsRef.value}
      //         onChange={handleChangeRef.value}
      //       />
      //     )
      //   }
      // }

      return (
        <Component
          {...rendererPropsRef.value}
          onChange={handleChangeRef.value}
        />
      )
    }
  },
})

export default Comp
