# wrap

::: tip Syntax

\_.unary(func)

:::

## Description

创建一个最多接受一个Parameters的函数，忽略多余的Parameters。

## Parameters

| Parameters |   Type   | Default |     Description     |
| :--: | :------: | :----: | :----------: |
| func | Function |   -    | 要处理的函数 |

## Returns

- Function: Returns新的函数

## Examples

```js
_.map(["6", "8", "10"], _.unary(parseInt))
// => [6, 8, 10]
```
