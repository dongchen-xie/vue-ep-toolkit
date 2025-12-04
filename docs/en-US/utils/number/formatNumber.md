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

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `prec` | `number` | `2` | Number of decimal places to keep |
| `unit` | `"%" \| "k" \| "M" \| "none"` | `"none"` | Unit for formatting |
| `separator` | `boolean` | `false` | Whether to add thousand separators |
| `showUnit` | `boolean` | `true` | Whether to display unit text |

## Returns

- **Type**: `string`

Returns the formatted string.

## Examples

### Basic Usage

```ts
import { formatNumber } from "vue-ep-toolkit"

formatNumber(1234.567)
// => "1234.57"

formatNumber(1234.5678, { prec: 3 })
// => "1234.568"
```

### Percentage Formatting

```ts
formatNumber(0.1234, { unit: "%" })
// => "12.34%"

formatNumber(0.5, { unit: "%", prec: 0 })
// => "50%"
```

### Thousand Unit Formatting

```ts
formatNumber(12345, { unit: "k" })
// => "12.35k"

formatNumber(1500, { unit: "k", prec: 1 })
// => "1.5k"
```

### Million Unit Formatting

```ts
formatNumber(1234567, { unit: "M" })
// => "1.23M"

formatNumber(5000000, { unit: "M", prec: 1 })
// => "5.0M"
```

### Thousand Separators

```ts
formatNumber(1234567.89, { separator: true })
// => "1,234,567.89"

formatNumber(1234567, { separator: true, prec: 0 })
// => "1,234,567"
```

### Combined Usage

```ts
formatNumber(1234567, { unit: "k", separator: true, prec: 1 })
// => "1,234.6k"

formatNumber(0.12345, { unit: "%", prec: 1 })
// => "12.3%"

formatNumber(5000000, { unit: "M", separator: true })
// => "5.00M"
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
