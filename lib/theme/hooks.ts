import { inject, computed, Ref } from 'vue'

import { ComponentsContext } from './Context'
import {
  Theme,
  ThemeOtherComponnetNames,
  ThemeRendererComponentNames,
  RendererComponentDefine,
  FormDefine,
  SingleTypeArrayDefine,
  HeaderDefine,
} from './ThemeProvider'

export function useThemeContext() {
  const context: Ref<Theme> | undefined = inject(ComponentsContext)

  if (!context || !context.value || !context.value.components) {
    throw new Error('Theme needed')
  }

  return context
}

/**
 * override function can not fix problem
 * we may pass `name` in condition type
 * override will emit error when we doing that
 */
// export function useComponent(
//   name: ThemeRendererComponentNames,
// ): Ref<RendererComponentDefine>
// export function useComponent(
//   name: ThemeOtherComponnetNames,
// ): {
//   header: Ref<FormDefine>
//   form: Ref<FormDefine>
//   array: Ref<FormDefine>
// }[typeof name extends ThemeOtherComponnetNames.Header
//   ? 'header'
//   : typeof name extends ThemeOtherComponnetNames.Form
//   ? 'form'
//   : 'array']
// export function useComponent(
//   name: ThemeOtherComponnetNames.Header,
// ): Ref<HeaderDefine>
// export function useComponent(
//   name: ThemeOtherComponnetNames.SingleTypeArrayWrapper,
// ): Ref<SingleTypeArrayDefine>

export function useComponent<
  N extends ThemeOtherComponnetNames | ThemeRendererComponentNames
>(
  name: N,
): {
  render: Ref<RendererComponentDefine>
  header: Ref<HeaderDefine>
  form: Ref<FormDefine>
  array: Ref<SingleTypeArrayDefine>
}[N extends ThemeRendererComponentNames
  ? 'render'
  : N extends ThemeOtherComponnetNames.Header
  ? 'header'
  : N extends ThemeOtherComponnetNames.Form
  ? 'form'
  : 'array'] {
  const context = useThemeContext()

  const Component = computed(() => context.value.components[name])

  return Component as any
}
