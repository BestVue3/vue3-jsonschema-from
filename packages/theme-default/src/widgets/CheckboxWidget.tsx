import { defineComponent } from 'vue'

import { createUseStyles } from 'vue-jss'

import { CommonWidgetPropsDefine } from '../types'
import Checkbox from './components/Checkbox'
import { renderItem } from '../utils'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    userSelect: 'none',
  },
})

export default defineComponent({
  name: 'CheckboxesWidget',
  props: {
    ...CommonWidgetPropsDefine,
  },
  setup(props) {
    const handleChange = () => {
      props.onChange(!props.value)
    }

    const cxRef = useStyles()

    return () => {
      const { title, id } = props
      const cx = cxRef.value

      const p = { id, onChange: handleChange }

      return renderItem(
        props,
        () => (
          <div class={cx.container}>
            <Checkbox {...p} checked={!!props.value} />
            <label for={id}>{title}</label>
          </div>
        ),
        { hideLabel: false },
      )
    }
  },
})
