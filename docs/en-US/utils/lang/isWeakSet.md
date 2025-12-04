# isWeakSet

::: tip Syntax

\_.isWeakSet(value)

:::

## Description

Checks if `value` 是否是 `WeakSet` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个 weak set，Returns `true`，否则 `false`。

## Examples

```js
_.isWeakSet(new WeakSet())
// => true

_.isWeakSet(new Set())
// => false
```
