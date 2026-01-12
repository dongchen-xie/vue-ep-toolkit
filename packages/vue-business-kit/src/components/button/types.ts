import { ButtonProps as ElButtonProps, ButtonInstance as ElButtonInstance } from "element-plus"
import type { Component } from "vue"

export interface ButtonInternalProps {
  icon?: string | Component
  loadingIcon?: string | Component
}

export interface ButtonProps
  extends Omit<ElButtonProps, "icon" | "loadingIcon">,
    ButtonInternalProps {}

export interface ButtonInstance {
  elButtonRef?: ElButtonInstance
}

export type {
  ButtonType,
  ButtonEmits,
  ButtonNativeType,
  ButtonPropsPublic,
  ButtonConfigContext,
  ButtonGroupContext,
  ButtonGroupInstance
} from "element-plus"
