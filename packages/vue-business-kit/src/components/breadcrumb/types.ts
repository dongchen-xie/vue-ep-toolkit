import type {
  BreadcrumbProps as ElBreadcrumbProps,
  BreadcrumbInstance as ElBreadcrumbInstance,
  BreadcrumbItemProps as ElBreadcrumbItemProps
} from "element-plus"
import type { Component } from "vue"

export interface BreadcrumbConfig {
  idKey?: string
  iconKey?: string
  menuNameKey?: string
  linkKey?: string
  childrenKey?: string
}

export interface BreadcrumbItem extends Partial<ElBreadcrumbItemProps> {
  id: number | string
  icon?: string
  menuName?: string
  link?: string
  children?: BreadcrumbItem[]
  [key: string]: any
}

export interface BreadcrumbInternalProps {
  separatorIcon?: string | Component
  config?: BreadcrumbConfig
  items?: BreadcrumbItem[]
  currentItem?: string
}

export interface BreadcrumbProps
  extends Omit<ElBreadcrumbProps, "separatorIcon">,
    BreadcrumbInternalProps {}

export interface BreadcrumbInstance {
  elBreadcrumbRef?: ElBreadcrumbInstance
}

export type {
  BreadcrumbPropsPublic,
  BreadcrumbItemProps,
  BreadcrumbItemInstance,
  BreadcrumbItemPropsPublic
} from "element-plus"
