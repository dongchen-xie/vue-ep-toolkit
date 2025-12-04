# isArrayLike

::: tip Syntax

\_.isArrayLike(value)

:::

## Description

Checks if `value` 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且 `value.length` 是个整数，大于等于 `0`，小于或等于 `Number.MAX_SAFE_INTEGER`。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个类数组，Returns `true`，否则 `false`。

## Examples

```js
_.isArrayLike([1, 2, 3])
// => true

_.isArrayLike(document.body.children)
// => true

_.isArrayLike("abc")
// => true

_.isArrayLike(_.noop)
// => false
```
