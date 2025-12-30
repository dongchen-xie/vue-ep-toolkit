import * as XLSX from "xlsx"

/**
 * 将DOM元素导出为Excel文件
 * @param dom 要导出的DOM元素，通常是表格元素
 * @param filename 导出文件名（不需要扩展名）
 */
export function exportDomToExcel(dom: HTMLElement, filename: string) {
  if (!dom) {
    throw new Error("DOM element is required")
  }

  if (!filename) {
    throw new Error("Filename is required")
  }

  const wb = XLSX.utils.book_new()

  const ws = XLSX.utils.table_to_sheet(dom)

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1")

  XLSX.writeFile(wb, `${filename}.xlsx`)
}
