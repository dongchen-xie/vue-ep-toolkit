# curry

::: tip 语法

\_.curry(func, [arity=func.length])

:::

## 描述

创建一个函数，该函数接收 func 的参数，要么调用 func 返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的 func 参数的函数，可以使用 func.length 强制需要累积的参数个数。
`_.curry.placeholder`值默认是以 `_` 作为附加部分参数的占位符。

::: warning 注意

这个方法不会设置 curried 函数的 "length" 属性。

:::

## 参数

| 参数  |   类型   |   默认值    |            说明            |
| :---: | :------: | :---------: | :------------------------: |
| func  | Function |      -      |      用来柯里化的函数      |
| arity |  number  | func.length | 需要提供给 func 的参数数量 |

## 返回

- Function: 返回新的柯里化（curry）函数

## 例子

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
