import { defineComponent, PropType, ref, watch } from 'vue'
import { createUseStyles } from 'vue-jss'
import { CommonWidgetPropsDefine } from '../types'
import { Schema } from '@vjsf/core'
import { renderItem } from '../utils'

const useStyles = createUseStyles({
  select: {
    width: '100%',
    outline: 'none',
    padding: 7,
    borderRadius: 3,
    border: '1px solid #dedede',
  },
  option: {
    padding: 10,
  },
})

const SelectWidget = defineComponent({
  name: 'SelectWidget',
  props: {
    ...CommonWidgetPropsDefine,
    // multiple: {
    //   type: Boolean,
    // },
  },
  setup(props) {
    const classesRef = useStyles()

    /**
     * because `selected={bool}` not work correctly
     * so we chose `v-model` to make this simple
     */
    const currentValueRef = ref(props.value)

    watch(currentValueRef, v => {
      if (v !== props.value) {
        props.onChange(v)
      }
    })

    watch(
      () => props.value,
      v => {
        if (v !== currentValueRef.value) {
          currentValueRef.value = v
        }
      },
    )

    return () => {
      const { id, options } = props
      const classes = classesRef.value

      const { enumOptions = [] } = options

      return renderItem(props, () => (
        <select
          id={id}
          multiple={options.multiple}
          class={classes.select}
          v-model={currentValueRef.value}
        >
          {enumOptions.map((o, index) => (
            <option value={o.value as any} class={classes.option} key={index}>
              {o.key}
            </option>
          ))}
        </select>
      ))
    }
  },
})

export default SelectWidget
