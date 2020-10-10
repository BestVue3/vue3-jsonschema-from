export default {
  name: 'OneOf',
  schema: {
    type: 'object',
    oneOf: [
      {
        properties: {
          lorem: {
            type: 'string',
            title: 'lorem',
          },
        },
        required: ['lorem'],
      },
      {
        properties: {
          ipsum: {
            type: 'string',
            title: 'ipsum',
          },
        },
        required: ['ipsum'],
      },
    ],
  },
  uiSchema: {},
  default: {},
}
