# before

::: tip Syntax

\_.before(n, func)

:::

## Description

创建一个调用 func 的函数，通过 this 绑定和创建函数的Parameters调用 func，The number of calls不超过 n 次。 之后再调用这个函数，将Returns一次最后调用 func 的结果。

## Parameters

| Parameters |   Type   | Default |         Description         |
| :--: | :------: | :----: | :------------------: |
|  n   |  number  |   -    | 限制调用 func 的次数 |
| func | Function |   -    |    限制执行的函数    |

## Returns

- Function: Returns新的限定函数

## Examples

```js
jQuery(element).on("click", _.before(5, addContactToList))
// => allows adding up to 4 contacts to the list
```
