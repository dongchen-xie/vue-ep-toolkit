# isMap

::: tip 语法

\_.isMap(value)

:::

## 描述

检查 `value` 是否为一个 `Map` 对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个 `Map` 对象，返回 `true`，否则 `false`。

## 例子

```js
_.isMap(new Map())
// => true

_.isMap(new WeakMap())
// => false
```
