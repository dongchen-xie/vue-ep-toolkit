# countBy

::: tip Syntax

_.countBy(collection, [iteratee=_.identity])

:::

## Description

创建一个组成对象，key（键）是经过 iteratee（The iteratee function） 执行处理 collection 中每个元素后Returns的结果，每个 key（键）对应的值是 iteratee（The iteratee function）Returns该 key（键）的迭代次数。 iteratee 调用一个Parameters：(value)。

## Parameters

|    Parameters    |                Type                | Default |            Description            |
| :--------: | :--------------------------------: | :----: | :------------------------: |
| collection |           Array / Object           |   -    |       The array to process       |
|  iteratee  | Array / Function / Object / string |   -    | 一个The iteratee function，用来转换 key |

## Returns

- object (Object): Returns一个组成集合对象。

## Examples

```js
_.countBy([6.1, 4.2, 6.3], Math.floor)
// => { '4': 1, '6': 2 }

// The `_.property` iteratee shorthand.
_.countBy(["one", "two", "three"], "length")
// => { '3': 2, '5': 1 }
```
