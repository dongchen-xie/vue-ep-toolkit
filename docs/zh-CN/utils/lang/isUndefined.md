# isUndefined

::: tip 语法

\_.isUndefined(value)

:::

## 描述

检查 `value` 是否是 `undefined`。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 是 `undefined`，返回 `true`，否则 `false`。

## 例子

```js
_.isUndefined(void 0)
// => true

_.isUndefined(null)
// => false
```
