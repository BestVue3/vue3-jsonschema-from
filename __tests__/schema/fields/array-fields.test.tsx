import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'

import { theme } from '@v3jsf/theme-default'

import TestAPP from '../../test-utils/App'

const App: any = TestAPP

describe('array field', () => {
  /**
   * TODO:
   * 1. 测试control
   * 2. maxItems、minItems
   * 3. additionItems ?
   */
  describe('controls', () => {
    let baseSchema: any
    // let baseUISchema: any
    beforeEach(() => {
      baseSchema = {
        type: 'array',
        items: {
          type: 'string',
        },
      }
    })

    it('should not moveable when movable is false', done => {
      let v = ['1', '2']
      const wrapper = mount(App, {
        props: {
          schema: baseSchema,
          uiSchema: {
            controls: {
              sortable: false,
            },
          },
          value: v,
          onChange: (xv: any) => (v = xv),
        },
      })

      const stas = wrapper.findAllComponents(
        theme.layouts.SingleTypeArrayWrapper,
      )
      expect(stas.length).toBe(2)
      stas[0].props('onDown')()
      nextTick()
        .then(() => {
          expect(v[0]).toBe('1')
          stas[1].props('onUp')()
          return nextTick()
        })
        .then(() => {
          expect(v[0]).toBe('1')
          done()
        })
    })

    it('should not addable when addable is false', done => {
      let v = ['1', '2']
      const wrapper = mount(App, {
        props: {
          schema: baseSchema,
          uiSchema: {
            controls: {
              addable: false,
            },
          },
          value: v,
          onChange: (xv: any) => (v = xv),
        },
      })

      const stas = wrapper.findAllComponents(
        theme.layouts.SingleTypeArrayWrapper,
      )
      expect(stas.length).toBe(2)
      stas[0].props('onAdd')()
      nextTick().then(() => {
        expect(v.length).toBe(2)
        done()
      })
    })

    it('should not removeable when removeable is false', done => {
      let v = ['1', '2']
      const wrapper = mount(App, {
        props: {
          schema: baseSchema,
          uiSchema: {
            controls: {
              removeable: false,
            },
          },
          value: v,
          onChange: (xv: any) => (v = xv),
        },
      })

      const stas = wrapper.findAllComponents(
        theme.layouts.SingleTypeArrayWrapper,
      )
      expect(stas.length).toBe(2)
      stas[0].props('onDelete')()
      nextTick().then(() => {
        expect(v.length).toBe(2)
        done()
      })
    })
  })

  describe('minItems, maxItems', () => {
    let baseSchema: any
    // let baseUISchema: any
    beforeEach(() => {
      baseSchema = {
        type: 'array',
        minItems: 2,
        maxItems: 3,
        items: {
          type: 'string',
        },
      }
    })

    it('should not addable when match maxItems', done => {
      let v = ['1', '2', '3']
      const wrapper = mount(App, {
        props: {
          schema: baseSchema,
          value: v,
          onChange: (xv: any) => (v = xv),
        },
      })

      const stas = wrapper.findAllComponents(
        theme.layouts.SingleTypeArrayWrapper,
      )
      stas[0].props('onAdd')()
      nextTick().then(() => {
        expect(v.length).toBe(3)
        done()
      })
    })

    it('should not removable when match minItems', done => {
      let v = ['1', '2']
      const wrapper = mount(App, {
        props: {
          schema: baseSchema,
          value: v,
          onChange: (xv: any) => (v = xv),
        },
      })

      const stas = wrapper.findAllComponents(
        theme.layouts.SingleTypeArrayWrapper,
      )
      stas[0].props('onDelete')()
      nextTick().then(() => {
        expect(v.length).toBe(2)
        done()
      })
    })
  })
})
