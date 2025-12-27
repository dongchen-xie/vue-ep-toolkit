import { computed, h } from "vue"
import { ElMenuItem, ElSubMenu } from "element-plus"
import type { MenuInternalProps, MenuItemCtx } from "../types"
import { BkIcon } from "../../icon"

export function useMenu(props: MenuInternalProps) {
  const defaultConfig = {
    idKey: "id",
    iconKey: "icon",
    menuNameKey: "menu_name",
    linkKey: "link",
    childrenKey: "children"
  }

  const mergedConfig = { ...defaultConfig, ...props.config }

  // 递归渲染菜单项
  const renderMenuItem = (item: MenuItemCtx) => {
    const {
      [mergedConfig.idKey]: id,
      [mergedConfig.iconKey]: icon,
      [mergedConfig.menuNameKey]: menu_name,
      [mergedConfig.linkKey]: link,
      [mergedConfig.childrenKey]: children
    } = item

    const menuItemProps = {
      key: String(id),
      index: String(link || id)
    }

    // 如果有子菜单，渲染为子菜单
    if (children && children.length > 0) {
      return h(ElSubMenu, menuItemProps, {
        title: () =>
          [icon ? h(BkIcon, { icon, size: 24 }) : null, h("span", menu_name || String(id))].filter(
            Boolean
          ),
        default: () => children.map((child: MenuItemCtx) => renderMenuItem(child))
      })
    } else {
      // 渲染普通菜单项
      return h(ElMenuItem, menuItemProps, {
        default: () =>
          [icon ? h(BkIcon, { icon, size: 24 }) : null, h("span", menu_name || String(id))].filter(
            Boolean
          )
      })
    }
  }

  // 生成完整的菜单
  const menuItems = computed(() => {
    if (!props.data || props.data.length === 0) {
      return []
    }

    return props.data.map((item) => renderMenuItem(item))
  })

  // 查找当前路由对应的菜单索引
  const findActiveIndex = (items: MenuItemCtx[], currentPath: string): string => {
    for (const item of items) {
      const itemLink = item[mergedConfig.linkKey]
      if (itemLink === currentPath) {
        return String(itemLink || item[mergedConfig.idKey])
      }

      if (item[mergedConfig.childrenKey]) {
        const childIndex = findActiveIndex(
          item[mergedConfig.childrenKey] as MenuItemCtx[],
          currentPath
        )
        if (childIndex) {
          return childIndex
        }
      }
    }
    return ""
  }

  // 获取默认激活的菜单项
  const defaultActive = computed(() => {
    if (!props.currentRoute || !props.data?.length) return ""
    return findActiveIndex(props.data, props.currentRoute)
  })

  return {
    menuItems,
    defaultActive,
    config: mergedConfig
  }
}
