import { assign, forEach } from "lodash-es"

export interface ToTreeArrayOptions {
  key?: string
  parentKey?: string
  children?: string
  data?: string
  updated?: boolean
  clear?: boolean
}

/**
 * 将一个树结构转成数组列表
 *
 * @param {Array} array 数组
 * @param {Object} options { children: 'children', data: 'data', clear: false }
 * @return {Array}
 */
export function toTreeArray<T>(array: T[], options?: ToTreeArrayOptions): T[] {
  return unTreeList<T>(
    [],
    null,
    array,
    assign(
      {},
      {
        parentKey: "parentId",
        key: "id",
        children: "children"
      },
      options
    )
  )
}

function unTreeList<T>(
  result: T[],
  parentItem: any,
  array: T[],
  opts: {
    key?: string
    parentKey?: string
    children?: string
    data?: string
    updated?: boolean
    clear?: boolean
  }
) {
  var optKey = opts.key
  var optParentKey = opts.parentKey
  var optChildren = opts.children
  var optData = opts.data
  var optUpdated = opts.updated
  var optClear = opts.clear
  forEach(array, function (item: any) {
    var childList = item[optChildren!]
    if (optData) {
      item = item[optData]
    }
    if (optUpdated !== false) {
      item[optParentKey!] = parentItem ? parentItem[optKey!] : null
    }
    result.push(item)
    if (childList && childList.length) {
      unTreeList(result, item, childList, opts)
    }
    if (optClear) {
      delete item[optChildren!]
    }
  })
  return result
}
