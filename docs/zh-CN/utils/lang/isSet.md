# isSet

::: tip 语法

\_.isSet(value)

:::

## 描述

检查 `value` 是否是一个 `Set` 对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为一个 set 对象，返回 `true`，否则 `false`。

## 例子

```js
_.isSet(new Set())
// => true

_.isSet(new WeakSet())
// => false
```
