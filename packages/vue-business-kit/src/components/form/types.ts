import type {
  FormProps as ElFormProps,
  FormItemProps as ElFormItemProps,
  FormInstance as ElFormInstance
} from "element-plus"

export interface FormItem extends Partial<ElFormItemProps> {
  type: string
  componentProps?: Record<string, any>
  children?: Record<string, any>[]
}

export interface FormInternalProps {
  items?: FormItem[]
  colNum?: number
}

export interface FormProps extends ElFormProps, FormInternalProps {}

export interface FormInstance {
  elFormRef?: ElFormInstance
}

export type {
  FormRules,
  FormEmits,
  FormItemRule,
  FormItemProp,
  FormItemProps,
  FormItemContext,
  FormItemInstance,
  FormItemPropsPublic,
  FormItemValidateState
} from "element-plus"
