import * as XLSX from "xlsx"
import type { TableColumnCtx } from "../components/table/types"

/**
 * 将JSON数据导出为XLSX文件
 * @param data 表格数据
 * @param columns 表格列配置
 * @param filename 导出文件名
 */
export function exportTableToExcel(data: any[], columns: TableColumnCtx[], filename: string) {
  const wb = XLSX.utils.book_new()

  const headers = columns.map((col) => col.label || col.prop)
  const fieldNames = columns.map((col) => col.prop)

  const wsData = [headers]

  data.forEach((row) => {
    const rowData = fieldNames.map((fieldName) => {
      if (fieldName && fieldName.includes(".")) {
        const keys = fieldName.split(".")
        let value = row
        for (const key of keys) {
          if (value && typeof value === "object") {
            value = value[key]
          } else {
            value = undefined
            break
          }
        }
        return value
      }
      return fieldName ? row[fieldName] : undefined
    })
    wsData.push(rowData)
  })

  const ws = XLSX.utils.aoa_to_sheet(wsData)

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1")

  XLSX.writeFile(wb, filename + ".xlsx")
}
