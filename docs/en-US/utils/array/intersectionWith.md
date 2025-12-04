# intersectionWith

::: tip Syntax

\_.intersectionWith([arrays], [comparator])

:::

## Description

这个方法类似[`_.intersection`](/Array/intersection)，区别是它接受一个 comparator 调用比较 arrays 中的元素。结果值是从第一数组中选择。comparator 会传入两个Parameters：(arrVal, othVal)。

## Parameters

|    Parameters    |   Type   | Default |     Description     |
| :--------: | :------: | :----: | :----------: |
|   array    | ...Array |   -    | The arrays to inspect |
| comparator | Function |   -    |    The comparator    |

## Returns

- array(Array): Returns一个包含所有传入数组交集元素的新数组

## Examples

```js
var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 }
]
var others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 }
]

_.intersectionWith(objects, others, _.isEqual)
// => [{ 'x': 1, 'y': 2 }]
```
