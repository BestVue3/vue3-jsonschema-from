import type { PropType, Prop } from 'vue'

import { CommonTypePropsDefine } from '../types'

export { CommonTypePropsDefine }

export const CommonRendererPropsDefine = {
  ...CommonTypePropsDefine,
  // additionProps: {
  //   type: Object as PropType<any>,
  // },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  errors: {
    type: Array as PropType<any[]>
  }
} as const
