# rearg

::: tip Syntax

\_.rearg(func, indexes)

:::

## Description

创建一个函数,调用`func`时，根据指定的 `indexes` 调整对应位置Parameters。其中第一个索引值是对应第一个Parameters，第二个索引值是作为第二个Parameters，依此类推。

## Parameters

|  Parameters   |          Type          | Default |      Description      |
| :-----: | :--------------------: | :----: | :------------: |
|  func   |        Function        |   -    |  待调用的函数  |
| indexes | ...(number / number[]) |   -    | 排列Parameters的位置 |

## Returns

- Function: Returns新的函数

## Examples

```js
var rearged = _.rearg(
  function (a, b, c) {
    return [a, b, c]
  },
  [2, 0, 1]
)

rearged("b", "c", "a")
// => ['a', 'b', 'c']
```
