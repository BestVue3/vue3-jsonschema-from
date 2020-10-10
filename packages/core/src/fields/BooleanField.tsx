import { defineComponent, computed } from 'vue'

import { BuiltInWidgets, RendererComponentDefine } from '../theme'
import { CommonFieldPropsDefine, SchemaTypes } from '../types'

import { useCommonField } from './common'

const Comp = defineComponent({
  name: 'BooleanField',
  props: CommonFieldPropsDefine,
  setup(props) {
    const { componentRef, rendererPropsRef } = useCommonField(
      props,
      SchemaTypes.BOOLEAN,
    )

    const handleChangeRef = computed(() => {
      const { onChange } = props

      return (v: boolean) => {
        // TODO: 处理空值
        onChange(v)
      }
    })

    const { value, schema } = props

    if (value === undefined || typeof value !== 'boolean') {
      if (typeof schema.default === 'boolean') {
        handleChangeRef.value(schema.default)
      } else {
        handleChangeRef.value(!!value)
      }
    }

    return () => {
      const BooleanRenderer: RendererComponentDefine = componentRef.value

      return (
        <BooleanRenderer
          {...rendererPropsRef.value}
          onChange={handleChangeRef.value}
        />
      )
    }
  },
})

export default Comp
