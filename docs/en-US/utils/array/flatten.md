# flatten

::: tip Syntax

\_.flatten(array)

:::

## Description

减少一级 `array` 的嵌套深度。

## Parameters

| Parameters  | Type  | Default |          Description          |
| :---: | :---: | :----: | :--------------------: |
| array | Array |   -    | The array to flatten |

## Returns

- array(Array): Returns减少嵌套层级后的新数组

## Examples

```js
_.flatten([1, [2, [3, [4]], 5]])
// => [1, 2, [3, [4]], 5]
```
