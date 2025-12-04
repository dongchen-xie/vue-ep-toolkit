# isMap

::: tip Syntax

\_.isMap(value)

:::

## Description

Checks if `value` 是否为一个 `Map` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个 `Map` 对象，Returns `true`，否则 `false`。

## Examples

```js
_.isMap(new Map())
// => true

_.isMap(new WeakMap())
// => false
```
