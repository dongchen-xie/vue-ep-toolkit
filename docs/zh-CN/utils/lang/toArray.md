# toArray

::: tip 语法

\_.toArray(value)

:::

## 描述

转换 `value` 为一个数组。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要转换的值 |

## 返回

- Array: 返回转换后的数组。

## 例子

```js
_.toArray({ a: 1, b: 2 })
// => [1, 2]

_.toArray("abc")
// => ['a', 'b', 'c']

_.toArray(1)
// => []

_.toArray(null)
// => []
```
