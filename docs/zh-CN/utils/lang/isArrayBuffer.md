# isArrayBuffer

::: tip 语法

\_.isArrayBuffer(value)

:::

## 描述

检查 `value` 是否是一个 `ArrayBuffer` 对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个`ArrayBuffer`对象，返回 `true`，否则 `false`。

## 例子

```js
_.isArrayBuffer(new ArrayBuffer(2))
// => true

_.isArrayBuffer(new Array(2))
// => false
```
