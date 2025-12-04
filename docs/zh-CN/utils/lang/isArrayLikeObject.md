# isArrayLikeObject

::: tip 语法

\_.isArrayLikeObject(value)

:::

## 描述

这个方法类似`_.isArrayLike`。除了它还检查 `value` 是否是个对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个类数组，返回 `true`，否则 `false`。

## 例子

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
