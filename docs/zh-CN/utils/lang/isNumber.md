# isNumber

::: tip 语法

\_.isNumber(value)

:::

## 描述

检查 `value` 是否是原始 `Number` 数值型 或者 对象。

::: warning 注意

要排除 `Infinity`, `-Infinity`, 以及 `NaN` 数值类型，用`_.isFinite` 方法。

:::

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为一个数值，返回 `true`，否则 `false`。

## 例子

```js
_.isNumber(3)
// => true

_.isNumber(Number.MIN_VALUE)
// => true

_.isNumber(Infinity)
// => true

_.isNumber("3")
// => false
```
