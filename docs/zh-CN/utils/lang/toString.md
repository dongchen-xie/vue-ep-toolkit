# toString

::: tip 语法

\_.toString(value)

:::

## 描述

转换 `value` 为字符串。 `null` 和 `undefined` 将返回空字符串。`-0` 将被转换为字符串 `"-0"`。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要转换的值 |

## 返回

- string: 返回转换后的字符串。

## 例子

```js
_.toString(null)
// => ''

_.toString(-0)
// => '-0'

_.toString([1, 2, 3])
// => '1,2,3'
```
