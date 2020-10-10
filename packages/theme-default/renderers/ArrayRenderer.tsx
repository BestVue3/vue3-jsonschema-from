import { defineComponent, computed } from 'vue'

import { CommonRendererPropsDefine } from '../types'
import { renderItem } from '../utils'

import Checkboxes from './widgets/Checkboxes'
import Selection from './widgets/Selection'

interface Option {
  key: string | number
  value: string | number
}

// const Props = {
//   ...CommonRendererPropsDefine,
//   multi: {
//     type: Boolean as PropType<boolean>,
//   },
//   options: {
//     type: Array as PropType<Option[]>,
//     required: true,
//   },
// } as const

export default defineComponent({
  name: 'ArrayRenderer',
  props: CommonRendererPropsDefine,
  setup(props) {
    const isMultiSelectionRef = computed(() => {
      const { schema, uiSchema } = props
      const items = schema.items
      return (
        items &&
        !Array.isArray(items) &&
        ((items as any).enum || (items as any).enumKeyValue)
      )
    })

    const optionsRef = computed(() => {
      const { schema } = props

      const items: any = schema.items || {}

      if (items.enum) {
        return items.enum.map((s: string) => ({
          key: s,
          value: s,
        }))
      } else if (items.enumKeyValue) {
        return items.enumKeyValue
      }
      return []
    })

    const widgetRef = computed(() => {
      const { uiSchema } = props

      return uiSchema && uiSchema.widget
    })

    const handleChange = (v: any) => {
      console.log(v)
      props.onChange(v)
    }
    return () => {
      const isMultiSelection = isMultiSelectionRef.value
      const widget = widgetRef.value
      const options = optionsRef.value

      console.log('-------->', isMultiSelection)

      // widget is highest
      if (widget) {
        if (widget === 'checkbox') {
          return renderItem(props, () => (
            <Checkboxes
              options={options}
              value={props.value as any}
              onChange={props.onChange}
            ></Checkboxes>
          ))
        }
      }

      if (isMultiSelection) {
        return renderItem(props, id => (
          <Selection
            id={id}
            options={options}
            multiple={true}
            value={props.value as any}
            onChange={handleChange}
          ></Selection>
        ))
      }

      // const { options, multi } = props
      // return renderItem(props, (id: string) => (
      //   <select multiple={!!multi} id={id}>
      //     {options.map(op => (
      //       <option value={op.value} key={op.key}>
      //         {op.key}
      //       </option>
      //     ))}
      //   </select>
      // ))
    }
  },
})
