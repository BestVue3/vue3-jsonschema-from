import { defineComponent, shallowRef, watchEffect } from 'vue'
import { createUseStyles } from 'vue-jss'

import { renderItem } from '../../utils'
import { CommonWidgetPropsDefine } from '../../types'
import { SchemaTypes } from '@vjsf/core'

const useStyles = createUseStyles({
  input: {
    width: '100%',
    padding: 7,
    borderRadius: 3,
    border: '1px solid #dedede',
    resize: 'none',
  },
})

const getWidget = (uiSchema: any) => {
  return (uiSchema && uiSchema.widget) || '' // no default so `type` pass down will work
}

export default defineComponent({
  name: 'BaseInput',
  inheritAttrs: false, // keep input attrs out of FormItem
  props: {
    ...CommonWidgetPropsDefine,
    type: String,
    inputClass: String,
  },
  setup(props, { attrs }) {
    const classesRef = useStyles()

    const currentValue = shallowRef(props.value)
    const inputRef = shallowRef()

    const handleChange = (e: any) => {
      currentValue.value = e.target.value
      props.onChange(e.target.value)
    }

    // make input controlled
    watchEffect(
      () => {
        if (inputRef.value && currentValue.value !== props.value) {
          currentValue.value = props.value
        }
      },
      {
        flush: 'post',
      },
    )

    return () => {
      const classes = classesRef.value

      const { id, value, schema, type, inputClass } = props

      const defaultInputType =
        type ||
        (schema.type === SchemaTypes.INTEGER ||
        schema.type === SchemaTypes.NUMBER
          ? 'number'
          : 'text')

      const widget = getWidget(props.uiSchema)

      // const id = `vjsf-${path}`

      return renderItem(props, () => {
        const commonProps = {
          class: `${classes.input} ${inputClass}`,
          id,
          value: (value as any) || '',
          onInput: handleChange,
        }

        return widget === 'textarea' ? (
          <textarea {...attrs} {...commonProps} rows={5} ref={inputRef} />
        ) : (
          <input
            {...attrs}
            {...commonProps}
            type={widget || defaultInputType}
            ref={inputRef}
          />
        )
      })
    }
  },
})
