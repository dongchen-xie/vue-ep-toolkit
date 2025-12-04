# chunk

::: tip Syntax

\_.chunk(array, [size=1])

:::

## Description

将数组拆分成多个 size 长度的块，并组成一个新数组。 如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。

## Parameters

| Parameters  |  Type  | Default |      Description      |
| :---: | :----: | :----: | :------------: |
| array | Array  |   -    | The array to process |
| size  | number |   1    |  The length of each chunk  |

## Returns

- array (Array): Returns一个拆分好的新数组

## Examples

```js
_.chunk(["a", "b", "c", "d"], 2)
// => [['a', 'b'], ['c', 'd']]

_.chunk(["a", "b", "c", "d"], 3)
// => [['a', 'b', 'c'], ['d']]
```
