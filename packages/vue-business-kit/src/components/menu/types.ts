import type {
  MenuProps as ElMenuProps,
  MenuInstance as ElMenuInstance,
  MenuItemProps as ElMenuItemProps
} from "element-plus"

export interface MenuConfig {
  idKey?: string
  iconKey?: string
  menuNameKey?: string
  linkKey?: string
  childrenKey?: string
}

export interface MenuItemCtx extends Partial<ElMenuItemProps> {
  id: number | string
  icon?: string
  menu_name?: string
  link?: string
  children?: MenuItemCtx[]
  [key: string]: any
}

export interface MenuInternalProps {
  config?: MenuConfig
  data?: MenuItemCtx[]
  currentRoute?: string
}

export interface MenuProps extends ElMenuProps, MenuInternalProps {}

export interface MenuInstance {
  elMenuRef?: ElMenuInstance
}

export type { MenuItemInstance, MenuItemGroupInstance, SubMenuInstance } from "element-plus"
