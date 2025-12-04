# fromPairs

::: tip 语法

\_.fromPairs(pairs)

:::

## 描述

<!-- TODO toPairs -->
<!-- 与 [`_.toPairs`](/Object/toPairs) 正好相反；这个方法返回一个由键值对pairs构成的对象。 -->

与 `_.toPairs` 正好相反；这个方法返回一个由键值对 pairs 构成的对象。

## 参数

| 参数  | 类型  | 默认值 |     说明     |
| :---: | :---: | :----: | :----------: |
| array | Array |   -    | 键值对 pairs |

## 返回

- object(Object): 返回一个新对象

## 例子

```js
_.fromPairs([
  ["a", 1],
  ["b", 2]
])
// => { 'a': 1, 'b': 2 }
```
