# isWeakMap

::: tip 语法

\_.isWeakMap(value)

:::

## 描述

检查 `value` 是否是 `WeakMap` 对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为一个 weak map，返回 `true`，否则 `false`。

## 例子

```js
_.isWeakMap(new WeakMap())
// => true

_.isWeakMap(new Map())
// => false
```
