import type { IconProps } from "element-plus"

export interface BkIconInternalProps {
  icon?: string
}

export interface BkIconProps extends IconProps, BkIconInternalProps {}
