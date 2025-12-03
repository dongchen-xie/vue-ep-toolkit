export interface FormatNumberOptions {
  /** 保留几位小数，默认2位 */
  prec?: number
  /** 格式化单位 */
  unit?: "%" | "k" | "M" | "none"
  /** 是否添加千分位符号 */
  separator?: boolean
  /** 是否显示单位文字 */
  showUnit?: boolean
}

/**
 * 数值格式化函数
 * @param value 要格式化的数值
 * @param options 格式化选项
 * @returns 格式化后的字符串
 * @example
 * formatNumber(1234.567) // "1234.57"
 * formatNumber(0.1234, { unit: '%' }) // "12.34%"
 * formatNumber(12345, { unit: 'k', separator: true }) // "12.35k"
 * formatNumber(1234567, { unit: 'M', prec: 1 }) // "1.2M"
 */
export function formatNumber(value: number | string, options: FormatNumberOptions = {}): string {
  const { prec = 2, unit = "none", separator = false, showUnit = true } = options

  let num = typeof value === "string" ? parseFloat(value) : value

  if (isNaN(num)) return "0"

  // 单位转换
  switch (unit) {
    case "%":
      num = num * 100
      break
    case "k":
      num = num / 1000
      break
    case "M":
      num = num / 1000000
      break
  }

  // 保留小数位数
  let result = num.toFixed(prec)

  // 添加千分位符号
  if (separator) {
    const parts = result.split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    result = parts.join(".")
  }

  // 显示单位文字
  if (showUnit && unit !== "none") {
    result += unit
  }

  return result
}
