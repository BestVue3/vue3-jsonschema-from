import { defineComponent, computed, provide, ComponentPublicInstance, ExtractPropTypes } from 'vue'

import type { PropType } from 'vue'

import { ComponentsContext } from './Context'
import { CommonTypePropsDefine } from '../types'

const HeaderProps = {
  title: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<'array' | 'object'>,
    required: true
  }
} as const

type RendererComponentType = ComponentPublicInstance<ExtractPropTypes<typeof CommonTypePropsDefine>>
type HeaderComponentType = ComponentPublicInstance<ExtractPropTypes<typeof HeaderProps>>

// export type FORM = 'Form' | string
export enum ThemeOtherComponnetNames {
  Form = 'Form',
  SingleTypeArrayWrapper = 'SingleTypeArray',
  Header = 'Header'
}

export enum ThemeRendererComponentNames {
  StringRenderer = 'StringRenderer',
  NumberRenderer = 'NumberRenderer',
  ArrayRenderer = 'ArrayRenderer',
  BooleanRenderer = 'BooleanRenderer',
}

declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance> = {
  new (): T;
};

export type RendererComponentDefine = ComponentPublicInstanceConstructor<RendererComponentType>
export type FormDefine = ComponentPublicInstanceConstructor<ComponentPublicInstance<any>>
export type HeaderDefine = ComponentPublicInstanceConstructor<HeaderComponentType>
export type SingleTypeArrayDefine = ComponentPublicInstanceConstructor<ComponentPublicInstance<any>>

export interface Components {
  [ThemeOtherComponnetNames.Form]: FormDefine,
  [ThemeOtherComponnetNames.SingleTypeArrayWrapper]: SingleTypeArrayDefine,
  [ThemeOtherComponnetNames.Header]: HeaderDefine

  [ThemeRendererComponentNames.StringRenderer]: RendererComponentDefine,
  [ThemeRendererComponentNames.NumberRenderer]: RendererComponentDefine,
  [ThemeRendererComponentNames.ArrayRenderer]: RendererComponentDefine,
  [ThemeRendererComponentNames.BooleanRenderer]: RendererComponentDefine
  // [key: string]: any
}

export interface Theme {
  components: Components
}

export default defineComponent({
  name: "ThemeProvider",
  props: {
    theme: {
      type: Object as PropType<Theme>,
      required: true
    },
  },
  setup(props, { slots }) {

    const components = computed(() => props.theme)

    provide(ComponentsContext, components)

    return () => {
      if (!slots.default || typeof slots.default !== 'function') {
        throw new Error(`default slot of ThemeProvider should be function`)
      }
      return slots.default && slots.default()
    }
  },
})
