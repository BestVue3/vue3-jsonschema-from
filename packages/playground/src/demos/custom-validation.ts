export default {
  name: 'Custom validation',
  schema: {
    title: 'Custom validation',
    description:
      'This form defines custom validation rules checking that the two passwords match.',
    type: 'object',
    properties: {
      pass1: {
        title: 'Password',
        type: 'string',
        minLength: 3,
      },
      pass2: {
        title: 'Repeat password',
        type: 'string',
        minLength: 3,
      },
      age: {
        title: 'Age',
        type: 'number',
        minimum: 18,
      },
    },
  },
  customValidate(data: any, errors: any) {
    if (data.pass1 !== data.pass2) {
      errors.pass2.addError('Passwords should match')
    }
  },
}
