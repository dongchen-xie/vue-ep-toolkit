import type {
  CollapseItemProps as ElCollapseItemProps,
  CollapseItemInstance as ElCollapseItemInstance
} from "element-plus"
import type { Component } from "vue"

export interface CollapseItemInternalProps {
  title?: string
  subtitle?: string
  icon?: string | Component
  iconColor?: string
  iconSize?: number | string
  showReset?: boolean
  showExport?: boolean
  showRefresh?: boolean
  onExport?: () => void
}

export interface CollapseItemProps
  extends Omit<ElCollapseItemProps, "title" | "icon">,
    CollapseItemInternalProps {}

export interface CollapseItemInstance {
  elCollapseItemRef?: ElCollapseItemInstance
}

export type {
  CollapseProps,
  CollapseEmits,
  CollapseContext,
  CollapseInstance,
  CollapseModelValue,
  CollapseActiveName,
  CollapsePropsPublic,
  CollapseIconPositionType,
  CollapseItemPropsPublic
} from "element-plus"
