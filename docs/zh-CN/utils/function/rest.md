# rest

::: tip 语法

\_.rest(func, [start=func.length-1])

:::

## 描述

创建一个函数，调用`func`时，`this`绑定到创建的新函数，并且`start`之后的参数作为数组传入。

## 参数

| 参数  |   类型   |    默认值     |         说明          |
| :---: | :------: | :-----------: | :-------------------: |
| func  | Function |       -       |     要应用的函数      |
| start |  number  | func.length-1 | `rest` 参数的开始位置 |

## 返回

- Function: 返回新的函数

## 例子

```js
var say = _.rest(function (what, names) {
  return (
    what + " " + _.initial(names).join(", ") + (_.size(names) > 1 ? ", & " : "") + _.last(names)
  )
})

say("hello", "fred", "barney", "pebbles")
// => 'hello fred, barney, & pebbles'
```
