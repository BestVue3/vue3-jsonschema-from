import { defineComponent, PropType } from 'vue'
import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  header: {
    fontWeight: 100,
    fontSize: 26,
    margin: 0,
    padding: 0,
    borderBottom: '1px solid #eee',
    marginBottom: 10,
    '* + &': {
      marginTop: 20,
    },
    '& &': {
      fontSize: 22,
    },
  },
})

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    type: {
      type: String as PropType<'array' | 'object'>,
      required: true,
    },
  },

  setup(props) {
    const classesRef = useStyles()
    return () => {
      const classes = classesRef.value
      return <h1 class={classes.header}>{props.title}</h1>
    }
  },
})
