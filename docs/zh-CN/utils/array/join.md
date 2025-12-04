# join

::: tip 语法

\_.join(array, [separator=','])

:::

## 描述

将 `array` 中的所有元素转换为由 `separator` 分隔的字符串。

## 参数

|   参数    |  类型  | 默认值 |     说明     |
| :-------: | :----: | :----: | :----------: |
|   array   | Array  |   -    | 要转换的数组 |
| separator | string |  ','   |    分隔符    |

## 返回

- string(string): 返回连接字符串

## 例子

```js
_.join(["a", "b", "c"], "~")
// => 'a~b~c'
```
