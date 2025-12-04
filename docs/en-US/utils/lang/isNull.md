# isNull

::: tip Syntax

\_.isNull(value)

:::

## Description

Checks if `value` 是否是 `null`。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为 `null`，Returns `true`，否则 `false`。

## Examples

```js
_.isNull(null)
// => true

_.isNull(void 0)
// => false
```
