# isSet

::: tip Syntax

\_.isSet(value)

:::

## Description

Checks if `value` 是否是一个 `Set` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个 set 对象，Returns `true`，否则 `false`。

## Examples

```js
_.isSet(new Set())
// => true

_.isSet(new WeakSet())
// => false
```
