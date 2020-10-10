import { defineComponent, PropType } from 'vue'
import { CommonWidgetPropsDefine, SchemaTypes } from 'vue3-jsonschema-form'
import { renderItem } from '../../utils'

const Radios = defineComponent({
  props: {
    options: {
      type: Array as PropType<
        {
          key: string | number
          value: string | number
        }[]
      >,
      required: true,
    },
    value: {},
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const handleChange = (event: Event) => {
      // debugger
      const target: any = event.target
      const value = target.value
      props.onChange(value)
    }

    return () => {
      console.log(props.value)
      const { options } = props

      return (
        <div>
          {options.map((o, index) => (
            <div>
              <input
                type="radio"
                value={o.value}
                checked={props.value === o.value}
                // v-model={props.value}
                name={name}
                onClick={handleChange}
              />
              <label>{o.key}</label>
            </div>
          ))}
        </div>
      )
    }
  },
})

export function withCommonRadios(Comp: any) {
  return defineComponent({
    name: 'WithRadioWrapper',
    props: CommonWidgetPropsDefine,
    setup(props) {
      return () => {
        const { schema, uiSchema, value, onChange, path } = props

        const children = <Comp {...props} />

        if (
          schema.type === SchemaTypes.INTEGER ||
          schema.type === SchemaTypes.NUMBER ||
          schema.type === SchemaTypes.STRING
        ) {
          const widget = uiSchema && uiSchema.widget

          // widget first
          if (widget && widget !== 'radio') return children

          if (schema.enum || schema.enumKeyValue) {
            const options = schema.enumKeyValue
              ? schema.enumKeyValue
              : (schema as any).enum.map((k: any) => ({
                  key: k,
                  value: k,
                }))

            return renderItem(props, () => (
              <Radios
                options={options}
                value={value}
                onChange={onChange}
                name={path}
              />
            ))
          } else {
            return children
          }
        } else {
          return children
        }
      }
    },
  })
}

export default Radios
