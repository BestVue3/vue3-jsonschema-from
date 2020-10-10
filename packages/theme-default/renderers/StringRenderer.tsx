import { defineComponent, PropType, computed, VNodeChild } from 'vue'
import { createUseStyles } from 'vue-jss'

import { renderItem } from '../utils'
import { CommonWidgetPropsDefine } from '../types'

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
  return (uiSchema && uiSchema.widget) || ''
}

export default defineComponent({
  name: 'StringRenderer',
  props: CommonWidgetPropsDefine,
  setup(props) {
    const classesRef = useStyles()

    const handleChange = (e: any) => {
      props.onChange(e.target.value)
    }

    return () => {
      const classes = classesRef.value

      const { value, uiSchema } = props

      const widget = getWidget(props.uiSchema)

      // const id = `vjsf-${path}`

      return renderItem(props, (id: string) => {
        const commonProps = {
          class: classes.input,
          id,
          value: (value as any) || '',
          onInput: handleChange,
        }

        return widget === 'textarea' ? (
          <textarea {...commonProps} rows={5} />
        ) : (
          <input {...commonProps} type={widget || 'text'} />
        )
      })
    }
  },
})
