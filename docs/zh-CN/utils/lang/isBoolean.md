# isBoolean

::: tip 语法

\_.isBoolean(value)

:::

## 描述

检查 `value` 是否是原始 boolean 类型或者对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个布尔值，返回 `true`，否则 `false`。

## 例子

```js
_.isBoolean(false)
// => true

_.isBoolean(null)
// => false
```
