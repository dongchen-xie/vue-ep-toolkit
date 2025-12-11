import type { IconProps } from "element-plus"

export interface EpIconInternalProps {
  icon?: string
}

export interface EpIconProps extends IconProps, EpIconInternalProps {}
