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

| 属性        | 类型                          | 默认值   | 描述                                                                     |
| ----------- | ----------------------------- | -------- | ------------------------------------------------------------------------ |
| `prec`      | `boolean \| number`           | `false`  | 保留几位小数。true 时为 1 位，false 时为 0 位，number 时为指定的小数位数 |
| `unit`      | `"%" \| "k" \| "M" \| "none"` | `"none"` | 格式化单位                                                               |
| `separator` | `boolean`                     | `false`  | 是否添加千分位符号                                                       |
| `showUnit`  | `boolean`                     | `false`  | 是否显示单位文字                                                         |

## 返回值

- **类型**: `string`

返回格式化后的字符串。

## 示例

```ts
formatNumber(1234567.89)
// => "1,234,567.89"

formatNumber(1234567.89, { prec: true })
// => "1,234,567.9"

formatNumber(1234567.89, { prec: 2 })
// => "1,234,567.89"

formatNumber(0.75, { unit: "%", showUnit: true })
// => "75%"

formatNumber(1234567, { unit: "k", showUnit: true })
// => "1,234.567k"

formatNumber(1234567, { unit: "M", showUnit: true })
// => "1.234567M"
```
