# isElement

::: tip 语法

\_.isElement(value)

:::

## 描述

检查 `value` 是否是可能是 DOM 元素。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个 DOM 元素，返回 `true`，否则 `false`。

## 例子

```js
_.isElement(document.body)
// => true

_.isElement("<body>")
// => false
```
