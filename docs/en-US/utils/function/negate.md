# negate

::: tip Syntax

\_.negate(predicate)

:::

## Description

创建一个针对断言函数 `func` 结果取反的函数。 `func` 断言函数被调用的时候，`this` 绑定到创建的函数，并传入对应Parameters。

## Parameters

|   Parameters    |   Type   | Default |         Description         |
| :-------: | :------: | :----: | :------------------: |
| predicate | Function |   -    | 需要对结果取反的函数 |

## Returns

- Function: Returns一个新的取反函数

## Examples

```js
function isEven(n) {
  return n % 2 == 0
}

_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven))
// => [1, 3, 5]
```
