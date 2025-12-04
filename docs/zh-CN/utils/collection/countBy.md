# countBy

::: tip 语法

_.countBy(collection, [iteratee=_.identity])

:::

## 描述

创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理 collection 中每个元素后返回的结果，每个 key（键）对应的值是 iteratee（迭代函数）返回该 key（键）的迭代次数。 iteratee 调用一个参数：(value)。

## 参数

|    参数    |                类型                | 默认值 |            说明            |
| :--------: | :--------------------------------: | :----: | :------------------------: |
| collection |           Array / Object           |   -    |       需要处理的数组       |
|  iteratee  | Array / Function / Object / string |   -    | 一个迭代函数，用来转换 key |

## 返回

- object (Object): 返回一个组成集合对象。

## 例子

```js
_.countBy([6.1, 4.2, 6.3], Math.floor)
// => { '4': 1, '6': 2 }

// The `_.property` iteratee shorthand.
_.countBy(["one", "two", "three"], "length")
// => { '3': 2, '5': 1 }
```
