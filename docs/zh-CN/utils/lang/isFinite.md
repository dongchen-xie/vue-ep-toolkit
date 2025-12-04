# isFinite

::: tip 语法

\_.isFinite(value)

:::

## 描述

检查 `value` 是否是原始有限数值。

::: warning 注意

这个方法基于 [Number.isFinite](https://mdn.io/Number/isFinite).

:::

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个错误（Error）对象，返回 `true`，否则 `false`。

## 例子

```js
_.isError(new Error())
// => true

_.isError(Error)
// => false
```
