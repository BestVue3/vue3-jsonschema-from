export default {
  name: 'Array',
  schema: {
    definitions: {
      Thing: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            default: 'Default name',
          },
        },
      },
    },
    type: 'object',
    properties: {
      listOfStrings: {
        type: 'array',
        items: {
          type: 'string',
          default: 'bazinga',
        },
      },
      multipleChoicesList: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['foo', 'bar', 'fuzz', 'qux'],
        },
        uniqueItems: true,
      },
      fixedItemsList: {
        type: 'array',
        items: [
          {
            type: 'string',
            default: 'lorem ipsum',
          },
          {
            type: 'boolean',
          },
        ],
        additionalItems: {
          type: 'number',
        },
      },
      minItemsList: {
        type: 'array',
        minItems: 3,
        items: {
          $ref: '#/definitions/Thing',
        },
      },
      defaultsAndMinItems: {
        type: 'array',
        minItems: 5,
        default: ['carp', 'trout', 'bream'],
        items: {
          type: 'string',
          default: 'unidentified',
        },
      },
      nestedList: {
        type: 'array',
        items: {
          type: 'array',
          title: 'Inner list',
          items: {
            type: 'string',
            default: 'lorem ipsum',
          },
        },
      },
      unorderable: {
        type: 'array',
        items: {
          type: 'string',
          default: 'lorem ipsum',
        },
      },
      unremovable: {
        type: 'array',
        items: {
          type: 'string',
          default: 'lorem ipsum',
        },
      },
      noToolbar: {
        type: 'array',
        items: {
          type: 'string',
          default: 'lorem ipsum',
        },
      },
      fixedNoToolbar: {
        type: 'array',
        items: [
          {
            title: 'A number',
            type: 'number',
            default: 42,
          },
          {
            title: 'A boolean',
            type: 'boolean',
            default: false,
          },
        ],
        additionalItems: {
          title: 'A string',
          type: 'string',
          default: 'lorem ipsum',
        },
      },
    },
  },
  uiSchema: {
    properties: {
      listOfStrings: {
        title: 'A list of strings',
        items: {
          title: 'string item',
          emptyValue: '',
        },
      },
      multipleChoicesList: {
        title: 'A multiple choices list',
        // widget: 'checkbox',
        helpText: 'press Ctrl/Command to multi select',
      },
      fixedItemsList: {
        title: 'A list of fixed items',
        items: [
          {
            title: 'A string value',
            widget: 'textarea',
          },
          {
            title: 'A boolean value',
            widget: 'select',
          },
        ],
        additionalItems: {
          title: 'Additional item',
          // widget: 'updown',
        },
      },
      minItemsList: {
        title: 'A list with a minimal number of items',
      },
      defaultsAndMinItems: {
        title: 'List and item level defaults',
      },
      nestedList: {
        title: 'Nested list',
      },
      unorderable: {
        title: 'Unorderable items',
        controls: {
          sortable: false,
        },
      },
      unremovable: {
        title: 'Unremovable items',
        controls: {
          removable: false,
        },
      },
      noToolbar: {
        title: 'No add, remove and order buttons',
        controls: {
          addable: false,
          sortable: false,
          removable: false,
        },
      },
      fixedNoToolbar: {
        title: 'Fixed array without buttons',
        controls: {
          addable: false,
          sortable: false,
          removable: false,
        },
      },
    },
  },
  default: {
    listOfStrings: ['foo', 'bar'],
    multipleChoicesList: ['foo', 'bar'],
    fixedItemsList: ['Some text', true, 123],
    minItemsList: [
      {
        name: 'Default name',
      },
      {
        name: 'Default name',
      },
      {
        name: 'Default name',
      },
    ],
    defaultsAndMinItems: [
      'carp',
      'trout',
      'bream',
      'unidentified',
      'unidentified',
    ],
    nestedList: [['lorem', 'ipsum'], ['dolor']],
    unorderable: ['one', 'two'],
    unremovable: ['one', 'two'],
    noToolbar: ['one', 'two'],
    fixedNoToolbar: [42, true, 'additional item one', 'additional item two'],
  },
}
