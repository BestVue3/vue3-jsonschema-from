import { ComponentPublicInstance, ExtractPropTypes } from 'vue'
import { Schema } from '../types'
import { getSchemaType } from '../utils'
import { isObject } from '../utils'
import { CommonWidgetPropsDefine } from '../types'

declare type ComponentPublicInstanceConstructor<
  T extends ComponentPublicInstance
> = {
  new (): T
}
export type WidgetComponentType = ComponentPublicInstance<
  ExtractPropTypes<typeof CommonWidgetPropsDefine>
>
export type WidgetComponentDefine = ComponentPublicInstanceConstructor<
  WidgetComponentType
>

export enum BuiltInWidgets {
  CheckboxWidget = 'CheckboxWidget',
  CheckboxesWidget = 'CheckboxesWidget',
  RadioWidget = 'RadioWidget',
  SelectWidget = 'SelectWidget',
  HiddenWidget = 'HiddenWidget',
  TextWidget = 'TextWidget',
  PasswordWidget = 'PasswordWidget',
  EmailWidget = 'EmailWidget',
  URLWidget = 'URLWidget',
  TextareaWidget = 'TextareaWidget',
  DateWidget = 'DateWidget',
  DateTimeWidget = 'DateTimeWidget',
  ColorWidget = 'ColorWidget',
  RangeWidget = 'RangeWidget',
  NumberWidget = 'NumberWidget',
}

export const widgetMap = {
  boolean: {
    checkbox: BuiltInWidgets.CheckboxWidget,
    radio: BuiltInWidgets.RadioWidget,
    select: BuiltInWidgets.SelectWidget,
    hidden: BuiltInWidgets.HiddenWidget,
  },
  string: {
    text: BuiltInWidgets.TextWidget,
    password: BuiltInWidgets.PasswordWidget,
    email: BuiltInWidgets.EmailWidget,
    hostname: BuiltInWidgets.TextWidget,
    ipv4: BuiltInWidgets.TextWidget,
    ipv6: BuiltInWidgets.TextWidget,
    uri: BuiltInWidgets.URLWidget,
    // 'data-url': BuiltInWidgets.FileWidget,
    radio: BuiltInWidgets.RadioWidget,
    select: BuiltInWidgets.SelectWidget,
    textarea: BuiltInWidgets.TextareaWidget,
    hidden: BuiltInWidgets.HiddenWidget,
    date: BuiltInWidgets.DateWidget,
    datetime: BuiltInWidgets.DateTimeWidget,
    'date-time': BuiltInWidgets.DateTimeWidget,
    color: BuiltInWidgets.ColorWidget,
    // file: BuiltInWidgets.FileWidget,
  },
  number: {
    text: BuiltInWidgets.TextWidget,
    select: BuiltInWidgets.SelectWidget,
    number: BuiltInWidgets.NumberWidget,
    range: BuiltInWidgets.RangeWidget,
    radio: BuiltInWidgets.RadioWidget,
    hidden: BuiltInWidgets.HiddenWidget,
  },
  integer: {
    text: BuiltInWidgets.TextWidget,
    select: BuiltInWidgets.SelectWidget,
    number: BuiltInWidgets.NumberWidget,
    range: BuiltInWidgets.RangeWidget,
    radio: BuiltInWidgets.RadioWidget,
    hidden: BuiltInWidgets.HiddenWidget,
  },
  array: {
    select: BuiltInWidgets.SelectWidget,
    checkboxes: BuiltInWidgets.CheckboxesWidget,
    // files: BuiltInWidgets.FileWidget,
    hidden: BuiltInWidgets.HiddenWidget,
  },
}

export type RegisteredWidgets = {
  [k in BuiltInWidgets]: WidgetComponentDefine
} & {
  [k: string]: WidgetComponentDefine
} & {
  NotFoundWidget?: WidgetComponentDefine
}

// interface RegisteredWidgets {
//   [key: string]: WidgetComponentDefine
// }

export function getWidget(
  schema: Schema,
  widget: any, // key of widgets | Component | key of some other string
  registeredWidgets: RegisteredWidgets,
): WidgetComponentDefine {
  // direct pass Component to `uiSchema.widget`
  if (
    typeof widget === 'function' ||
    (isObject(widget) &&
      (typeof widget.render === 'function' ||
        typeof widget.setup === 'function' ||
        typeof widget.template === 'string'))
  ) {
    return widget
  }

  if (typeof widget !== 'string') {
    throw new Error(`Unsupported widget definition: ${typeof widget}`)
  }

  // directlly use widget name
  if (registeredWidgets[widget]) {
    return registeredWidgets[widget]
  }

  const type = getSchemaType(schema)
  const typeWidgets = (widgetMap as any)[type as string]
  if (!typeWidgets) {
    return registeredWidgets.NotFoundWidget!
  }
  const widgetName = typeWidgets[widget]
  if (!registeredWidgets[widgetName]) {
    // throw new Error(`no widget found`)
    return registeredWidgets.NotFoundWidget!
  }
  return registeredWidgets[widgetName]
}
