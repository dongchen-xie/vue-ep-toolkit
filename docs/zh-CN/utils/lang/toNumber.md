# toNumber

::: tip 语法

\_.toNumber(value)

:::

## 描述

转换 `value` 为一个数字。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要转换的值 |

## 返回

- number: 返回转换后的数字。

## 例子

```js
_.toNumber(3.2)
// => 3.2

_.toNumber(Number.MIN_VALUE)
// => 5e-324

_.toNumber(Infinity)
// => Infinity

_.toNumber("3.2")
// => 3.2
```
