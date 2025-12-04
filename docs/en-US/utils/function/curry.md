# curry

::: tip Syntax

\_.curry(func, [arity=func.length])

:::

## Description

创建一个函数，该函数接收 func 的Parameters，要么调用 func Returns的结果，如果 func 所需Parameters已经提供，则直接Returns func 所执行的结果。或Returns一个函数，接受余下的 func Parameters的函数，可以使用 func.length 强制需要累积的Parameters个数。
`_.curry.placeholder`值默认是以 `_` 作为附加部分Parameters的占位符。

::: warning Note

这个方法不会设置 curried 函数的 "length" 属性。

:::

## Parameters

| Parameters  |   Type   |   Default    |            Description            |
| :---: | :------: | :---------: | :------------------------: |
| func  | Function |      -      |      用来柯里化的函数      |
| arity |  number  | func.length | 需要提供给 func 的Parameters数量 |

## Returns

- Function: Returns新的柯里化（curry）函数

## Examples

```js
var abc = function (a, b, c) {
  return [a, b, c]
}

var curried = _.curry(abc)

curried(1)(2)(3)
// => [1, 2, 3]

curried(1, 2)(3)
// => [1, 2, 3]

curried(1, 2, 3)
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(_, 3)(2)
// => [1, 2, 3]
```
