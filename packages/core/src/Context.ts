import { Schema } from './types'
import SchemaItem from './SchemaItem'
import { inject, Ref } from 'vue'

export const VJSFContext = Symbol()

export interface VJSFContext {
  // errors: any[]
  formatMaps: Record<string, any>
  validate: (
    schema: Schema,
    data: any,
  ) => {
    valid: boolean
    errors: any[]
  }
  SchemaItem: typeof SchemaItem
}

export function useVJSFContext(): Ref<VJSFContext> {
  const context = inject(VJSFContext)
  if (!context) {
    throw new Error('you should use SchemaForm instead')
  }
  return context as Ref<VJSFContext>
}
