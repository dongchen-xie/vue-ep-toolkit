# keyBy

::: tip 语法

_.keyBy(collection, [iteratee=_.identity])

:::

## 描述

创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成 key（键）的最后一个元素。iteratee（迭代函数）调用 1 个参数：(value)。

## 参数

|    参数    |                 类型                 | 默认值 |          说明          |
| :--------: | :----------------------------------: | :----: | :--------------------: |
| collection |            Array / Object            |   -    |     用来迭代的集合     |
|  iteratee  | Array / Function / / Object / string |   -    | 迭代函数，用来转换 key |

## 返回

- Object: 返回一个组成聚合的对象

## 例子

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
