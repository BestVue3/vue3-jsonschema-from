export default {
  name: 'Schema dependencies',
  schema: {
    title: 'Schema dependencies',
    description: 'These samples are best viewed without live validation.',
    type: 'object',
    properties: {
      simple: {
        src:
          'https://spacetelescope.github.io/understanding-json-schema/reference/object.html#dependencies',
        title: 'Simple',
        type: 'object',
        properties: {
          name: {
            title: 'name',
            type: 'string',
          },
          credit_card: {
            title: 'credit_card',
            type: 'number',
          },
        },
        required: ['name'],
        dependencies: {
          credit_card: {
            properties: {
              billing_address: {
                type: 'string',
              },
            },
            required: ['billing_address'],
          },
        },
      },
      conditional: {
        title: 'Conditional',
        $ref: '#/definitions/person',
      },
      arrayOfConditionals: {
        title: 'Array of conditionals',
        type: 'array',
        items: {
          $ref: '#/definitions/person',
        },
      },
      fixedArrayOfConditionals: {
        title: 'Fixed array of conditionals',
        type: 'array',
        items: [
          {
            title: 'Primary person',
            $ref: '#/definitions/person',
          },
        ],
        additionalItems: {
          // TODO: not supported yet
          title: 'Additional person',
          $ref: '#/definitions/person',
        },
      },
    },
    definitions: {
      person: {
        title: 'Person',
        type: 'object',
        properties: {
          'Do you have any pets?': {
            type: 'string',
            title: 'Do you have any pets?',
            enum: ['No', 'Yes: One', 'Yes: More than one'],
            default: 'No',
          },
        },
        required: ['Do you have any pets?'],
        dependencies: {
          'Do you have any pets?': {
            oneOf: [
              {
                properties: {
                  'Do you have any pets?': {
                    enum: ['No'],
                  },
                },
              },
              {
                properties: {
                  'Do you have any pets?': {
                    enum: ['Yes: One'],
                  },
                  'How old is your pet?': {
                    title: 'How old is your pet?',
                    type: 'number',
                  },
                },
                required: ['How old is your pet?'],
              },
              {
                properties: {
                  'Do you have any pets?': {
                    enum: ['Yes: More than one'],
                  },
                  'Do you want to get rid of any?': {
                    title: 'Do you want to get rid of any?',
                    type: 'boolean',
                  },
                },
                required: ['Do you want to get rid of any?'],
              },
            ],
          },
        },
      },
    },
  },
  uiSchema: {
    simple: {
      properties: {
        credit_card: {
          help:
            'If you enter anything here then billing_address will be dynamically added to the form.',
        },
      },
    },
    conditional: {
      'Do you want to get rid of any?': {
        widget: 'radio',
      },
    },
    arrayOfConditionals: {
      items: {
        'Do you want to get rid of any?': {
          widget: 'radio',
        },
      },
    },
    fixedArrayOfConditionals: {
      items: {
        'Do you want to get rid of any?': {
          widget: 'radio',
        },
      },
      additionalItems: {
        'Do you want to get rid of any?': {
          widget: 'radio',
        },
      },
    },
  },
}
