# isString

::: tip 语法

\_.isString(value)

:::

## 描述

检查 `value` 是否是原始字符串 `String` 或者对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为一个字符串，返回 `true`，否则 `false`。

## 例子

```js
_.isString("abc")
// => true

_.isString(1)
// => false
```
