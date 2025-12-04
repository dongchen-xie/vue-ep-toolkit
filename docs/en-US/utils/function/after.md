# after

::: tip Syntax

\_.after(n, func)

:::

## Description

[`_.before`](/Function/before)的反向函数;此方法创建一个函数，当他被调用 n 或更多次之后将马上触发 func 。

## Parameters

| Parameters |   Type   | Default |                Description                 |
| :--: | :------: | :----: | :---------------------------------: |
|  n   |  number  |   -    | `func` 方法应该在调用多少次后才执行 |
| func | Function |   -    |           用来限定的函数            |

## Returns

- Function: Returns新的限定函数

## Examples

```js
var saves = ["profile", "settings"]

var done = _.after(saves.length, function () {
  console.log("done saving!")
})

_.forEach(saves, function (type) {
  asyncSave({ type: type, complete: done })
})
// => Logs 'done saving!' after the two async saves have completed.
```
