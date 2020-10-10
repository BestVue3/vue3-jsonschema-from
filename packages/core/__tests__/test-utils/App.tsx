import { defineComponent } from 'vue'

import { SchemaFormPropsDefine, SchemaForm, ThemeProvider } from '../../src'

// 如果直接用`ThemeProvider`，因为`vue3-jsonschema-form`使用symbol作为context，
// 而本地开发的`default-theme`会引用编译后的代码，导致两边的`context`不一样
import { theme, StyleThemeProvider } from 'vjsf-theme-default'

export default defineComponent({
  props: SchemaFormPropsDefine,
  setup(props) {
    return () => {
      return (
        <StyleThemeProvider>
          <ThemeProvider theme={theme}>
            <SchemaForm {...props} />
          </ThemeProvider>
        </StyleThemeProvider>
      )
    }
  },
})
