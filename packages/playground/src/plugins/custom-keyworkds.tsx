import { CustomKeyword } from '@vjsf/core'
import { defineComponent } from 'vue'

const customKeyworkd: CustomKeyword = {
  name: 'test',
  definition: {
    macro() {
      return {
        minLength: 10,
      }
    },
  },
  transformSchema: schema => {
    return {
      ...schema,
      minLength: 10,
    }
  },
}

export default customKeyworkd
