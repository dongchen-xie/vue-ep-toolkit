# isNull

::: tip 语法

\_.isNull(value)

:::

## 描述

检查 `value` 是否是 `null`。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为 `null`，返回 `true`，否则 `false`。

## 例子

```js
_.isNull(null)
// => true

_.isNull(void 0)
// => false
```
