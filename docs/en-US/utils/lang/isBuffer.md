# isBuffer

::: tip Syntax

\_.isBuffer(value)

:::

## Description

Checks if `value` 是否是个 buffer。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个 buffer，Returns `true`，否则 `false`。

## Examples

```js
_.isBuffer(new Buffer(2))
// => true

_.isBuffer(new Uint8Array(2))
// => false
```
