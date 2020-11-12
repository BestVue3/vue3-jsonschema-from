import { defineComponent, watchEffect, shallowRef, PropType } from 'vue'

const Props = {
  checked: {
    type: Boolean,
  },
  onChange: {
    type: Function as PropType<(e: any) => void>,
  },
} as const

export default defineComponent({
  name: 'CheckboxesWidget',
  props: Props,
  setup(props, { emit }) {
    const currentChecked = shallowRef(!!props.checked)

    const handleClick = (e: any) => {
      currentChecked.value = !currentChecked.value
      // emit('change', !currentChecked.value)
      props.onChange && props.onChange(e)
    }

    watchEffect(
      () => {
        if (currentChecked.value !== props.checked) {
          currentChecked.value = !!props.checked
        }
      },
      {
        flush: 'post',
      },
    )

    return () => {
      return (
        <input
          type="checkbox"
          checked={!!currentChecked.value}
          onClick={handleClick}
        />
      )
    }
  },
})
