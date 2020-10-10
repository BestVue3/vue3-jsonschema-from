import { defineComponent, computed } from 'vue'
import { createUseStyles } from 'vue-jss'

import {
  ThemeRendererComponentNames,
  ThemeLayoutsNames,
  RendererComponentDefine,
  useComponent,
  HeaderDefine,
  BuiltInWidgets,
  useThemeContext,
  getWidget,
} from '../theme'
import {
  CommonFieldPropsDefine,
  Schema,
  SchemaTypes,
  VueJsonSchemaConfig,
} from '../types'

import { useCommonField } from './common'
import { useVJSFContext } from '../Context'
import { isObject, retrieveSchema, isMultiSelect, optionsList } from '../utils'
import AddIcon from './icons/add'

const useStyles = createUseStyles({
  addBtn: {
    border: '1px solid #aaa',
    padding: '10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    background: '#fefefe',
    cursor: 'pointer',
    marginBottom: 20,
  },
})

enum ArrayItemAction {
  ADD = 'add',
  DELETE = 'delete',
  DOWN = 'down',
  UP = 'up',
}

const Comp = defineComponent({
  name: 'ArrayField',
  props: CommonFieldPropsDefine,
  setup(props) {
    const themeContext = useThemeContext()

    const { componentRef, rendererPropsRef, schemaTitleRef } = useCommonField(
      props,
      SchemaTypes.ARRAY,
      // ThemeRendererComponentNames.ArrayRenderer,
    )

    const SingleTypeArrayWrapperRef = useComponent(
      ThemeLayoutsNames.SingleTypeArrayWrapper,
    )

    const HeaderRef = useComponent(ThemeLayoutsNames.Header)

    const formContextRef = useVJSFContext()

    const handleChangeRef = computed(() => {
      const { onChange } = props

      return (v: any[] | undefined) => {
        // TODO: 处理空值
        onChange(v)
      }
    })

    const isSingleTypeRef = computed(() => {
      return (
        typeof props.schema.items === 'object' &&
        !Array.isArray(props.schema.items)
      )
    })

    const { value, schema } = props

    if (value === undefined || !Array.isArray(value)) {
      if (Array.isArray(schema.default)) {
        handleChangeRef.value(schema.default)
      }
    }

    const handleValueChange = (index: number, v: any) => {
      console.log('------------------>', props.value)
      const value: any = props.value || []
      // ;(props.value as any)[index] = v
      value[index] = v
      props.onChange(value)
    }

    const arrayItemAction = (action: ArrayItemAction, index: number) => {
      const schema = props.schema
      const value = (props.value as any[]) || []
      const len = value.length
      switch (action) {
        case ArrayItemAction.DOWN: {
          if (index < len - 1) {
            const item = value.splice(index, 1)
            value.splice(index + 1, 0, item)
          }
          break
        }
        case ArrayItemAction.UP: {
          if (index > 0) {
            const item = value.splice(index, 1)
            value.splice(index - 1, 0, item)
          }
          break
        }
        case ArrayItemAction.ADD: {
          // TODO: should use default value of type
          value.splice(index + 1, 0, schema.default || undefined)
          break
        }
        case ArrayItemAction.DELETE: {
          value.splice(index, 1)
          break
        }
        default: {
          console.warn(`array action of ${action} is not supported`)
        }
      }
      props.onChange(value)
    }

    const itemsSchemaRef = computed(() => {
      // TODO: retrieve items schema should use another data?
      return retrieveSchema(props.schema.items, props.rootSchema, props.value)
    })

    const isMultiSelectionRef = computed(() => {
      const { schema, rootSchema } = props
      // const items = itemsSchemaRef.value

      return isMultiSelect(schema, rootSchema)
      // return (
      //   uiSchema?.widget ||
      //   (items &&
      //     isObject(items) &&
      //     ((items as Schema).enum || (items as Schema).enumKeyValue))
      // )
    })

    const classesRef = useStyles()

    return () => {
      const ArrayRenderer: RendererComponentDefine = componentRef.value
      const Header: HeaderDefine = HeaderRef.value
      const SchemaItem = formContextRef.value.SchemaItem

      const { value, schema, path, rootSchema, uiSchema, errorSchema } = props

      const isSingleType = isSingleTypeRef.value
      const isMultiType = Array.isArray(schema.items)

      const arr: any[] = (value as any) || []

      const isMultiSelection = isMultiSelectionRef.value

      const commonProps = {
        isDependenciesKey: false,
        required: false,
        requiredError: false,
        rootSchema: rootSchema,
      }

      const classes = classesRef.value

      let content: any

      if (schema.additionalItems) {
        console.warn('additionalItems not supported yet')
      }

      if (isMultiSelection) {
        const { widget = 'select', ...options } = uiSchema

        const Widget = getWidget(schema, widget, themeContext.value.widgets)
        const enumOptions = optionsList(itemsSchemaRef.value)

        content = (
          <Widget
            {...rendererPropsRef.value}
            errorSchema={errorSchema}
            onChange={handleChangeRef.value}
            options={{ ...options, enumOptions, multiple: true }}
          />
        )
      } else if (isSingleType) {
        const SingleTypeArrayWrapper = SingleTypeArrayWrapperRef.value

        content =
          arr.length > 0 ? (
            arr.map((item, index) => (
              <SingleTypeArrayWrapper
                onDown={() => arrayItemAction(ArrayItemAction.DOWN, index)}
                onUp={() => arrayItemAction(ArrayItemAction.UP, index)}
                onDelete={() => arrayItemAction(ArrayItemAction.DELETE, index)}
                onAdd={() => arrayItemAction(ArrayItemAction.ADD, index)}
                length={arr.length}
                index={index}
                title={rendererPropsRef.value.title}
              >
                <SchemaItem
                  {...commonProps}
                  id={`${props.id}_${index}`}
                  path={`${path}/${index}`}
                  key={index}
                  value={arr[index]}
                  onChange={(v: any) => handleValueChange(index, v)}
                  schema={schema.items as Schema}
                  errorSchema={errorSchema[index]}
                  uiSchema={(uiSchema?.items || {}) as VueJsonSchemaConfig}
                />
              </SingleTypeArrayWrapper>
            ))
          ) : (
            <a
              onClick={() => arrayItemAction(ArrayItemAction.ADD, 0)}
              class={classes.addBtn}
            >
              <AddIcon /> {schemaTitleRef.value || props.path}
            </a>
          )
      } else if (isMultiType) {
        const itemTypes = schema.items as Schema[]
        content = itemTypes.map((item, index) => (
          <SchemaItem
            {...commonProps}
            id={`${props.id}_${index}`}
            schema={item}
            key={index}
            path={`${path}/${index}`}
            value={(value as any)[index]}
            onChange={(v: any) => handleValueChange(index, v)}
            errorSchema={errorSchema[index]}
            uiSchema={
              (uiSchema?.items &&
                (uiSchema.items as VueJsonSchemaConfig[])[index]) ||
              {} ||
              {}
            }
          />
        ))
      } else {
        content = (
          <ArrayRenderer
            {...rendererPropsRef.value}
            errorSchema={errorSchema}
            onChange={handleChangeRef.value}
          />
        )
      }

      return [
        schemaTitleRef.value ? (
          <Header title={schemaTitleRef.value} type="array" />
        ) : null,
        content,
      ]

      // return (
      //   <ArrayRenderer
      //     {...rendererPropsRef.value}
      //     onChange={handleChangeRef.value}
      //   />
      // )
    }
  },
})

export default Comp
