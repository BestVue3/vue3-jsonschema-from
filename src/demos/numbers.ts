export default {
  name: 'Numbers',
  schema: {
    type: 'object',
    properties: {
      number: {
        type: 'number',
      },
      integer: {
        type: 'integer',
      },
      numberEnum: {
        type: 'number',
        enum: [1, 2, 3],
      },
      numberEnumRadio: {
        type: 'number',
        enum: [1, 2, 3],
      },
      integerRange: {
        type: 'integer',
        minimum: 42,
        maximum: 100,
      },
      integerRangeSteps: {
        type: 'integer',
        minimum: 50,
        maximum: 100,
        multipleOf: 10,
      },
    },
  },
  uiSchema: {
    title: 'Number fields & widgets',
    properties: {
      number: {
        title: 'Number',
      },
      integer: {
        title: 'Integer',
        widget: 'number',
      },
      numberEnum: {
        title: 'Number enum',
      },
      numberEnumRadio: {
        title: 'Number enum',
        widget: 'radio',
        options: {
          inline: true,
        },
      },
      integerRange: {
        title: 'Integer range',
        widget: 'range',
      },
      integerRangeSteps: {
        title: 'Integer range (by 10)',
        widget: 'range',
      },
    },
  },
  default: {
    number: 3.14,
    integer: 42,
    numberEnum: 2,
    integerRange: 47,
    integerRangeSteps: 80,
  },
}
