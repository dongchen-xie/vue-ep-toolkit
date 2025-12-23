import { ButtonProps } from "element-plus"
import type { Component } from "vue"

export interface BkButtonInternalProps {
  icon?: string | Component
  loadingIcon?: string | Component
}

export interface BkButtonProps
  extends Omit<ButtonProps, "icon" | "loadingIcon">,
    BkButtonInternalProps {}
