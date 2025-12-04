# isSafeInteger

::: tip 语法

\_.isSafeInteger(value)

:::

## 描述

检查 `value` 是否是一个安全整数。 一个安全整数应该是符合 IEEE-754 标准的非双精度浮点数。

::: warning 注意

这个方法基于 [Number.isSafeInteger](https://mdn.io/Number/isSafeInteger).

:::

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为一个安全整数，返回 `true`，否则 `false`。

## 例子

```js
_.isSafeInteger(3)
// => true

_.isSafeInteger(Number.MIN_VALUE)
// => false

_.isSafeInteger(Infinity)
// => false

_.isSafeInteger("3")
// => false
```
