# isBuffer

::: tip 语法

\_.isBuffer(value)

:::

## 描述

检查 `value` 是否是个 buffer。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个 buffer，返回 `true`，否则 `false`。

## 例子

```js
_.isBuffer(new Buffer(2))
// => true

_.isBuffer(new Uint8Array(2))
// => false
```
