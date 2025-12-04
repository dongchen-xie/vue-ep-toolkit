# toSafeInteger

::: tip 语法

\_.toSafeInteger(value)

:::

## 描述

转换 `value` 为安全整数。 安全整数可以用于比较和准确的表示。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要转换的值 |

## 返回

- number: 返回转换后的整数。

## 例子

```js
_.toSafeInteger(3.2)
// => 3

_.toSafeInteger(Number.MIN_VALUE)
// => 0

_.toSafeInteger(Infinity)
// => 9007199254740991

_.toSafeInteger("3.2")
// => 3
```
