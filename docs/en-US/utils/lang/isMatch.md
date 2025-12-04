# isMatch

::: tip Syntax

\_.isMatch(value)

:::

## Description

执行一个深度比较，来确定 `object` 是否含有和 `source` 完全相等的属性值。

Note: 当 `source` 为偏应用时，这种方法等价于`_.matches`。（注：关于偏应用大家可以自己到 google 上搜索一下）。

偏应用比较匹配空数组和空对象 `source` 值分别针对任何数组或对象的价值。在`_.isEqual` 中查看支持的值比较列表。

## Parameters

|  Parameters  |  Type  | Default |        Description        |
| :----: | :----: | :----: | :----------------: |
| object | Object |   -    |    要Checks if的对象    |
| source | Object |   -    | 属性值相匹配的对象 |

## Returns

- boolean: 如果 `object` 匹配，Returns `true`，否则 `false`。

## Examples

```js
var object = { a: 1, b: 2 }

_.isMatch(object, { b: 2 })
// => true

_.isMatch(object, { b: 1 })
// => false
```
