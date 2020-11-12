import { Ref, ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import TestApp from '../test-utils/App'

const App: any = TestApp

describe('contextRef', () => {
  it('should expose doValidate to contextRef', done => {
    let val: any = {}
    const handleChange = (v: any) => {
      val = v
    }

    const contextRef: Ref<any> = ref({})

    mount({
      setup() {
        /**
         * 这里不直接 `mount(App)` 然后传props是因为`mount`会把搜有props放入reactive
         * 但是我们的contextRef传递的是一个ref，直接放入`reactive`会导致`ref`失效
         * 不确定VTU未来是否会修改API
         */
        const props = {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
            },
          },
          value: val,
          onChange: handleChange,
          contextRef,
        }
        return () => {
          return <App {...props} />
        }
      },
    })

    nextTick(() => {
      expect(typeof contextRef.value.doValidate).toEqual('function')
      done()
    })
  })

  it('doValidate should return result and errors', done => {
    let val: any = '12'
    const handleChange = (v: any) => {
      val = v
    }

    const contextRef: Ref<any> = ref({})

    mount({
      setup() {
        const props = {
          schema: {
            type: 'string',
            minLength: 10,
          },
          value: val,
          onChange: handleChange,
          contextRef,
        }
        return () => {
          return <App {...props} />
        }
      },
    })

    nextTick(() => {
      // expect(typeof contextRef.value.doValidate).toEqual('function')
      const { valid, errors } = contextRef.value.doValidate()
      expect(valid).toBe(false)
      expect(errors.length).toBe(1)
      done()
    })
  })
})
