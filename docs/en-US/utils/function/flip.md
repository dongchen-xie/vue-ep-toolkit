# flip

::: tip Syntax

\_.flip(func)

:::

## Description

创建一个函数，调用`func`时候接收翻转的Parameters。

## Parameters

| Parameters |   Type   | Default |       Description       |
| :--: | :------: | :----: | :--------------: |
| func | Function |   -    | 要翻转Parameters的函数 |

## Returns

- Function: Returns新的函数

## Examples

```js
var flipped = _.flip(function () {
  return _.toArray(arguments)
})

flipped("a", "b", "c", "d")
// => ['d', 'c', 'b', 'a']
```
