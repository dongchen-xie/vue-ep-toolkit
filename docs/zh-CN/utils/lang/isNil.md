# isNil

::: tip 语法

\_.isNil(value)

:::

## 描述

检查 `value` 是否是 `null` 或者 `undefined`。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为 `null` 或 `undefined`，返回 `true`，否则 `false`。

## 例子

```js
_.isNil(null)
// => true

_.isNil(void 0)
// => true

_.isNil(NaN)
// => false
```
