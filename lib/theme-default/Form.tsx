import { defineComponent } from 'vue'

import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  form: {
    '& *': {
      boxSizing: 'border-box',
    },
  },
})

export default defineComponent({
  name: 'Form',
  setup(props, { slots }) {
    const classesRef = useStyles()

    return () => {
      const classes = classesRef.value

      return (
        <form class={classes.form}>{slots.default && slots.default()}</form>
      )
    }
  },
})
