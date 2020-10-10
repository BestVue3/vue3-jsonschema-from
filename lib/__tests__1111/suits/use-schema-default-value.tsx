import { Schema } from '../../'
import { mount } from '@vue/test-utils'
import App from '../test-utils/App'

interface Options {
  schema: Schema
  value: any
  name: string
}

function createDefaultTest({ schema, value, name }: Options) {
  return it(`${name} should use default value`, () => {
    let vx: any = {}
    const wrapper = mount(App, {
      props: {
        value: vx,
        onChange: (v: any) => (vx = v),
        schema: {
          type: 'object',
          properties: {
            v: schema,
          },
        },
      },
    })

    expect(vx.v).toEqual(value)
  })
}

describe('default value:', () => {
  createDefaultTest({
    schema: {
      type: 'string',
      default: 'jokcy',
    },
    name: 'string',
    value: 'jokcy',
  })
  createDefaultTest({
    schema: {
      type: 'number',
      default: 123,
    },
    name: 'number',
    value: 123,
  })
  createDefaultTest({
    schema: {
      type: 'array',
      default: [1],
      items: {
        type: 'number',
      },
    },
    name: 'array',
    value: [1],
  })
  createDefaultTest({
    schema: {
      type: 'object',
      default: {
        name: 'jokcy',
      },
      properties: {
        name: {
          type: 'string',
        },
      },
    },
    name: 'array',
    value: {
      name: 'jokcy',
    },
  })
})
