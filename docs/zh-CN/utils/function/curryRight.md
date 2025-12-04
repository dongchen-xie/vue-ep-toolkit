# curryRight

::: tip 语法

\_.curryRight(func, [arity=func.length])

:::

## 描述

这个方法类似*[`.curry`](/Function/curry)。 除了它接受参数的方式用*[`.partialRight`](/Function/partialRight) 代替了[`_.partial`](/Function/partial)。
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

var curried = _.curryRight(abc)

curried(3)(2)(1)
// => [1, 2, 3]

curried(2, 3)(1)
// => [1, 2, 3]

curried(1, 2, 3)
// => [1, 2, 3]

// Curried with placeholders.
curried(3)(1, _)(2)
// => [1, 2, 3]
```
