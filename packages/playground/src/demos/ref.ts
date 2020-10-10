export default {
  name: 'References',
  schema: {
    definitions: {
      address: {
        type: 'object',
        properties: {
          street_address: {
            type: 'string',
            title: 'street_address',
          },
          city: {
            type: 'string',
            title: 'city',
          },
          state: {
            type: 'string',
            title: 'state',
          },
        },
        required: ['street_address', 'city', 'state'],
      },
      node: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            title: 'name',
          },
          children: {
            type: 'array',
            items: {
              $ref: '#/definitions/node',
            },
            title: 'children',
          },
        },
      },
    },
    type: 'object',
    properties: {
      billing_address: {
        title: 'Billing address',
        $ref: '#/definitions/address',
      },
      shipping_address: {
        title: 'Shipping address',
        $ref: '#/definitions/address',
      },
      tree: {
        title: 'Recursive references',
        $ref: '#/definitions/node',
      },
    },
  },
  uiSchema: {
    propertiesOrder: ['shipping_address', 'billing_address', 'tree'],
  },
  default: {
    billing_address: {
      street_address: '21, Jump Street',
      city: 'Babel',
      state: 'Neverland',
    },
    shipping_address: {
      street_address: '221B, Baker Street',
      city: 'London',
      state: 'N/A',
    },
    tree: {
      name: 'root',
      children: [
        {
          name: 'leaf',
        },
      ],
    },
  },
}
