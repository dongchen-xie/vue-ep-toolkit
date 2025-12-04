# compact

::: tip Syntax

\_.compact(array)

:::

## Description

创建一个新数组，包含原数组中所有的非假值元素。例如 false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

## Parameters

| Parameters  | Type  | Default |      Description      |
| :---: | :---: | :----: | :------------: |
| array | Array |   -    | The array to process |

## Returns

- array (Array): Returns the new array of filtered values。

## Examples

```js
_.compact([0, 1, false, 2, "", 3])
// => [1, 2, 3]
```
