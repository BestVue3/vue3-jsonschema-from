import { CustomFormat, CommonWidgetPropsDefine } from '@v3jsf/core'
import { renderItem } from '@v3jsf/theme-default'
import { defineComponent } from 'vue'
import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  input: {
    padding: 20,
    color: 'blue',
    fontSize: 30,
  },
})

const Renderer = defineComponent({
  name: 'CustomFormatComponent',
  props: CommonWidgetPropsDefine,
  setup(props) {
    props.onChange('hello-Jokcy')
    const classesRef = useStyles()
    return () => {
      const { value, onChange } = props
      const classes = classesRef.value
      return renderItem(props, id => (
        <input
          type="text"
          value={value as any}
          class={classes.input}
          onInput={(e: any) => onChange(e.target.value)}
        />
      ))
    }
  },
})

const FormatPlugin: CustomFormat = {
  name: 'test',
  definition: /^hello-/,
  component: Renderer,
}

export default FormatPlugin
