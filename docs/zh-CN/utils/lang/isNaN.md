# isNaN

::: tip 语法

\_.isNaN(value)

:::

## 描述

检查 `value` 是否是 `NaN`。

::: warning 注意

这个方法基于 [Number.isNaN](https://mdn.io/Number/isNaN)，和全局的 `isNaN` 不同之处在于，全局的 `isNaN` 对于 `undefined` 和其他非数字的值返回 `true`。

:::

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 是一个 `NaN`，返回 `true`，否则 `false`。

## 例子

```js
_.isNaN(NaN)
// => true

_.isNaN(new Number(NaN))
// => true

isNaN(undefined)
// => true

_.isNaN(undefined)
// => false
```
