import type { PaginationProps, TableColumnCtx, TableProps, TableInstance } from "element-plus"
import type { FormatNumberOptions } from "../../utils/formatNumber"
import { DefaultRow } from "element-plus/es/components/table/src/table/defaults.mjs"

export interface BkTableColumnProps extends Partial<Omit<TableColumnCtx<DefaultRow>, "children">> {
  slots?:
    | boolean
    | {
        default?: string | boolean
        header?: string | boolean
        filterIcon?: string | boolean
        expand?: string | boolean
      }
  numberFormat?: boolean | FormatNumberOptions
  children?: BkTableColumnProps[]
}
export interface BkTableInternalProps {
  rawData?: any[]
  columns?: BkTableColumnProps[]
  mergeColumns?: string[]
  showSearch?: boolean
  searchValue?: string
  searchColumns?: string[]
  showRefresh?: boolean
  showExport?: boolean
  pagination?: boolean | PaginationProps
  numberFormat?: boolean | FormatNumberOptions
  defaultSelection?: boolean | (string | number)[]
  disabledSelection?: boolean | (string | number)[]
}
export interface BkTableProps extends TableProps<any>, BkTableInternalProps {}

export interface BkTableEmits {
  refresh: []
  export: [data: any[], columns: BkTableColumnProps[]]
  search: [value: string, columns: string[]]
  paginationChange: [page: number, size: number]
}

export interface BkTableInstance {
  tableRef?: TableInstance
}
