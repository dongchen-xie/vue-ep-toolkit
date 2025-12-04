# concat

::: tip Syntax

\_.concat(array, [values])

:::

## Description

创建一个新数组，将 `array` 与任何数组或值连接在一起。

## Parameters

| Parameters  | Type  | Default |     Description     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | The array to concatenate |

## Returns

- array (Array): Returns the new concatenated array。

## Examples

```js
var array = [1]
var other = _.concat(array, 2, [3], [[4]])

console.log(other)
// => [1, 2, 3, [4]]

console.log(array)
// => [1]
```
