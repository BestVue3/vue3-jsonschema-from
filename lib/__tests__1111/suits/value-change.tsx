import { mount } from '@vue/test-utils'
import {
  StringRenderer,
  Form,
  NumberRenderer,
  ArrayRenderer,
  BooleanRenderer,
} from '../../theme-default'

import App from '../test-utils/App'

describe('value change', () => {
  it('string should update when StringRenderer fire `onChange`', () => {
    let value: any = ''
    const wrapper = mount(App, {
      props: {
        value,
        onChange: (v: any) => (value = v),
        schema: {
          type: 'string',
        },
      },
    })
    const srWrapper = wrapper.findComponent(StringRenderer)
    srWrapper.vm.$props.onChange('jokcy')
    expect(value).toEqual('jokcy')
  })

  it('number should update when NumberRenderer fire `onChange`', () => {
    let value: any = 0
    const wrapper = mount(App, {
      props: {
        value,
        onChange: (v: any) => (value = v),
        schema: {
          type: 'number',
        },
      },
    })
    const numWrapper = wrapper.findComponent(NumberRenderer)
    numWrapper.vm.$props.onChange(1)
    expect(value).toEqual(1)
  })

  it('array should update when ArrayRenderer fire `onChange`', () => {
    let value: any = []
    const wrapper = mount(App, {
      props: {
        value,
        onChange: (v: any) => (value = v),
        schema: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['1', '2', '3'],
          },
        },
      },
    })
    const arrWrapper = wrapper.findComponent(ArrayRenderer)
    arrWrapper.vm.$props.onChange(['1'])
    expect(value).toEqual(['1'])
  })

  it('boolean should update when BooleanRenderer fire `onChange`', () => {
    let value: any = false
    const wrapper = mount(App, {
      props: {
        value,
        onChange: (v: any) => (value = v),
        schema: {
          type: 'boolean',
        },
      },
    })
    const arrWrapper = wrapper.findComponent(BooleanRenderer)
    arrWrapper.vm.$props.onChange(true)
    expect(value).toEqual(true)
  })

  it('string should update in nest object value', () => {
    let value: any = ''
    const wrapper = mount(App, {
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
    const srWrapper = wrapper.findComponent(StringRenderer)
    srWrapper.vm.$props.onChange('jokcy')
    expect(value).toEqual({ name: 'jokcy' })
  })

  it('string should update in nest array value', () => {
    let value: any = ['']
    const wrapper = mount(App, {
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
    const srWrapper = wrapper.findComponent(StringRenderer)
    srWrapper.vm.$props.onChange('jokcy')
    expect(value).toEqual(['jokcy'])
  })
})
