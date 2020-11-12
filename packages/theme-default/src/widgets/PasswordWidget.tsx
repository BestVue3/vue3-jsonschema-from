import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine } from '../types'
import BaseInput from './components/BaseInput'
import { renderItem } from '../utils'

export default defineComponent({
  name: 'PasswordWidget',
  props: CommonWidgetPropsDefine,
  setup(props) {
    return () => {
      return renderItem(props, () => <BaseInput {...props} />)
    }
  },
})
