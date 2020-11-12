import { PropType, DefineComponent } from 'vue'

export const SingleTypeArrayProps = {
  onDown: {
    type: Function as PropType<() => void>,
    required: true,
  },
  onUp: {
    type: Function as PropType<() => void>,
    required: true,
  },
  onDelete: {
    type: Function as PropType<() => void>,
    required: true,
  },
  onAdd: {
    type: Function as PropType<() => void>,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  controls: {
    type: Object as PropType<{
      sortable?: boolean
      removable?: boolean
      addable?: boolean
    }>,
  },
} as const

export type SingleTypeArrayDefine = DefineComponent<
  typeof SingleTypeArrayProps,
  {},
  {}
>
