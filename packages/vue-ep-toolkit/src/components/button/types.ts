import { ButtonProps } from "element-plus"
import type { Component } from "vue"

export interface EpButtonInternalProps {
  icon?: string | Component
  loadingIcon?: string | Component
}

export interface EpButtonProps
  extends Omit<ButtonProps, "icon" | "loadingIcon">,
    EpButtonInternalProps {}
