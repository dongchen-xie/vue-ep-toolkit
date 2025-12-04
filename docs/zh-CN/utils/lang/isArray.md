# isArray

::: tip 语法

\_.isArray(value)

:::

## 描述

检查 `value` 是否是一个类 `Array` 对象。

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果`value`是一个`Array`对象，返回 `true`，否则 `false`。

## 例子

```js
_.isArray([1, 2, 3])
// => true

_.isArray(document.body.children)
// => false

_.isArray("abc")
// => false

_.isArray(_.noop)
// => false
```
