import { isNumber } from "lodash-es"
import { formatNumber, type FormatNumberOptions } from "../../../utils/formatNumber"
import type { EpTableColumnProps, EpTableProps } from "../types"

export function useTableFormat(props: Pick<EpTableProps, "numberFormat">) {
  const shouldFormatNumber = (column: EpTableColumnProps, value: any) => {
    return props.numberFormat && isNumber(value) && column.prop
  }

  const formatCellValue = (value: number) => {
    if (typeof props.numberFormat === "boolean") {
      return formatNumber(value)
    }
    return formatNumber(value, props.numberFormat as FormatNumberOptions)
  }

  return {
    shouldFormatNumber,
    formatCellValue
  }
}