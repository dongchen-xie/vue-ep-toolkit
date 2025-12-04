# toString

::: tip Syntax

\_.toString(value)

:::

## Description

Converts `value` 为字符串。 `null` 和 `undefined` 将Returns空字符串。`-0` 将被Converts为字符串 `"-0"`。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to convert |

## Returns

- string: ReturnsConverts后的字符串。

## Examples

```js
_.toString(null)
// => ''

_.toString(-0)
// => '-0'

_.toString([1, 2, 3])
// => '1,2,3'
```
