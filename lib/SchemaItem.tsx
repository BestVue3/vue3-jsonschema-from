import { defineComponent, computed } from 'vue'

import { SchemaTypes, CommonTypePropsDefine } from './types'
import { getSchemaType } from './utils'
import { retrieveSchema } from './schema'
// import { useVJSFContext } from './Context'

import {
  StringField,
  NumberField,
  ObjectField,
  ArrayField,
  BooleanField,
} from './fields'

// const StringRenderer = () => <div>123</div>

export default defineComponent({
  name: 'SchemaItem',
  props: CommonTypePropsDefine,
  setup(props) {
    // const formContextRef = useVJSFContext()

    const schemaRef = computed(() => {
      return retrieveSchema(props.schema, props.rootSchema, props.value)
    })

    return () => {
      // const { schema } = props
      const schema = schemaRef.value
      // const formContext = formContextRef.value

      // console.log(schema)

      let Component: any

      if (!schema.type) {
        console.warn(`it's better to give every schema a type:`, schema)
      }

      const type = schema.type || getSchemaType(schema)

      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField
          break
        case SchemaTypes.NUMBER:
        case SchemaTypes.INTEGER:
          Component = NumberField
          break
        case SchemaTypes.ARRAY:
          Component = ArrayField
          break
        case SchemaTypes.OBJECT:
          Component = ObjectField
          break
        case SchemaTypes.BOOLEAN:
          Component = BooleanField
          break
        default:
          console.log('type is not right')
          return null
      }

      return <Component {...props} schema={schema} />
    }
  },
})
