# isObjectLike

::: tip 语法

\_.isObjectLike(value)

:::

## 描述

检查 `value` 是否是 类对象。 如果一个值是类对象，那么它不应该是 `null`，而且 `typeof` 后的结果是 "object"。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为一个类对象，返回 `true`，否则 `false`。

## 例子

```js
_.isObjectLike({})
// => true

_.isObjectLike([1, 2, 3])
// => true

_.isObjectLike(_.noop)
// => false

_.isObjectLike(null)
// => false
```
