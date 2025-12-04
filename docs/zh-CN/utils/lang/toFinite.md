# toFinite

::: tip 语法

\_.toFinite(value)

:::

## 描述

转换 `value` 为一个有限数字。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要转换的值 |

## 返回

- number: 返回转换后的数字。

## 例子

```js
_.toFinite(3.2)
// => 3.2

_.toFinite(Number.MIN_VALUE)
// => 5e-324

_.toFinite(Infinity)
// => 1.7976931348623157e+308

_.toFinite("3.2")
// => 3.2
```
