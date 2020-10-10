import { defineComponent, computed } from 'vue'

import { ThemeRendererComponentNames, BuiltInWidgets } from '../theme'
import { CommonFieldPropsDefine, SchemaTypes } from '../types'

import { useCommonField } from './common'

function findFormatComponent(map: any, format: string, type: SchemaTypes) {
  let t = type
  if (t === SchemaTypes.INTEGER) t = SchemaTypes.NUMBER
  return map[t][format] || map.common[format]
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
      const StringRenderer = componentRef.value
      const { schema } = props

      const formContext = formContextRef.value

      if (schema.format) {
        const FormatComponent = findFormatComponent(
          formContext.formatMaps,
          schema.format,
          SchemaTypes.STRING,
        )
        if (FormatComponent) {
          return (
            <FormatComponent
              {...rendererPropsRef.value}
              onChange={handleChangeRef.value}
            />
          )
        }
      }

      return (
        <StringRenderer
          {...rendererPropsRef.value}
          onChange={handleChangeRef.value}
        />
      )
    }
  },
})

export default Comp
