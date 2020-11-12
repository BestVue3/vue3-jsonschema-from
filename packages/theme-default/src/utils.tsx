import FormItem from './FormItem'

import { CommonWidgetPropsDefine } from './types'
import { ExtractPropTypes } from 'vue'

interface RenderItemOptiopns {
  hideLabel?: boolean
}

export function renderItem(
  props: ExtractPropTypes<typeof CommonWidgetPropsDefine>,
  renderChildren: (id: string) => any,
  options: RenderItemOptiopns = {},
) {
  const { errors, title, path, required, uiSchema } = props

  const id = `vjsf-${path}`

  return (
    <FormItem
      id={id}
      label={title}
      errors={errors}
      required={required}
      // requiredError={requiredError}
      uiSchema={uiSchema}
    >
      {renderChildren(id)}
    </FormItem>
  )
}
