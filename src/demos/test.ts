export default {
  name: 'Test',
  schema: {
    type: 'object',
    properties: {
      select: {
        type: 'number',
        enum: [1, 2],
        errorMessage: '-',
      },
    },
    dependencies: {
      select: {
        oneOf: [
          {
            type: 'object',
            properties: {
              select: {
                type: 'number',
                const: 1,
                errorMessage: '-',
              },
              name: {
                type: 'string',
                minLength: 5,
              },
            },
          },
          {
            type: 'object',
            properties: {
              select: {
                type: 'number',
                const: 2,
                errorMessage: '-',
              },
              age: {
                type: 'number',
                minimum: 10,
              },
            },
          },
        ],
      },
    },
  },
  uiSchema: {
    properties: {
      select: {
        title: '选择',
      },
      name: {
        title: '名字',
      },
    },
  },
  default: {
    select: 1,
  },
}
