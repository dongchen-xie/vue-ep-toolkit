# isArrayLike

::: tip 语法

\_.isArrayLike(value)

:::

## 描述

检查 `value` 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且 `value.length` 是个整数，大于等于 `0`，小于或等于 `Number.MAX_SAFE_INTEGER`。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个类数组，返回 `true`，否则 `false`。

## 例子

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
