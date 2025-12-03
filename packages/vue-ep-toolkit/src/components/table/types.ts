import type { TableColumnCtx, PaginationProps } from "element-plus"
import type { FormatNumberOptions } from "../../utils/formatNumber"

export interface EpTableColumnProps extends Partial<TableColumnCtx<any>> {
  // 支持所有 el-table-column 属性
  // 插槽支持
  slots?: {
    default?: string
    header?: string
  }
}

export interface EpTableProps {
  /** 原始数据 */
  rawData?: any[]
  /** 列配置 */
  columns?: EpTableColumnProps[]
  /** 合并单元格的字段数组 */
  mergeColumns?: string[]
  /** 是否显示搜索框 */
  showSearch?: boolean
  /** 搜索框默认值 */
  searchValue?: string
  /** 搜索框默认选择的列 */
  searchColumns?: string[]
  /** 是否显示刷新按钮 */
  showRefresh?: boolean
  /** 是否显示导出按钮 */
  showExport?: boolean
  /** 是否开启分页 */
  pagination?: boolean | PaginationProps
  /** 数值格式化配置 */
  numberFormat?: boolean | FormatNumberOptions
}

export interface EpTableEmits {
  /** 刷新事件 */
  refresh: []
  /** 导出事件 */
  export: [data: any[], columns: EpTableColumnProps[]]
  /** 搜索事件 */
  search: [value: string, columns: string[]]
  /** 分页变化事件 */
  "pagination-change": [page: number, size: number]
}
