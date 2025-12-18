import type { FormProps, FormItemProps, FormInstance } from "element-plus"

export interface EpFormItemConfig extends Partial<FormItemProps> {
  type: string
  slot?:
    | boolean
    | {
        default?: string | boolean
        label?: string | boolean
        error?: string | boolean
      }
}

export interface EpFormInternalProps {
  items: EpFormItemConfig[]
}

export interface EpFormProps extends FormProps, EpFormInternalProps {}

export interface EpFormEmits {
  validate: [prop: string, isValid: boolean, message: string]
  submit: [model: Record<string, any>]
  reset: []
}

export interface EpFormInstance {
  formRef?: FormInstance
}
