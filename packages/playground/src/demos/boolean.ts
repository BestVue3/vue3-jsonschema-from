export default {
  name: 'Boolean',
  schema: {
    description: 'A simple form example.',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      simple: {
        type: 'boolean',
        title: 'simple',
        default: true,
      },
      checkbox: {
        type: 'boolean',
        title: 'checkbox',
      },
      select: {
        type: 'boolean',
        title: 'select',
      },
    },
  },
  uiSchema: {
    title: 'boolean',
    properties: {
      checkbox: {
        widget: 'checkbox',
      },
      select: {
        widget: 'select',
      },
    },
  },
}
