import FormItem from './FormItem'

import { CommonWidgetPropsDefine } from './types'
import { ExtractPropTypes } from 'vue'

export function renderItem(
  props: ExtractPropTypes<typeof CommonWidgetPropsDefine>,
  renderChildren: (id: string) => any,
) {
  const { errors, title, path, required, requiredError, uiSchema } = props

  const id = `vjsf-${path}`

  return (
    <FormItem
      id={id}
      label={title}
      errors={errors}
      required={required}
      requiredError={requiredError}
      uiSchema={uiSchema}
    >
      {renderChildren(id)}
    </FormItem>
  )
}
