import { defineComponent, PropType, ref, Events } from 'vue'
import { CommonWidgetPropsDefine } from '../types'

export default defineComponent({
  props: {
    ...CommonWidgetPropsDefine,
    enumOptions: {
      type: Array as PropType<
        {
          key: string | number
          value: string | number
        }[]
      >,
      required: true,
    },
  },
  setup(props) {
    const handleChange = (event: Event) => {
      // debugger
      const target: any = event.target

      const value = props.value

      const arr = Array.isArray(value) ? value : []

      const v = target.value
      const index = arr.indexOf(v)
      const found = index !== -1
      const checked = target.checked
      if (checked && !found) {
        props.onChange(arr.concat(v))
      } else if (found && !checked) {
        const filtered = [...arr]
        filtered.splice(index, 1)
        props.onChange(filtered)
      }
    }

    return () => {
      console.log(props.value)
      const { enumOptions } = props

      return (
        <div>
          {enumOptions.map((o, index) => (
            <div>
              <input
                type="checkbox"
                value={o.value}
                checked={
                  Array.isArray(props.value) &&
                  props.value.indexOf(o.value) > -1
                }
                // v-model={props.value}
                onChange={handleChange}
              />
              <label>{o.key}</label>
            </div>
          ))}
        </div>
      )
    }
  },
})
