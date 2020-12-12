import { theme } from '@v3jsf/theme-default'
import { mount } from '@vue/test-utils'
import { widgetMap, BuiltInWidgets, Schema, NotFoundWidget } from '@v3jsf/core'
import TestApp from '../test-utils/App'

const App: any = TestApp

describe('widget', () => {
  function schemaShouldRenderWidget(
    schema: any,
    widgetKey: string,
    widgetName: BuiltInWidgets,
  ) {
    const wrapper = mount(App, {
      props: {
        schema,
        onChange: () => {},
        value: null,
        uiSchema: {
          widget: widgetKey,
        },
      },
    })

    expect(wrapper.findComponent(theme.widgets[widgetName]).exists()).toBe(true)
  }

  Object.keys(widgetMap).forEach(key => {
    describe(`${key} widgets`, () => {
      // array is not simple
      if (key === 'array') return
      Object.keys((widgetMap as any)[key]).forEach(w => {
        it(`will render ${w}`, () => {
          schemaShouldRenderWidget(
            {
              type: key,
            },
            w,
            (widgetMap as any)[key][w],
          )
        })
      })
      it(`will render not support`, () => {
        const wrapper = mount(App, {
          props: {
            schema: {
              type: key,
            },
            onChange: () => {},
            value: null,
            uiSchema: {
              widget: 'not_supproted',
            },
          },
        })

        expect(wrapper.findComponent(NotFoundWidget).exists()).toBe(true)
      })
    })
  })

  describe('array widgets', () => {
    it('should render items and SingleTypeArrayWrapper', () => {
      const wrapper = mount(App, {
        props: {
          schema: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          onChange: () => {},
          value: ['1', '2'],
        },
      })

      expect(wrapper.findComponent(theme.widgets.TextWidget).exists()).toBe(
        true,
      )
      expect(
        wrapper.findComponent(theme.layouts.SingleTypeArrayWrapper).exists(),
      ).toBe(true)
      expect(
        wrapper.findAllComponents(theme.layouts.SingleTypeArrayWrapper).length,
      ).toBe(2)
    })

    it('should render select widget', () => {
      const wrapper = mount(App, {
        props: {
          schema: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['1', '2', '3'],
            },
            uniqueItems: true,
          },
          onChange: () => {},
          value: null,
        },
      })

      const selectWrapper = wrapper.findComponent(theme.widgets.SelectWidget)
      expect(selectWrapper.exists()).toBe(true)
      expect(selectWrapper.props('options').multiple).toBe(true)
    })

    it('should render checkboxes', () => {
      const wrapper = mount(App, {
        props: {
          schema: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['1', '2', '3'],
            },
            uniqueItems: true,
          },
          uiSchema: {
            widget: 'checkboxes',
          },
          onChange: () => {},
          value: null,
        },
      })

      const checkboxes = wrapper.findComponent(theme.widgets.CheckboxesWidget)
      expect(checkboxes.exists()).toBe(true)
      // expect(checkboxes.props('options').multiple).toBe(true)
    })
  })
})
