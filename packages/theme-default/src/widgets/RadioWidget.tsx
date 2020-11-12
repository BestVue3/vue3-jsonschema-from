import { defineComponent } from 'vue'
import { CommonWidgetPropsDefine } from '@vjsf/core'

const Radios = defineComponent({
  name: 'RadioWidget',
  props: {
    ...CommonWidgetPropsDefine,
  },
  setup(props) {
    const handleChange = (event: Event) => {
      // debugger
      const target: any = event.target
      const value = target.value
      props.onChange(value)
    }

    return () => {
      const { options, id } = props

      const { enumOptions = [] } = options

      return (
        <div>
          {enumOptions.map((o, index) => (
            <div>
              <input
                type="radio"
                value={o.value as any}
                checked={props.value === o.value}
                name={id}
                onClick={handleChange}
                id={`${id}-${index}`}
              />
              <label for={`${id}-${index}`}>{o.key}</label>
            </div>
          ))}
        </div>
      )
    }
  },
})

export default Radios
