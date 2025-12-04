# lt

::: tip 语法

\_.lt(value, other)

:::

## 描述

检查 `value` 是否小于 `other`。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要比较的值 |
| other | any  |   -    | 另一个要比较的值 |

## 返回

- boolean: 如果 `value` 小于 `other`，返回 `true`，否则 `false`。

## 例子

```js
_.lt(1, 3)
// => true

_.lt(3, 3)
// => false

_.lt(3, 1)
// => false
```
