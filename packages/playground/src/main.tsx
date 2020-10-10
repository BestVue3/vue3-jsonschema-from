import { createApp, defineComponent, h } from 'vue'

import App from './App'

const element = document.createElement('div')
document.body.appendChild(element)

// debugger
const instance = createApp(App).mount(element)
