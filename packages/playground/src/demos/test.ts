export default {
  name: 'Test',
  schema: {
    type: 'object',
    properties: {
      array: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['1', '2', '3'],
        },
        uniqueItems: true,
      },
      color: {
        type: 'string',
        format: 'color',
      },
    },
  },
  uiSchema: {
    widget: 'checkboxes',
  },
  default: {},
  customValidate: (data: any, errors: any) => {
    if (!data.array || data.array.length < 2) {
      errors.array.addError('数组不能少于两个')
    }
  },
}
