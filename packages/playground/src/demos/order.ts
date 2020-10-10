export default {
  name: 'Order',
  schema: {
    title: 'A registration form',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      password: {
        type: 'string',
        title: 'Password',
      },
      lastName: {
        type: 'string',
        title: 'Last name',
      },
      bio: {
        type: 'string',
        title: 'Bio',
      },
      firstName: {
        type: 'string',
        title: 'First name',
      },
      age: {
        type: 'integer',
        title: 'Age',
      },
    },
  },
  uiSchema: {
    propertiesOrder: ['firstName', 'lastName', '*', 'password'],
    properties: {
      bio: {
        widget: 'textarea',
      },
      password: {
        widget: 'password',
      },
    },
  },
  default: {
    firstName: 'Chuck',
    lastName: 'Norris',
    age: 75,
    bio: 'Roundhouse kicking asses since 1940',
    password: 'noneed',
  },
}
