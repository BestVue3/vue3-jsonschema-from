// import Form from './Form'
// import FormItem from './FormItem'

// import BaseNumberRenderer from './renderers/NumberRenderer'
// import BaseStringRenderer from './renderers/StringRenderer'
// import ArrayRenderer from './renderers/ArrayRenderer'
// import BooleanRenderer from './renderers/BooleanRenderer'

// import SingleTypeArray from './SingleTypeArrayWrapper'
// import Header from './Header'

// import { withCommonSelection } from './renderers/widgets/Selection'
// import { withCommonRadios } from './renderers/widgets/Radios'

// export * from './theme'

// const StringRenderer = withCommonRadios(withCommonSelection(BaseStringRenderer))
// const NumberRenderer = withCommonRadios(withCommonSelection(BaseNumberRenderer))

export { renderItem } from './utils'

// export {
//   FormItem,
//   Form,
//   StringRenderer,
//   NumberRenderer,
//   ArrayRenderer,
//   SingleTypeArray,
//   BooleanRenderer,
//   Header,
// }

// export default {
//   components: {
//     Form,
//     StringRenderer,
//     NumberRenderer,
//     ArrayRenderer,
//     SingleTypeArray,
//     BooleanRenderer,
//     Header,
//   },
// }

import ThemeProvider from './ThemeProvider'

export * from './ThemeProvider'

export { ThemeProvider as StyleThemeProvider } from './style-theme'

export default ThemeProvider
