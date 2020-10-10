import { defineComponent, computed } from 'vue'

import { ThemeRendererComponentNames, RendererComponentDefine } from '../theme'
import { CommonTypePropsDefine } from '../types'

import { useCommonField } from './common'

const Comp = defineComponent({
  name: 'NumberField',
  props: CommonTypePropsDefine,
  setup(props) {
    const { ComponentRef, rendererPropsRef } = useCommonField(
      props,
      ThemeRendererComponentNames.NumberRenderer,
    )

    const handleChangeRef = computed(() => {
      const { onChange } = props

      return (v: number | undefined) => {
        const num = Number(v)
        if (Number.isNaN(num)) onChange(undefined)
        else onChange(num)
      }
    })

    const { value, schema } = props

    if (value === undefined || typeof value !== 'number') {
      if (typeof schema.default === 'number') {
        handleChangeRef.value(schema.default)
      }
    }

    return () => {
      const NumberRenderer: RendererComponentDefine = ComponentRef.value

      return (
        <NumberRenderer
          {...rendererPropsRef.value}
          onChange={handleChangeRef.value}
        />
      )
    }
  },
})

export default Comp
