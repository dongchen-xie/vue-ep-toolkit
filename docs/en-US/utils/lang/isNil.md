# isNil

::: tip Syntax

\_.isNil(value)

:::

## Description

Checks if `value` 是否是 `null` 或者 `undefined`。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为 `null` 或 `undefined`，Returns `true`，否则 `false`。

## Examples

```js
_.isNil(null)
// => true

_.isNil(void 0)
// => true

_.isNil(NaN)
// => false
```
