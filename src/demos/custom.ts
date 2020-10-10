export default {
  name: 'Custom',
  schema: {
    type: 'object',
    properties: {
      customFormat: {
        type: 'string',
        format: 'test',
      },
      customKeyword: {
        type: 'string',
        test: true,
      },
    },
  },
  uiSchema: {
    title: 'Custom',
    properties: {
      customFormat: {
        title: 'custom format',
      },
      customKeyword: {
        title: 'custom keyword',
      },
    },
  },
  default: {},
}
