# formatNumber

Formats a number to a string with support for decimal places, unit conversion, thousand separators, and more.

## Syntax

```ts
formatNumber(value: number | string, options?: FormatNumberOptions): string
```

## Arguments

### value

The number to format.

- **Type**: `number | string`

### options

The options object.

- **Type**: `FormatNumberOptions`
- **Optional**

#### FormatNumberOptions

| Property    | Type                          | Default  | Description                                                                                                                                           |
| ----------- | ----------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prec`      | `boolean \| number`           | `false`  | Number of decimal places to keep. If true, use 1 decimal place; if false, use 0 decimal places; if number, use the specified number of decimal places |
| `unit`      | `"%" \| "k" \| "M" \| "none"` | `"none"` | Unit for formatting                                                                                                                                   |
| `separator` | `boolean`                     | `false`  | Whether to add thousand separators                                                                                                                    |
| `showUnit`  | `boolean`                     | `false`  | Whether to display unit text                                                                                                                          |

## Returns

- **Type**: `string`

Returns the formatted string.

## Examples

### Basic Usage

```ts
import { formatNumber } from "vue-business-kit"

formatNumber(1234.567)
// => "1235"

formatNumber(1234.567, { prec: true })
// => "1234.6"

formatNumber(1234.567, { prec: 2 })
// => "1234.57"
```

### Percentage Formatting

```ts
formatNumber(0.1234, { unit: "%" })
// => "12.3%"

formatNumber(0.1234, { unit: "%", prec: true })
// => "12.3%"

formatNumber(0.5, { unit: "%", prec: 0 })
// => "50%"
```

### Thousand Unit Formatting

```ts
formatNumber(12345, { unit: "k" })
// => "12.3k"

formatNumber(12345, { unit: "k", prec: true })
// => "12.3k"

formatNumber(1500, { unit: "k", prec: 1 })
// => "1.5k"
```

### Million Unit Formatting

```ts
formatNumber(1234567, { unit: "M" })
// => "1.2M"

formatNumber(1234567, { unit: "M", prec: true })
// => "1.2M"

formatNumber(5000000, { unit: "M", prec: 1 })
// => "5.0M"
```

### Thousand Separators

```ts
formatNumber(1234567.89, { separator: true })
// => "1,234,567.9"

formatNumber(1234567, { separator: true, prec: false })
// => "1,234,567"
```

### Combined Usage

```ts
formatNumber(1234567, { unit: "k", separator: true, prec: true })
// => "1,234.6k"

formatNumber(0.12345, { unit: "%", prec: true })
// => "12.3%"

formatNumber(5000000, { unit: "M", separator: true, prec: false })
// => "5M"
```

### Hide Unit

```ts
formatNumber(0.1234, { unit: "%", showUnit: false })
// => "12.34"

formatNumber(12345, { unit: "k", showUnit: false })
// => "12.35"
```

### String Input

```ts
formatNumber("1234.567")
// => "1234.57"

formatNumber("0.5", { unit: "%" })
// => "50.00%"
```

### Invalid Input Handling

```ts
formatNumber("invalid")
// => "0"

formatNumber(NaN)
// => "0"
```
