# isObject

::: tip 语法

\_.isObject(value)

:::

## 描述

检查 `value` 是否为 `Object` 的 language type。 (例如： arrays, functions, objects, regexes,`new Number(0)`, 以及 `new String('')`)

## 参数

| 参数  | 类型 | 默认值 |    说明    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | 要检查的值 |

## 返回

- boolean: 如果 `value` 为一个对象，返回 `true`，否则 `false`。

## 例子

```js
_.isObject({})
// => true

_.isObject([1, 2, 3])
// => true

_.isObject(_.noop)
// => true

_.isObject(null)
// => false
```
