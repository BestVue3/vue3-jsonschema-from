import { defineComponent, PropType } from 'vue'

import UpIcon from './icons/up'
import DownIcon from './icons/down'
import DeleteIcon from './icons/delete'
import AddIcon from './icons/add'

import { createUseStyles } from 'vue-jss'

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
  },
  setup(props) {
    const classesRef = useStyles()
    return () => {
      const { onDown, onUp, onAdd, onDelete, length, index } = props

      const classes = classesRef.value

      return (
        <div class={classes.container}>
          {index < length - 1 && (
            <a class={classes.action} onClick={onDown}>
              <DownIcon />
            </a>
          )}
          {index > 0 && (
            <a class={classes.action} onClick={onUp}>
              <UpIcon />
            </a>
          )}
          <a class={classes.action} onClick={onDelete}>
            <DeleteIcon />
          </a>
          <a class={classes.action} onClick={onAdd}>
            <AddIcon />
          </a>
        </div>
      )
    }
  },
})
