import { defineComponent, computed, toRaw } from 'vue'

import { SchemaTypes, CommonFieldPropsDefine, Schema, UISchema } from './types'
import { getSchemaType, isSelect, retrieveSchema } from './utils'

import {
  StringField,
  NumberField,
  ObjectField,
  ArrayField,
  BooleanField,
  UnsupportedField,
  MultiSchemaField,
} from './fields'

const COMPONENT_TYPES: Record<string, string> = {
  array: 'ArrayField',
  boolean: 'BooleanField',
  integer: 'NumberField',
  number: 'NumberField',
  object: 'ObjectField',
  string: 'StringField',
  null: 'NullField',
}

const FIELDS: Record<string, any> = {
  ArrayField,
  StringField,
  NumberField,
  IntegerField: NumberField,
  ObjectField,
  BooleanField,
}

function getFieldComponent(schema: Schema, uiSchema: UISchema) {
  // const field = uiSchema["ui:field"];
  // if (typeof field === "function") {
  //   return field;
  // }
  // if (typeof field === "string" && field in fields) {
  //   return fields[field];
  // }

  const componentName = COMPONENT_TYPES[getSchemaType(schema) as string]

  // If the type is not defined and the schema uses 'anyOf' or 'oneOf', don't
  // render a field and let the MultiSchemaField component handle the form display
  if (!componentName && (schema.anyOf || schema.oneOf)) {
    return () => null
  }

  return componentName in FIELDS
    ? FIELDS[componentName]
    : () => {
        // const { UnsupportedField } = fields;

        return (
          <UnsupportedField
            schema={schema}
            reason={`Unknown field type ${schema.type}`}
          />
        )
      }
}

// const StringRenderer = () => <div>123</div>

export default defineComponent({
  name: 'SchemaItem',
  props: CommonFieldPropsDefine,
  setup(props) {
    // const formContextRef = useVJSFContext()

    const schemaRef = computed(() => {
      return retrieveSchema(props.schema, props.rootSchema, props.value)
    })

    return () => {
      const { uiSchema } = props
      const schema = schemaRef.value
      // const formContext = formContextRef.value

      // console.log(schema)

      // let Component: any

      if (!schema.type) {
        console.warn(`it's better to give every schema a type:`, schema)
      }

      // const type = schema.type || getSchemaType(schema)

      const FiledComponent = getFieldComponent(schema, uiSchema)

      // switch (type) {
      //   case SchemaTypes.STRING:
      //     Component = StringField
      //     break
      //   case SchemaTypes.NUMBER:
      //   case SchemaTypes.INTEGER:
      //     Component = NumberField
      //     break
      //   case SchemaTypes.ARRAY:
      //     Component = ArrayField
      //     break
      //   case SchemaTypes.OBJECT:
      //     Component = ObjectField
      //     break
      //   case SchemaTypes.BOOLEAN:
      //     Component = BooleanField
      //     break
      //   default:
      //     console.log('type is not right')
      //     return null
      // }

      console.log(toRaw(schema))

      return (
        <>
          <FiledComponent {...props} schema={schema} />
          {schema.anyOf && !isSelect(schema) && (
            <MultiSchemaField
              {...props}
              options={schema.anyOf}
              baseType={schema.type as any}
            />
          )}

          {schema.oneOf && !isSelect(schema) && (
            <MultiSchemaField
              {...props}
              options={schema.oneOf}
              baseType={schema.type as any}
            />
          )}
        </>
      )
    }
  },
})
