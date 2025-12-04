# toInteger

::: tip 语法

\_.toInteger(value)

:::

## 描述

转换 `value` 为一个整数。

::: warning 注意

这个方法基于 [ToInteger](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).

:::

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要转换的值 |

## 返回

- number: 返回转换后的整数。

## 例子

```js
_.toInteger(3.2)
// => 3

_.toInteger(Number.MIN_VALUE)
// => 0

_.toInteger(Infinity)
// => 1.7976931348623157e+308

_.toInteger("3.2")
// => 3
```
