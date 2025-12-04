# keyBy

::: tip Syntax

_.keyBy(collection, [iteratee=_.identity])

:::

## Description

创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（The iteratee function） 处理后Returns的结果。 每个 key（键）对应的值是生成 key（键）的最后一个元素。iteratee（The iteratee function）调用 1 个Parameters：(value)。

## Parameters

|    Parameters    |                 Type                 | Default |          Description          |
| :--------: | :----------------------------------: | :----: | :--------------------: |
| collection |            Array / Object            |   -    |     用来迭代的集合     |
|  iteratee  | Array / Function / / Object / string |   -    | The iteratee function，用来转换 key |

## Returns

- Object: Returns一个组成聚合的对象

## Examples

```js
var array = [
  { dir: "left", code: 97 },
  { dir: "right", code: 100 }
]

_.keyBy(array, function (o) {
  return String.fromCharCode(o.code)
})
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

_.keyBy(array, "dir")
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
```
