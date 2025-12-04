# isDate

::: tip 语法

\_.isDate(value)

:::

## 描述

检查 `value` 是否是个 `Date` 对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个日期对象，返回 `true`，否则 `false`。

## 例子

```js
_.isDate(new Date())
// => true

_.isDate("Mon April 23 2012")
// => false
```
