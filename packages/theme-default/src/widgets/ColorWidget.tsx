import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine } from '../types'
import BaseInput from './components/BaseInput'

import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  input: {
    padding: '0 7px',
    width: 100,
  },
})

export default defineComponent({
  name: 'ColorWidget',
  props: CommonWidgetPropsDefine,
  setup(props) {
    const cxRef = useStyles()

    return () => {
      const cx = cxRef.value
      return <BaseInput {...props} type="color" inputClass={cx.input} />
    }
  },
})
