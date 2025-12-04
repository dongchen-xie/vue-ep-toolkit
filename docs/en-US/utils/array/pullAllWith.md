# pullAllWith

::: tip Syntax

\_.pullAllWith(array, values, [comparator])

:::

## Description

这个方法类似[\_.pullAll](/Array/pullAll)，区别是这个方法接受 comparator 调用 array 中的元素和 values 比较。comparator 会传入两个Parameters：(arrVal, othVal)。

::: warning Note

和[`differenceWith`](/Array/differenceWith)方法不同，This method mutates array。

:::

## Parameters

|    Parameters    |   Type   | Default |     Description     |
| :--------: | :------: | :----: | :----------: |
|   array    |  Array   |   -    | The array to modify |
|   values   |  Array   |   -    |  The values to remove  |
| comparator | Function |   -    |    The comparator    |

## Returns

- array(Array): Returns数组

## Examples

```js
var array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 }
]

_.pullAllWith(array, [{ x: 3, y: 4 }], _.isEqual)
console.log(array)
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```
