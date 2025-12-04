# isTypedArray

::: tip Syntax

\_.isTypedArray(value)

:::

## Description

Checks if `value` 是否是 TypedArray。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个 typed array，Returns `true`，否则 `false`。

## Examples

```js
_.isTypedArray(new Uint8Array())
// => true

_.isTypedArray([])
// => false
```
