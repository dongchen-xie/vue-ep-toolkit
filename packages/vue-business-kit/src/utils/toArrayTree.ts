import { assign, clone, each, orderBy, remove, slice } from "lodash-es"

export interface ToArrayTreeOptions {
  strict?: boolean
  key?: string
  parentKey?: string
  children?: string
  mapChildren?: string
  sortKey?: any
  data?: string
  /**
   * 已废弃，被 sortKey: { ...,order: 'desc' } 替换
   * @deprecated
   */
  reverse?: boolean
}

/**
 * 将一个带层级的数据列表转成树结构
 * @param list 数组
 * @param options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', mapChildren: '', data: 'data'}
 * @returns 树结构数组
 */
export function toArrayTree(array: any, options?: ToArrayTreeOptions): any[] {
  const opts = assign(
    {},
    {
      parentKey: "parentId",
      key: "id",
      children: "children"
    },
    options
  )
  const optStrict = opts.strict
  const optKey = opts.key
  const optParentKey = opts.parentKey
  const optChildren = opts.children
  const optMapChildren = opts.mapChildren
  const optSortKey = opts.sortKey
  const optReverse = opts.reverse
  const optData = opts.data

  let result: any[] = []
  let treeMaps: Record<string, any[]> = {}
  let idsMap: Record<string, boolean> = {}

  // 排序处理
  let sortedArray = array
  if (optSortKey) {
    sortedArray = orderBy(clone(array), optSortKey)
    if (optReverse) {
      sortedArray = sortedArray.reverse()
    }
  }

  // 检查重复的主键
  each(sortedArray, function (item: any) {
    const id = item[optKey]
    if (idsMap[id]) {
      console.warn(`Duplicate primary key=${id}`)
    }
    idsMap[id] = true
  })

  // 构建树结构
  each(sortedArray, function (item: any) {
    const id = item[optKey]
    let treeData: any
    let parentId = item[optParentKey]

    if (optData) {
      treeData = {}
      treeData[optData] = item
    } else {
      treeData = item
    }

    treeMaps[id] = treeMaps[id] || []
    treeData[optKey] = id
    treeData[optParentKey] = parentId

    // 检测无限循环
    if (id === parentId) {
      parentId = null
      console.warn(`Error infinite Loop. key=${id} parentKey=${id}`)
    }

    treeMaps[parentId] = treeMaps[parentId] || []
    treeMaps[parentId].push(treeData)
    treeData[optChildren] = treeMaps[id]

    // 映射子节点
    if (optMapChildren) {
      treeData[optMapChildren] = slice(treeMaps[id], 0)
    }

    // 添加到结果集
    if (!optStrict || (optStrict && isNaN(parentId))) {
      if (!idsMap[parentId]) {
        result.push(treeData)
      }
    }
  })

  // 严格模式处理
  if (optStrict) {
    strictTree(sortedArray, optChildren)
  }

  return result
}

/**
 * 严格树处理 - 移除空的子节点
 * @param array 数组
 * @param optChildren 子节点字段名
 */
function strictTree(array: any[], optChildren: string): void {
  each(array, function (item: any) {
    if (item[optChildren] && !item[optChildren].length) {
      remove(item, optChildren)
    }
  })
}
