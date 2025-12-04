# rest

::: tip Syntax

\_.rest(func, [start=func.length-1])

:::

## Description

创建一个函数，调用`func`时，`this`绑定到创建的新函数，并且`start`之后的Parameters作为数组传入。

## Parameters

| Parameters  |   Type   |    Default     |         Description          |
| :---: | :------: | :-----------: | :-------------------: |
| func  | Function |       -       |     要应用的函数      |
| start |  number  | func.length-1 | `rest` Parameters的开始位置 |

## Returns

- Function: Returns新的函数

## Examples

```js
var say = _.rest(function (what, names) {
  return (
    what + " " + _.initial(names).join(", ") + (_.size(names) > 1 ? ", & " : "") + _.last(names)
  )
})

say("hello", "fred", "barney", "pebbles")
// => 'hello fred, barney, & pebbles'
```
