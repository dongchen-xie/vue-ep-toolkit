# invokeMap

::: tip Syntax

\_.invokeMap(collection, path, [args])

:::

## Description

调用`path`上的方法处理`collection`中的每个元素，Returns一个数组，包含每次调用方法得到的结果。任何附加的Parameters提供给每个被调用的方法。如果方法是一个函数，每次调用函数时，内部的 this 指向集合中的每个元素。

## Parameters

|    Parameters    |           Type            | Default |                   Description                   |
| :--------: | :-----------------------: | :----: | :--------------------------------------: |
| collection |      Array / Object       |   -    |              用来迭代的集合              |
|    path    | Array / Function / string |   -    | 用来调用方法的路径或者The function invoked per iteration |
|    args    |          ...any           |   -    |            调用每个方法的Parameters            |

## Returns

- Array: Returns的结果数组

## Examples

```js
_.invokeMap(
  [
    [5, 1, 7],
    [3, 2, 1]
  ],
  "sort"
)
// => [[1, 5, 7], [1, 2, 3]]

_.invokeMap([123, 456], String.prototype.split, "")
// => [['1', '2', '3'], ['4', '5', '6']]
```
