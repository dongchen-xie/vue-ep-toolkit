# gte

::: tip 语法

\_.gte(value, other)

:::

## 描述

检查`value`是否大于或等于`other`。

## 参数

| 参数  | 类型 | 默认值 |       说明       |
| :---: | :--: | :----: | :--------------: |
| value | any  |   -    |    要比较的值    |
| other | any  |   -    | 另一个要比较的值 |

## 返回

- boolean: 如果`value`大于或等于`other` ，返回 `true`，否则 `false`。

## 例子

```js
_.gt(3, 1)
// => true

_.gt(3, 3)
// => true

_.gt(1, 3)
// => false
```
