# isString

::: tip Syntax

\_.isString(value)

:::

## Description

Checks if `value` 是否是原始字符串 `String` 或者对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个字符串，Returns `true`，否则 `false`。

## Examples

```js
_.isString("abc")
// => true

_.isString(1)
// => false
```
