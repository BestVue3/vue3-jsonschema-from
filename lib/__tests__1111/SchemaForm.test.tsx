import { mount } from '@vue/test-utils'
import { nextTick, ref, Ref, h } from 'vue'

import { Schema } from '..'

import { StringRenderer, Form, NumberRenderer } from '../theme-default'

import App from './test-utils/App'
// import createDefaultTest from './test-utils/createDefaultTest'

describe('SchemaForm:', () => {
  const DemoSchema: Schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
    },
  }

  describe('plugins', () => {})

  describe('formProps', () => {
    it('should pass formProps to theme Form component', () => {
      let val: any = {}
      const handleChange = (v: any) => {
        val = v
      }
      const wrapper = mount(App, {
        props: {
          schema: DemoSchema,
          value: val,
          onChange: handleChange,
          formProps: {
            x: 1,
          },
        },
      })

      const formWrapper = wrapper.findComponent(Form)
      expect(formWrapper.vm.$attrs.x).toEqual(1)

      // expect(wrapper.vm)
    })
  })

  require('./suits/context-ref')

  describe('uiSchema', () => {
    it('should pass down uiSchema', () => {
      const commonProps = {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
          },
        },
        value: {},
        onChange: () => {},
      }
      const wrapper = mount(App, {
        props: {
          ...commonProps,
          uiSchema: {
            properties: {
              name: {
                widget: 'checkbox',
              },
            },
          },
        },
      })

      const stringWrapper = wrapper.findComponent(StringRenderer)
      expect(stringWrapper.vm.$props.uiSchema?.widget).toEqual('checkbox')
    })

    it('should be undefined when have no uiSchema', () => {
      const commonProps = {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
          },
        },
        value: {},
        onChange: () => {},
      }
      const wrapper = mount(App, {
        props: {
          ...commonProps,
        },
      })

      const stringWrapper = wrapper.findComponent(StringRenderer)
      expect(stringWrapper.vm.$props.uiSchema).toBeUndefined()
    })
  })

  describe('schema:', () => {
    require('./suits/use-schema-default-value')
    require('./suits/default-value')
    require('./suits/dependencies')
  })

  require('./suits/value-change')

  describe('reset value', () => {
    /**
     * when reset value `{ a: 1 }` => `{ a: 2 }`
     * a field value should update to `2`
     */
  })

  describe('plugins', () => {
    /**
     * test if plugins work as expected
     */
  })
})
