import { defineComponent } from 'vue'
import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  /* Styles applied to the root element. */
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    fontSize: 'inherit',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
})

export default defineComponent(function(p, { slots }) {
  const classesRef = useStyles()

  return () => {
    const classes = classesRef.value
    return (
      <svg viewBox="0 0 1024 1024" class={classes.root}>
        {slots.default && slots.default()}
      </svg>
    )
  }
})
