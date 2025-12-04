# flattenDeep

::: tip Syntax

\_.flattenDeep(array)

:::

## Description

将 `array` 递归为一维数组。

## Parameters

| Parameters  | Type  | Default |          Description          |
| :---: | :---: | :----: | :--------------------: |
| array | Array |   -    | The array to flatten |

## Returns

- array(Array): Returns一个的新一维数组

## Examples

```js
_.flattenDeep([1, [2, [3, [4]], 5]])
// => [1, 2, 3, 4, 5]
```
