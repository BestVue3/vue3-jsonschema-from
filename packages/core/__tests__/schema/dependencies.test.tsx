import { ref, Ref, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'

import App from '../test-utils/App'
import { widgets } from 'vjsf-theme-default/lib'
import { nextTick } from 'process'

describe('dependencies:', () => {
  it('should render form based on value', done => {
    let value: any = {
      select: 1,
      name: '',
    }

    const cr: Ref<any> = ref({})

    const wrapper = mount(
      defineComponent({
        props: {
          value: {
            default: value,
          },
        },
        setup(p) {
          return () => {
            const props = {
              schema: {
                type: 'object',
                properties: {
                  select: {
                    type: 'number',
                    enum: [1, 2],
                  },
                },
                dependencies: {
                  select: {
                    oneOf: [
                      {
                        type: 'object',
                        properties: {
                          select: {
                            type: 'number',
                            const: 1,
                          },
                          name: {
                            type: 'string',
                            minLength: 1,
                          },
                        },
                      },
                      {
                        type: 'object',
                        properties: {
                          select: {
                            type: 'number',
                            const: 2,
                          },
                          age: {
                            type: 'number',
                            minimum: 10,
                          },
                        },
                      },
                    ],
                  },
                },
              },
              onChange: (v: any) => (value = v),
              contextRef: cr,
              value: p.value,
            } as any
            return <App {...props} />
          }
        },
      }) as any,
    )

    // nextTick(() => {
    let r = cr.value.doValidate()
    expect(r.valid).toBe(false)

    wrapper
      .setProps({ value: { select: 1, name: '123' } })
      .then(() => {
        r = cr.value.doValidate()
        expect(r.valid).toBe(true)
        return wrapper.setProps({ value: { select: 2, name: '123' } })
      })
      .then(() => {
        r = cr.value.doValidate()
        // age not required
        expect(r.valid).toBe(true)
        return wrapper.setProps({ value: { select: 2, age: 5 } })
      })
      .then(() => {
        r = cr.value.doValidate()
        expect(r.valid).toBe(false)
        return wrapper.setProps({ value: { select: 2, age: 11 } })
      })
      .then(() => {
        r = cr.value.doValidate()
        expect(r.valid).toBe(true)
        done()
      })
  })
})

describe('anyof & oneof', () => {
  it('oneof should work as expected', done => {
    const wrapper = mount(App as any, {
      props: {
        onChange: () => {},
        value: {},
        schema: {
          type: 'object',
          oneOf: [
            {
              properties: {
                name: {
                  type: 'string',
                },
              },
            },
            {
              properties: {
                age: {
                  type: 'number',
                },
              },
            },
          ],
        },
      },
    })

    const selectWrapper = wrapper.findComponent(widgets.SelectWidget)
    expect(selectWrapper.exists()).toBe(true)
    expect(selectWrapper.vm.$props.value).toBe(0)
    const strWrapper = wrapper.findComponent(widgets.TextWidget)
    expect(strWrapper.exists()).toBe(true)
    selectWrapper.vm.$props.onChange(1)
    nextTick(() => {
      const numberWrapper = wrapper.findComponent(widgets.NumberWidget)
      expect(numberWrapper.exists()).toBe(true)
      done()
    })
    // expect(strWrapper.vm.$props.value).toBe('str')
  })
})
