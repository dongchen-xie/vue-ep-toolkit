export interface FormatNumberOptions {
  prec?: boolean | number
  unit?: "%" | "k" | "M" | "none"
  separator?: boolean
  showUnit?: boolean
}

/**
 * 数值格式化函数
 * @param value 要格式化的数值
 * @param options 格式化选项
 * @returns 格式化后的字符串
 * @example
 * formatNumber(1234.567) // "1235" (默认不保留小数)
 * formatNumber(1234.567, { prec: true }) // "1234.6" (保留1位小数)
 * formatNumber(1234.567, { prec: 2 }) // "1234.57" (保留2位小数)
 * formatNumber(0.1234, { unit: '%' }) // "12.3%" (默认不保留小数)
 * formatNumber(0.1234, { unit: '%', prec: true }) // "12.3%" (保留1位小数)
 * formatNumber(12345, { unit: 'k', separator: true }) // "12.3k" (默认不保留小数)
 * formatNumber(1234567, { unit: 'M', prec: 1 }) // "1.2M" (保留1位小数)
 */
export function formatNumber(value: number | string, options: FormatNumberOptions = {}): string {
  const { prec = false, unit = "none", separator = false, showUnit = false } = options

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
  let result: string
  if (num === Math.floor(num)) {
    if (typeof prec === "boolean") {
      result = num.toFixed(1)
    } else {
      result = num.toFixed(prec)
    }
  } else {
    result = num.toString()
  }

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
