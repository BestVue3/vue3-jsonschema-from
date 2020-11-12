import { inject, computed, Ref } from 'vue'

import { ComponentsContext } from './Context'
import {
  Theme,
  ThemeLayoutsNames,
  FormDefine,
  HeaderDefine,
} from './ThemeProvider'
import { BuiltInWidgets, WidgetComponentDefine, getWidget } from './utils'
import { Schema } from '../types'
import { SingleTypeArrayDefine } from './types'

export function useThemeContext() {
  const context: Ref<Theme> | undefined = inject(ComponentsContext)

  if (!context || !context.value) {
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
//   name: ThemeLayoutsNames,
// ): {
//   header: Ref<FormDefine>
//   form: Ref<FormDefine>
//   array: Ref<FormDefine>
// }[typeof name extends ThemeLayoutsNames.Header
//   ? 'header'
//   : typeof name extends ThemeLayoutsNames.Form
//   ? 'form'
//   : 'array']
// export function useComponent(
//   name: ThemeLayoutsNames.Header,
// ): Ref<HeaderDefine>
// export function useComponent(
//   name: ThemeLayoutsNames.SingleTypeArrayWrapper,
// ): Ref<SingleTypeArrayDefine>

export function useComponent<N extends ThemeLayoutsNames>(
  name: N,
): {
  header: Ref<HeaderDefine>
  form: Ref<FormDefine>
  array: Ref<SingleTypeArrayDefine>
}[N extends ThemeLayoutsNames.Header
  ? 'header'
  : N extends ThemeLayoutsNames.Form
  ? 'form'
  : 'array'] {
  const context = useThemeContext()

  const Component = computed(() => context.value.layouts[name])

  return Component as any
}

export function useWidget(
  schema: Schema,
  widget: BuiltInWidgets | string,
): Ref<WidgetComponentDefine> {
  const context = useThemeContext()

  const Component = computed(() => {
    const Widget = getWidget(schema, widget, context.value.widgets)
    return Widget
  })

  return Component
}
