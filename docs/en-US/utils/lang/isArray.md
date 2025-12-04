# isArray

::: tip Syntax

\_.isArray(value)

:::

## Description

Checks if `value` 是否是一个类 `Array` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个`Array`对象，Returns `true`，否则 `false`。

## Examples

```js
_.isArray([1, 2, 3])
// => true

_.isArray(document.body.children)
// => false

_.isArray("abc")
// => false

_.isArray(_.noop)
// => false
```
