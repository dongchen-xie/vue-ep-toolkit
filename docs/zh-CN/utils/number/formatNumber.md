# formatNumber

格式化数字为字符串，支持小数位数、单位转换、千分位分隔符等选项。

## 语法

```ts
formatNumber(value: number | string, options?: FormatNumberOptions): string
```

## 参数

### value

要格式化的数值。

- **类型**: `number | string`

### options

格式化选项对象。

- **类型**: `FormatNumberOptions`
- **可选**

#### FormatNumberOptions

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `prec` | `number` | `2` | 保留几位小数 |
| `unit` | `"%" \| "k" \| "M" \| "none"` | `"none"` | 格式化单位 |
| `separator` | `boolean` | `false` | 是否添加千分位符号 |
| `showUnit` | `boolean` | `true` | 是否显示单位文字 |

## 返回值

- **类型**: `string`

返回格式化后的字符串。

## 示例

### 基础用法

```ts
import { formatNumber } from "vue-ep-toolkit"

formatNumber(1234.567)
// => "1234.57"

formatNumber(1234.5678, { prec: 3 })
// => "1234.568"
```

### 百分比格式化

```ts
formatNumber(0.1234, { unit: "%" })
// => "12.34%"

formatNumber(0.5, { unit: "%", prec: 0 })
// => "50%"
```

### 千位单位格式化

```ts
formatNumber(12345, { unit: "k" })
// => "12.35k"

formatNumber(1500, { unit: "k", prec: 1 })
// => "1.5k"
```

### 百万单位格式化

```ts
formatNumber(1234567, { unit: "M" })
// => "1.23M"

formatNumber(5000000, { unit: "M", prec: 1 })
// => "5.0M"
```

### 千分位分隔符

```ts
formatNumber(1234567.89, { separator: true })
// => "1,234,567.89"

formatNumber(1234567, { separator: true, prec: 0 })
// => "1,234,567"
```

### 组合使用

```ts
formatNumber(1234567, { unit: "k", separator: true, prec: 1 })
// => "1,234.6k"

formatNumber(0.12345, { unit: "%", prec: 1 })
// => "12.3%"

formatNumber(5000000, { unit: "M", separator: true })
// => "5.00M"
```

### 隐藏单位

```ts
formatNumber(0.1234, { unit: "%", showUnit: false })
// => "12.34"

formatNumber(12345, { unit: "k", showUnit: false })
// => "12.35"
```

### 字符串输入

```ts
formatNumber("1234.567")
// => "1234.57"

formatNumber("0.5", { unit: "%" })
// => "50.00%"
```

### 无效输入处理

```ts
formatNumber("invalid")
// => "0"

formatNumber(NaN)
// => "0"
```
