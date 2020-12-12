import { defineComponent, PropType } from 'vue'
import { SingleTypeArrayProps } from '@v3jsf/core'

import { createUseStyles } from 'vue-jss'

import UpIcon from './icons/up'
import DownIcon from './icons/down'
import DeleteIcon from './icons/delete'
import AddIcon from './icons/add'

const useStyles = createUseStyles((theme: any) => ({
  container: {
    display: 'flex',
  },
  action: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: theme.fontSize.input,
    '& + &': {
      marginLeft: 10,
    },
  },
}))

export default defineComponent({
  props: SingleTypeArrayProps,
  setup(props) {
    const classesRef = useStyles()
    return () => {
      const {
        onDown,
        onUp,
        onAdd,
        onDelete,
        length,
        index,
        controls = {},
      } = props

      const classes = classesRef.value

      const { sortable = true, removable = true, addable = true } = controls

      return (
        <div class={classes.container}>
          {index < length - 1 && sortable ? (
            <a class={classes.action} onClick={onDown}>
              <DownIcon />
            </a>
          ) : null}
          {index > 0 && sortable ? (
            <a class={classes.action} onClick={onUp}>
              <UpIcon />
            </a>
          ) : null}
          {removable ? (
            <a class={classes.action} onClick={onDelete}>
              <DeleteIcon />
            </a>
          ) : null}
          {addable ? (
            <a class={classes.action} onClick={onAdd}>
              <AddIcon />
            </a>
          ) : null}
        </div>
      )
    }
  },
})
