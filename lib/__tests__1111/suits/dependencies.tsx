import { ref, Ref, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'

import App from '../test-utils/App'

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
      }),
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
