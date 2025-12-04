# pullAll

::: tip Syntax

\_.pullAll(array, values)

:::

## Description

这个方法类似[\_.pull](/Array/pull)，区别是这个方法接收一个要移除值的数组。

::: warning Note

和[`difference`](/Array/difference)方法不同，This method mutates array。

:::

## Parameters

|  Parameters  | Type  | Default |     Description     |
| :----: | :---: | :----: | :----------: |
| array  | Array |   -    | The array to modify |
| values | Array |   -    |  The values to remove  |

## Returns

- array(Array): Returns数组

## Examples

```js
var array = [1, 2, 3, 1, 2, 3]

_.pullAll(array, [2, 3])
console.log(array)
// => [1, 1]
```
