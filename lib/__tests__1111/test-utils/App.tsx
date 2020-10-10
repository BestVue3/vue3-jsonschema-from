import { defineComponent } from 'vue'

import { SchemaFormPropsDefine, ThemeProvider, SchemaForm } from '../..'
import theme, { ThemeProvider as StyleThemeProvider } from '../../theme-default'

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
