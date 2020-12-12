import { ThemeProvider, Theme } from '@v3jsf/core'
import { SetupContext, PropType } from 'vue'

import Form from './Form'
import Header from './Header'
import SingleTypeArrayWrapper from './SingleTypeArrayWrapper'

import TextWidget from './widgets/TextWidget'
import TextareaWidget from './widgets/TextareaWidget'
import CheckboxesWidget from './widgets/CheckboxesWidget'
import CheckboxWidget from './widgets/CheckboxWidget'
import RadioWidget from './widgets/RadioWidget'
import SelectWidget from './widgets/SelectWidget'
import NumberWidget from './widgets/NumberWidget'
import PasswordWidget from './widgets/PasswordWidget'
import ColorWidget from './widgets/ColorWidget'

import { ThemeProvider as StyleThemeProvide } from './style-theme'

export const widgets = {
  TextWidget,
  TextareaWidget,
  CheckboxWidget,
  CheckboxesWidget,
  RadioWidget,
  SelectWidget,
  HiddenWidget: TextWidget,
  PasswordWidget,
  EmailWidget: TextWidget,
  URLWidget: TextWidget,
  DateWidget: TextWidget,
  DateTimeWidget: TextWidget,
  ColorWidget,
  RangeWidget: TextWidget,
  NumberWidget,
}

export const layouts = {
  Form: Form,
  Header,
  SingleTypeArrayWrapper: SingleTypeArrayWrapper,
}

export const theme: Theme = {
  widgets,
  layouts: layouts as any, // TODO: fix it
}

interface Props<T> {
  theme?: Theme
  styleTheme?: T
}

function VjsfDefaultThemeProvider<T>(props: Props<T>, { slots }: SetupContext) {
  return (
    <StyleThemeProvide>
      <ThemeProvider theme={theme}>
        {slots.default && slots.default()}
      </ThemeProvider>
    </StyleThemeProvide>
  )
}

VjsfDefaultThemeProvider.props = {
  theme: {
    type: Object as PropType<Theme>,
  },
  styleTheme: {
    type: Object,
  },
}

export default VjsfDefaultThemeProvider
