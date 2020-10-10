import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine } from '../types'

export default defineComponent({
  name: 'NotFoundWidget',
  props: CommonWidgetPropsDefine,
  setup(props) {
    return () => {
      const { schema, path, uiSchema } = props

      return (
        <div>
          <p style={{ color: 'red' }}>Widget Not Found</p>
          <ul>
            <li>Schema Path: {path}</li>
            <li>Schema Type: {schema.type}</li>
            <li>Widget: {uiSchema.widget}</li>
          </ul>
        </div>
      )
    }
  },
})
