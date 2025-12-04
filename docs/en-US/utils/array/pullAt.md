# pullAt

::: tip Syntax

\_.pullAt(array, [indexes])

:::

## Description

根据索引 indexes，移除 array 中对应的元素，并Returns被移除元素的数组。

::: warning Note

<!-- TODO Object/at -->
<!-- 和[`_.at`](/Object/at)方法不同，This method mutates array。 -->

和`_.at`方法不同，This method mutates array。

:::

## Parameters

|  Parameters   |       Type        | Default |       Description       |
| :-----: | :---------------: | :----: | :--------------: |
|  array  |       Array       |   -    |   The array to modify   |
| indexes | number / number[] |   -    | 要移除元素的索引 |

## Returns

- array(Array): Returns移除元素组成的新数组

## Examples

```js
var array = [5, 10, 15, 20]
var evens = _.pullAt(array, 1, 3)

console.log(array)
// => [5, 15]

console.log(evens)
// => [10, 20]
```
