import { defineComponent, computed } from 'vue'

import { CommonFieldPropsDefine, SchemaTypes } from '../types'

import { useCommonField } from './common'

const Comp = defineComponent({
  name: 'NumberField',
  props: CommonFieldPropsDefine,
  setup(props) {
    const { componentRef, rendererPropsRef } = useCommonField(
      props,
      // SchemaTypes.NUMBER,
      (props.schema.type as SchemaTypes) || SchemaTypes.NUMBER,
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
      const NumberRenderer = componentRef.value

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
