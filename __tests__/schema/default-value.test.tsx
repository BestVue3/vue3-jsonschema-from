import { Schema } from '@vjsf/core'
import { mount } from '@vue/test-utils'
import TestApp from '../test-utils/App'

const App: any = TestApp

interface Options {
  schema: Schema
  value: any
  desc: string
}

function createTest({ schema, value, desc }: Options) {
  return it(desc, () => {
    let vx: any = {}
    const wrapper = mount(App, {
      props: {
        value: vx,
        onChange: (v: any) => (vx = v),
        schema,
      },
    })

    expect(vx.v).toEqual(value)
  })
}

describe('do not create default when no default', () => {
  it('should not create default value for object', () => {
    let value: any = undefined
    mount(App, {
      props: {
        value,
        onChange: (v: any) => (value = v),
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
          },
        },
      },
    })
    expect(value).toBeUndefined()
  })

  it('should not create default value for array', () => {
    let value: any = undefined
    mount(App, {
      props: {
        value,
        onChange: (v: any) => (value = v),
        schema: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
    })
    expect(value).toBeUndefined()
  })

  it('should not create default value for array when items have default value', () => {
    /**
     * different from object field, when array field has no value
     * it will not render items
     */
    let value: any = undefined
    mount(App, {
      props: {
        value,
        onChange: (v: any) => (value = v),
        schema: {
          type: 'array',
          items: {
            type: 'string',
            default: 'jokcy',
          },
        },
      },
    })
    expect(value).toBeUndefined()
  })

  it('should create object if properties has default', () => {
    let value: any = undefined
    mount(App, {
      props: {
        value,
        onChange: (v: any) => (value = v),
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              default: 'jokcy',
            },
          },
        },
      },
    })
    expect(value).toEqual({ name: 'jokcy' })
  })

  it('should be undefined if value of object field is not object', () => {
    let value: any = 'jokcy'
    mount(App, {
      props: {
        value,
        onChange: (v: any) => (value = v),
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
          },
        },
      },
    })
    expect(value).toBeUndefined()
  })
})

describe(`uiSchema.defaultValue`, () => {
  /**
   * TODO:
   * 默认情况下，如果schema上没有`default`，我们认为这个值是`undefined`，
   * 因为json-schema的`required`只校验key是否存在
   * 但是很多情况下，比如在字符串删除完的时候，如果直接设置为`undefined`似乎又有些不符合实际情况
   * 所以我们倾向于提供一个默认值的配置让使用者自己决定使用什么值为默认值
   * 会使用这个值的情况有：
   * 1. 初始化的时候没有值，并且没有`schema.default`
   * 2. 表单清空状态时
   */
})
