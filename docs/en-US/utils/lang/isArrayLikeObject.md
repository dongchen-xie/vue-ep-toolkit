# isArrayLikeObject

::: tip Syntax

\_.isArrayLikeObject(value)

:::

## Description

这个方法类似`_.isArrayLike`。除了它还Checks if `value` 是否是个对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个类数组，Returns `true`，否则 `false`。

## Examples

```js
_.isArrayLikeObject([1, 2, 3])
// => true

_.isArrayLikeObject(document.body.children)
// => true

_.isArrayLikeObject("abc")
// => false

_.isArrayLikeObject(_.noop)
// => false
```
