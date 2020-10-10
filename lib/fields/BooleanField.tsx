import { defineComponent, computed } from 'vue'

import { ThemeRendererComponentNames, RendererComponentDefine } from '../theme'
import { CommonTypePropsDefine } from '../types'

import { useCommonField } from './common'

const Comp = defineComponent({
  name: 'BooleanField',
  props: CommonTypePropsDefine,
  setup(props) {
    const { ComponentRef, rendererPropsRef } = useCommonField(
      props,
      ThemeRendererComponentNames.BooleanRenderer,
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
      const BooleanRenderer: RendererComponentDefine = ComponentRef.value

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
