# isInteger

::: tip 语法

\_.isInteger(value)

:::

## 描述

检查 `value` 是否为一个整数。

::: warning 注意

这个方法基于 [Number.isInteger](https://mdn.io/Number/isInteger).

:::

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个函数，返回 `true`，否则 `false`。

## 例子

```js
_.isInteger(3)
// => true

_.isInteger(Number.MIN_VALUE)
// => false

_.isInteger(Infinity)
// => false

_.isInteger("3")
// => false
```
