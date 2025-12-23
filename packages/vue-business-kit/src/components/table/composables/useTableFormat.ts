import { isNumber } from "lodash-es"
import { formatNumber, type FormatNumberOptions } from "../../../utils/formatNumber"
import type { BkTableColumnProps, BkTableProps } from "../types"

export function useTableFormat(props: Pick<BkTableProps, "numberFormat">) {
  const shouldFormatNumber = (column: BkTableColumnProps, value: any) => {
    const columnNumberFormat =
      column.numberFormat !== undefined ? column.numberFormat : props.numberFormat
    return !!(columnNumberFormat && isNumber(value) && column.prop)
  }

  const formatCellValue = (value: number, column?: BkTableColumnProps) => {
    // Use column-level numberFormat if available, otherwise use table-level
    const numberFormatConfig =
      column?.numberFormat !== undefined ? column.numberFormat : props.numberFormat

    if (typeof numberFormatConfig === "boolean") {
      return formatNumber(value)
    }
    return formatNumber(value, numberFormatConfig as FormatNumberOptions)
  }

  return {
    shouldFormatNumber,
    formatCellValue
  }
}
