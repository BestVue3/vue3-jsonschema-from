import { defineComponent, PropType, ref, Events } from 'vue'

export default defineComponent({
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
    value: {
      type: Array as PropType<any[]>,
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props) {
    const handleChange = (event: Event) => {
      // debugger
      const target: any = event.target

      const value = props.value

      const v = target.value
      const index = value.indexOf(v)
      const found = index !== -1
      const checked = target.checked
      if (checked && !found) {
        props.onChange(value.concat(v))
      } else if (found && !checked) {
        const filtered = [...value]
        filtered.splice(index, 1)
        props.onChange(filtered)
      }
    }

    return () => {
      console.log(props.value)
      const { options } = props

      return (
        <div>
          {options.map((o, index) => (
            <div>
              <input
                type="checkbox"
                value={o.value}
                checked={props.value.indexOf(o.value) > -1}
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
