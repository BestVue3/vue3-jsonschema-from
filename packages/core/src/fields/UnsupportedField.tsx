import { defineComponent, PropType } from 'vue'
import { Schema } from '../types'

export default defineComponent({
  name: 'UnsupportedField',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  setup() {
    return () => <div>unsupported</div>
  },
})
