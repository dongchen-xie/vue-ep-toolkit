# unionWith

::: tip Syntax

_.unionWith([arrays], [iteratee=_.identity])

:::

## Description

这个方法类似[`_.union`](/Array/union) ，除了它接受一个 comparator 调用比较 arrays 数组的每一个元素。 comparator 调用时会传入 2 个Parameters： (arrVal, othVal)。

## Parameters

|    Parameters    |   Type   | Default |     Description     |
| :--------: | :------: | :----: | :----------: |
|   array    |  Array   |   -    | 要检查的数组 |
| comparator | Function |   -    |   比较函数   |

## Returns

- array(Array): Returns一个新的联合数组

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

_.unionWith(objects, others, _.isEqual)
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```
