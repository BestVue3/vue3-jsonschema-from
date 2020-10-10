export default {
  name: 'Test',
  schema: {
    type: 'object',
    oneOf: [
      {
        properties: {
          name: {
            type: 'string',
          },
        },
      },
      {
        properties: {
          age: {
            type: 'number',
          },
        },
      },
    ],
  },
  uiSchema: {},
  default: {},
}
