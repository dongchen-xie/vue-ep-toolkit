import { isArray } from "lodash-es"

/**
 * 根据给定的表格数据和列属性创建列配置。
 * @param {any[]} data - 表格数据。
 * @param {any[]} spcs - 列属性。
 * @param {Object} com - 通用列属性。
 * @returns {any[]} 列配置。
 */
function toColumns(data: any[], spcs?: any, com = {}) {
  if (!isArray(data)) {
    // throw 'input table data is not Array'
    console.error("input table data is not Array")
    return []
  }

  if (data.length == 0) {
    // throw 'input table data is empty'
    console.error("input table data is empty")
    return []
  }

  function mergeProperty(spcs: any[], e: string, com: {}) {
    let obj: { [key: string]: any } = {
      prop: e,
      label: e.toUpperCase(),
      ...com
    }
    if (isArray(spcs) && spcs.length > 0) {
      spcs.forEach((c, idx) => {
        if (c.prop == e) {
          Object.keys(spcs[idx]).forEach((k) => {
            obj[k] = c[k]
          })
        }
      })
    }
    return obj
  }

  return Object.keys(data[0]).map((e) => {
    return mergeProperty(spcs, e, com)
  })
}

export default toColumns
