import { defineComponent, PropType } from 'vue'

import { createUseStyles } from 'vue-jss'

import { SingleTypeArrayProps } from '@vjsf/core'

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
  props: SingleTypeArrayProps,
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
