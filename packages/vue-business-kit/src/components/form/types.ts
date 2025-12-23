import type { FormProps, FormItemProps, FormInstance } from "element-plus"

export interface BkFormItemConfig extends Partial<FormItemProps> {
  type: string
  componentProps?: Record<string, any>
  children?: Record<string, any>[]
  slot?:
    | boolean
    | {
        default?: string | boolean
        label?: string | boolean
        error?: string | boolean
      }
}

export interface BkFormInternalProps {
  items: BkFormItemConfig[]
}

export interface BkFormProps extends FormProps, BkFormInternalProps {}

export interface BkFormEmits {
  validate: [prop: string, isValid: boolean, message: string]
  submit: [model: Record<string, any>]
  reset: []
}

export interface BkFormInstance {
  formRef?: FormInstance
}
