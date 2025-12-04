# pullAllBy

::: tip Syntax

_.pullAllBy(array, values, [iteratee=_.identity])

:::

## Description

这个方法类似[\_.pull](/Array/pull)，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values 的每个值以产生一个值，通过产生的值进行了比较。iteratee 会传入一个Parameters： (value)。

::: warning Note

和[`differenceBy`](/Array/differenceBy)方法不同，This method mutates array。

:::

## Parameters

|   Parameters   |                Type                | Default |     Description     |
| :------: | :--------------------------------: | :----: | :----------: |
|  array   |               Array                |   -    | The array to modify |
|  values  |               Array                |   -    |  The values to remove  |
| iteratee | Array / Function / Object / string |   -    |    The iteratee    |

## Returns

- array(Array): Returns数组

## Examples

```js
var array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]

_.pullAllBy(array, [{ x: 1 }, { x: 3 }], "x")
console.log(array)
// => [{ 'x': 2 }]
```
