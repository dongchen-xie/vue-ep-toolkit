# overArgs

::: tip Syntax

_.overArgs(func, [transforms=[_.identity]])

:::

## Description

创建一个函数，调用`func`时Parameters为相对应的`transforms`的Returns。

## Parameters

| Parameters |   Type   | Default |     Description     |
| :--: | :------: | :----: | :----------: |
| func | Function |   -    | 要包裹的函数 |

## Returns

- Function: Returns新函数

## Examples

```js
function doubled(n) {
  return n * 2
}

function square(n) {
  return n * n
}

var func = _.overArgs(
  function (x, y) {
    return [x, y]
  },
  [square, doubled]
)

func(9, 3)
// => [81, 6]

func(10, 5)
// => [100, 10]
```
