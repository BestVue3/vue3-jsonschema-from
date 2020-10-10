import { SetupContext } from 'vue'
import { ThemeProvider } from 'vue-jss'

import theme from './theme'

export default (props: any, { slots }: SetupContext) => {
  return (
    <ThemeProvider theme={theme} {...props}>
      {slots.default && slots.default()}
    </ThemeProvider>
  )
}
