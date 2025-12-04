# join

::: tip Syntax

\_.join(array, [separator=','])

:::

## Description

将 `array` 中的所有元素转换为由 `separator` 分隔的字符串。

## Parameters

|   Parameters    |  Type  | Default |     Description     |
| :-------: | :----: | :----: | :----------: |
|   array   | Array  |   -    | The array to convert |
| separator | string |  ','   |    The separator    |

## Returns

- string(string): Returns连接字符串

## Examples

```js
_.join(["a", "b", "c"], "~")
// => 'a~b~c'
```
