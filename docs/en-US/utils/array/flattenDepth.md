# flattenDepth

::: tip Syntax

\_.flattenDepth(array, [depth=1])

:::

## Description

根据 `depth` 递归减少 `array` 的嵌套层级

## Parameters

| Parameters  |  Type  | Default |          Description          |
| :---: | :----: | :----: | :--------------------: |
| array | Array  |   -    | The array to flatten |
| depth | number |   1    |  The maximum recursion depth  |

## Returns

- array(Array): Returns减少嵌套层级后的新数组

## Examples

```js
var array = [1, [2, [3, [4]], 5]]

_.flattenDepth(array, 1)
// => [1, 2, [3, [4]], 5]

_.flattenDepth(array, 2)
// => [1, 2, 3, [4], 5]
```
