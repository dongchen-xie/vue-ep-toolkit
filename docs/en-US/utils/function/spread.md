# spread

::: tip Syntax

\_.spread(func, [start=0])

:::

## Description

创建一个函数，调用`func`时，`this`绑定到创建的新函数，把Parameters作为数组传入，类似于`Function#apply`.

## Parameters

| Parameters  |   Type   | Default |          Description           |
| :---: | :------: | :----: | :---------------------: |
| func  | Function |   -    |  要应用传播Parameters的函数   |
| start |  number  |   0    | `spread` Parameters的开始位置 |

## Returns

- Function: Returns新的函数

## Examples

```js
var say = _.spread(function (who, what) {
  return who + " says " + what
})

say(["fred", "hello"])
// => 'fred says hello'

var numbers = Promise.all([Promise.resolve(40), Promise.resolve(36)])

numbers.then(
  _.spread(function (x, y) {
    return x + y
  })
)
// => a Promise of 76
```
