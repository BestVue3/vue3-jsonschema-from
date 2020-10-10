import { defineComponent, PropType } from 'vue'

import { createUseStyles } from 'vue-jss'

import ArrayActions from './components/ArrayActions'

const useStyles = createUseStyles(theme => ({
  '@global': {
    '.vjsfDefaultThemeArrayItemContainer': {
      border: '1px solid #eee',
      '& + &': {
        marginTop: 10,
      },
    },
  },
  header: {
    backgroundColor: '#eee',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    padding: 10,
    paddingBottom: 0,
  },
}))

export default defineComponent({
  name: 'SingleTypeArrayWrapper',
  props: {
    onDown: {
      type: Function as PropType<(e: MouseEvent) => void>,
      required: true,
    },
    onUp: {
      type: Function as PropType<(e: MouseEvent) => void>,
      required: true,
    },
    onDelete: {
      type: Function as PropType<(e: MouseEvent) => void>,
      required: true,
    },
    onAdd: {
      type: Function as PropType<(e: MouseEvent) => void>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    const classesRef = useStyles()

    return () => {
      const classes = classesRef.value
      return (
        <div class="vjsfDefaultThemeArrayItemContainer">
          <div class={classes.header}>
            <span>{props.title + '#' + (props.index + 1)}</span>
            <ArrayActions {...props} />
          </div>
          <div class={classes.body}>{slots.default && slots.default()}</div>
        </div>
      )
    }
  },
})
