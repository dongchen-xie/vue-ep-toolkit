# toLength

::: tip 语法

\_.toLength(value)

:::

## 描述

转换 `value` 为用作类数组对象的长度整数。

::: warning 注意

这个方法基于 [ToLength](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

:::

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要转换的值 |

## 返回

- number: 返回转换后的整数。

## 例子

```js
_.toLength(3.2)
// => 3

_.toLength(Number.MIN_VALUE)
// => 0

_.toLength(Infinity)
// => 4294967295

_.toLength("3.2")
// => 3
```
