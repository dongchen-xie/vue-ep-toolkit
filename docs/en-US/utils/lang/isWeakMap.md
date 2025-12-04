# isWeakMap

::: tip Syntax

\_.isWeakMap(value)

:::

## Description

Checks if `value` 是否是 `WeakMap` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个 weak map，Returns `true`，否则 `false`。

## Examples

```js
_.isWeakMap(new WeakMap())
// => true

_.isWeakMap(new Map())
// => false
```
