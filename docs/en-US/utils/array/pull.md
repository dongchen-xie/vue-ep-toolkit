# pull

::: tip Syntax

\_.pull(array, [values])

:::

## Description

移除数组 array 中所有和给定值相等的元素，使用 [`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero) 进行全等比较。

::: warning Note

和[`without`](/Array/without)方法不同，This method mutates array。使用[`_.remove`](/Array/remove)从一个数组中移除元素。

:::

## Parameters

|  Parameters  | Type  | Default |     Description     |
| :----: | :---: | :----: | :----------: |
| array  | Array |   -    | The array to modify |
| values |  any  |   -    |  The values to remove  |

## Returns

- array(Array): Returns数组

## Examples

```js
var array = [1, 2, 3, 1, 2, 3]

_.pull(array, 2, 3)
console.log(array)
// => [1, 1]
```
