# reverse

::: tip Syntax

\_.reverse(array)

:::

## Description

反转 array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。

::: warning Note

This method mutates array。

:::

## Parameters

| Parameters  | Type  | Default |     Description     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | The array to modify |

## Returns

- array(Array): Returns数组

## Examples

```js
var array = [1, 2, 3]

_.reverse(array)
// => [3, 2, 1]

console.log(array)
// => [3, 2, 1]
```
