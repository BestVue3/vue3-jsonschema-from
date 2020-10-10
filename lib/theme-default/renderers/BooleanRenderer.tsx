import { defineComponent, PropType, computed, VNodeChild } from 'vue'
import { createUseStyles } from 'vue-jss'

import { renderItem } from '../utils'
import { CommonRendererPropsDefine } from '../types'

const useStyles = createUseStyles({
  input: {
    width: '100%',
    padding: 7,
    borderRadius: 3,
    border: '1px solid #dedede',
  },
})

export default defineComponent({
  name: 'StringRenderer',
  props: {
    ...CommonRendererPropsDefine,
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    // const classesRef = useStyles()

    const handleChange = (e: any) => {
      props.onChange(e.target.checked)
    }

    return () => {
      // const classes = classesRef.value

      const { value } = props

      // const id = `vjsf-${path}`

      return renderItem(props, (id: string) => (
        <input
          // class={classes.input}
          type="checkbox"
          id={id}
          checked={value}
          onChange={handleChange}
        />
      ))
    }
  },
})
