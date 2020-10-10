import { defineComponent, PropType, computed, VNodeChild } from 'vue'
import { createUseStyles } from 'vue-jss'

import { renderItem } from '../utils'
import { CommonRendererPropsDefine } from '../types'
import { Schema, SchemaTypes } from '../../types'

const useStyles = createUseStyles({
  input: {
    width: '100%',
    padding: 7,
    borderRadius: 3,
    border: '1px solid #dedede',
  },
})

const rangeKeyMap: any = {
  minimum: 'min',
  maximum: 'max',
  multipleOf: 'step',
}
function getRangeProps(schema: any, options: any) {
  const props: any = {}
  Object.keys(rangeKeyMap).forEach(k => {
    if (schema[k]) props[rangeKeyMap[k]] = schema[k]
  })
  return {
    ...props,
    ...options,
  }
}

export default defineComponent({
  name: 'StringRenderer',
  props: CommonRendererPropsDefine,
  setup(props) {
    const classesRef = useStyles()

    const handleChange = (e: any) => {
      let value = e.target.value
      const num = Number(value)
      if (Number.isNaN(num)) {
        value = undefined
      } else {
        value = num
      }
      props.onChange(value)
    }

    return () => {
      const classes = classesRef.value

      const { value, schema, uiSchema } = props

      // const id = `vjsf-${path}`

      if (uiSchema && uiSchema.widget) {
        const widget = uiSchema.widget
        const { options } = uiSchema

        if (widget === 'range') {
          if (schema.type !== SchemaTypes.INTEGER) {
            console.warn(`range should be used in integer type`)
          }
          const opts = getRangeProps(schema, options)
          return renderItem(props, (id: string) => (
            <input
              class={classes.input}
              type="range"
              id={id}
              value={(value as any) || ''}
              onInput={handleChange}
              {...opts}
            />
          ))
        }
      }

      return renderItem(props, (id: string) => (
        <input
          class={classes.input}
          type="number"
          id={id}
          value={(value as any) || ''}
          onInput={handleChange}
        />
      ))
    }
  },
})
