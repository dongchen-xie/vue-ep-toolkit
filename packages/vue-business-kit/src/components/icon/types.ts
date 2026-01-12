import type { IconProps as ElIconProps, IconInstance as ElIconInstance } from "element-plus"

export interface IconInternalProps {
  icon?: string
}

export interface IconProps extends ElIconProps, IconInternalProps {}

export interface IconInstance {
  elIconRef?: ElIconInstance
}

export type { IconComponentMap, IconPropsPublic } from "element-plus"
