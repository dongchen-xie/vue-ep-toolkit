# differenceWith

::: tip Syntax

\_.differenceWith(array, [values], [comparator])

:::

## Description

这个方法类似 `_.difference` ，除了它接受一个 comparator （注：The comparator），它调用比较 array，values 中的元素。 结果值是从第一数组中选择。comparator 调用Parameters有两个：(arrVal, othVal)。

## Parameters

|     Parameters     |   Type   | Default |      Description      |
| :----------: | :------: | :----: | :------------: |
|    array     |  Array   |   -    | The array to process |
|   [values]   | ...Array |   -    |   The values to exclude   |
| [comparator] | Function |   -    |     The comparator     |

## Returns

- array (Array): Returns一个过滤值后的新数组。

## Examples

```js
/**
 * objects为The array to process， [{ 'x': 1, 'y': 2 }] 为需The values to exclude，_.isEqual为The comparator
 * 意为迭代比较 objects中的每个值，Returns除了等于 [{ 'x': 1, 'y': 2 }] 的其他值
 * 及 [{ 'x': 2, 'y': 1 }]
 */
var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 }
]

_.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual)
// => [{ 'x': 2, 'y': 1 }]
```
