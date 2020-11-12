import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine } from '../types'
import BaseInput from './components/BaseInput'

export default defineComponent({
  name: 'NumberWidget',
  props: CommonWidgetPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props

      const { multipleOf } = schema

      const attrs: any = {
        ...props,
      }

      if (typeof multipleOf === 'number') {
        attrs.step = multipleOf
      }

      return <BaseInput {...attrs} />
    }
  },
})
