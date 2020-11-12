import { defineComponent, PropType, computed } from 'vue'
import { createUseStyles } from 'vue-jss'
// import { UISchema } from '@/types'

const FormItemPropsDefine = {
  errors: {
    type: Array as PropType<string[]>,
    default: [],
  },
  label: {
    type: String as PropType<string>,
    required: true,
  },
  id: {
    type: String as PropType<string>,
    required: true,
  },
  required: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  requiredError: {
    type: Boolean as PropType<boolean>,
  },
  uiSchema: {
    type: Object as PropType<any>,
  },
  hideLabel: Boolean,
} as const

const useStyles = createUseStyles((theme: any) => ({
  formItem: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'flex-start',
    '.vjsfDefaultThemeArrayItemContainer + &': {
      marginTop: 10,
    },
    // '& + &': {
    //   marginTop: 10,
    // },
  },
  inputField: {},
  label: {
    fontSize: theme.fontSize.label,
    fontWeight: 900,
  },
  helper: {
    height: 30,
    fontSize: theme.fontSize.label,
    padding: 0,
    margin: 0,
    color: '#777',
  },
  error: {
    height: 30,
    fontSize: 12,
    padding: 0,
    margin: 0,
    color: '#d50606',
  },
  required: {
    color: '#d50606',
  },
}))

export default defineComponent({
  name: 'FormItem',
  props: FormItemPropsDefine,
  setup(props, { slots }) {
    const classesRef = useStyles()

    const helpTextRef = computed(() => {
      return props.uiSchema && (props.uiSchema as any).helpText
    })

    const errorMessagesRef = computed(() => {
      return props.errors
    })

    return () => {
      const { id, label, required, hideLabel } = props
      const helpText = helpTextRef.value

      const classes = classesRef.value

      const errorMessages = errorMessagesRef.value

      const hasError = errorMessages.length > 0

      return (
        <div class={classes.formItem}>
          {label && !hideLabel ? (
            <label for={id} class={classes.label}>
              <span>{label}</span>
              {required ? <span class={classes.required}> *</span> : null}
            </label>
          ) : null}
          <div class={classes.inputField}>
            {slots.default && slots.default()}
          </div>
          {hasError ? (
            <p class={classes.error}>{errorMessages[0]}</p>
          ) : (
            <p class={classes.helper}>{helpText}</p>
          )}
        </div>
      )
    }
  },
})
