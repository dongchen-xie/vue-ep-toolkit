# xorWith

::: tip Syntax

\_.xorWith([arrays], [comparator])

:::

## Description

这个方法类似[`_.xor`](/Array/xor) ，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用 2 个Parameters：(arrVal, othVal)

## Parameters

|    Parameters    |   Type   | Default |     Description     |
| :--------: | :------: | :----: | :----------: |
|   array    | ...Array |   -    | 要检查的数组 |
| comparator | Function |   -    |   比较函数   |

## Returns

- array(Array): Returns过滤值后的新数组

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

_.xorWith(objects, others, _.isEqual)
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```
