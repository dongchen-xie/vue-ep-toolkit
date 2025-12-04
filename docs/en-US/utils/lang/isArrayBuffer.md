# isArrayBuffer

::: tip Syntax

\_.isArrayBuffer(value)

:::

## Description

Checks if `value` 是否是一个 `ArrayBuffer` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个`ArrayBuffer`对象，Returns `true`，否则 `false`。

## Examples

```js
_.isArrayBuffer(new ArrayBuffer(2))
// => true

_.isArrayBuffer(new Array(2))
// => false
```
