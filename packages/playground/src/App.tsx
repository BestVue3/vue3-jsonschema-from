import { defineComponent, ref, Ref, reactive, watchEffect } from 'vue'
import { createUseStyles } from 'vue-jss'

import MonacoEditor from './components/MonacoEditor'

import CustomFormat from './plugins/custom-formats'
import CustomKeyword from './plugins/custom-keyworkds'

import {
  ThemeProvider as VJSFThemeProvider,
  SchemaForm,
  Schema,
  UISchema,
} from '@v3jsf/core'

import VjsfDefaultThemeProvider from '@v3jsf/theme-default'

import demos from './demos'

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    },
    '*': {
      boxSizing: 'border-box',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '1200px',
    margin: '0 auto',
  },
  menu: {
    marginBottom: 20,
    backgroundColor: '#3fb983',
    paddingTop: 20,
    minWidth: 1200,
    '& > h1': {
      textAlign: 'center',
      color: '#fff',
      fontSize: 60,
    },
  },
  code: {
    width: 700,
    flexShrink: 0,
  },
  codePanel: {
    minHeight: 400,
    marginBottom: 20,
  },
  uiAndValue: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      width: '46%',
    },
  },
  content: {
    display: 'flex',
  },
  form: {
    padding: '0 20px',
    flexGrow: 1,
  },
  menuButton: {
    appearance: 'none',
    borderWidth: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'inline-block',
    padding: 15,
    color: '#fff',
    borderRadius: 5,
    '& + &': {
      marginLeft: 15,
    },
    '&:hover': {
      background: '#fff',
      color: '#3fb983',
    },
  },
  menuSelected: {
    background: '#fff',
    color: '#3fb983',
    '&:hover': {
      background: '#fff',
      color: '#3fb983',
    },
  },
  menus: {
    width: 1200,
    padding: 20,
    margin: '0 auto',
  },
})

export default defineComponent({
  setup() {
    const selectedRef: Ref<number> = ref(0)

    const demo: {
      schema: Schema | null
      data: any
      uiSchema: UISchema | null
      schemaCode: string
      dataCode: string
      uiSchemaCode: string
      customValidate?: any
    } = reactive({
      schema: null,
      data: {},
      uiSchema: {},
      schemaCode: '',
      dataCode: '',
      uiSchemaCode: '',
    })

    watchEffect(() => {
      const index = selectedRef.value
      const d: any = demos[index]
      demo.schema = d.schema
      demo.data = d.default
      demo.uiSchema = d.uiSchema
      demo.schemaCode = toJson(d.schema)
      demo.dataCode = toJson(d.default)
      demo.uiSchemaCode = toJson(d.uiSchema)
      demo.customValidate = d.customValidate
    })

    const methodRef: Ref<any> = ref()

    const classesRef = useStyles()

    const handleChange = (v: any) => {
      demo.data = v
      demo.dataCode = toJson(v)
    }

    function handleCodeChange(
      filed: 'schema' | 'data' | 'uiSchema',
      value: string,
    ) {
      try {
        const json = JSON.parse(value)
        demo[filed] = json
        ;(demo as any)[`${filed}Code`] = value
      } catch (err) {}
    }

    const handleSchemaChange = (v: string) => handleCodeChange('schema', v)
    const handleDataChange = (v: string) => handleCodeChange('data', v)
    const handleUISchemaChange = (v: string) => handleCodeChange('uiSchema', v)

    const handleValidate = () => {
      const { valid, errors, errorSchema } = methodRef.value.doValidate()
      console.log(valid, errors, errorSchema)
    }

    return () => {
      const classes = classesRef.value
      const selected = selectedRef.value

      console.log(methodRef)

      return (
        <VjsfDefaultThemeProvider>
          <div class={classes.menu}>
            <h1>Vue3 JsonSchema Form</h1>
            <div class={classes.menus}>
              {demos.map((demo, index) => (
                <button
                  class={{
                    [classes.menuButton]: true,
                    [classes.menuSelected]: index === selected,
                  }}
                  onClick={() => (selectedRef.value = index)}
                >
                  {demo.name}
                </button>
              ))}
            </div>
          </div>
          <div class={classes.container}>
            <div class={classes.content}>
              <div class={classes.code}>
                <MonacoEditor
                  code={demo.schemaCode}
                  class={classes.codePanel}
                  onChange={handleSchemaChange}
                  title="Schema"
                />
                <div class={classes.uiAndValue}>
                  <MonacoEditor
                    code={demo.uiSchemaCode}
                    class={classes.codePanel}
                    onChange={handleUISchemaChange}
                    title="UISchema"
                  />
                  <MonacoEditor
                    code={demo.dataCode}
                    class={classes.codePanel}
                    onChange={handleDataChange}
                    title="Value"
                  />
                </div>
              </div>
              <div class={classes.form}>
                <SchemaForm
                  schema={demo.schema!}
                  uiSchema={demo.uiSchema!}
                  onChange={handleChange}
                  contextRef={methodRef}
                  value={demo.data}
                  customValidate={demo.customValidate}
                  // {...{ customValidate: demo.customValidate }}
                  plugins={[
                    {
                      customFormats: [CustomFormat],
                      customKeywords: [CustomKeyword],
                    },
                  ]}
                />
                <div style={{ marginTop: '20px' }}>
                  <button onClick={handleValidate}>校验</button>
                </div>
              </div>
            </div>
          </div>
        </VjsfDefaultThemeProvider>
      )
    }
  },
})
