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

## Example

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
