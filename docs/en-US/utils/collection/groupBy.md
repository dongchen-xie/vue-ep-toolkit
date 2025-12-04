# groupBy

::: tip Syntax

_.groupBy(collection, [iteratee=_.identity])

:::

## Description

创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素Returns的结果。 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个Parameters： (value)。

## Parameters

|    Parameters    |                Type                | Default |          Description          |
| :--------: | :--------------------------------: | :----: | :--------------------: |
| collection |           Array / Object           |   -    |   一个用来迭代的集合   |
|  iteratee  | Array / Function / Object / string |   -    | The iteratee function，用来转换 key |

## Returns

- object(Object): Returns一个组成聚合的对象

## Examples

```js
_.groupBy([6.1, 4.2, 6.3], Math.floor)
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
_.groupBy(["one", "two", "three"], "length")
// => { '3': ['one', 'two'], '5': ['three'] }
```
