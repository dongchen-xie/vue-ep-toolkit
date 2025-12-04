# indexOf

::: tip 语法

\_.indexOf(array, value, [fromIndex=0])

:::

## 描述

使用[`SameValueZero`](https://262.ecma-international.org/6.0/#sec-samevaluezero)等值比较，返回首次`value`在数组`array`中被找到的索引值， 如果 fromIndex 为负值，将从数组`array`尾端索引进行匹配。

## 参数

|   参数    |  类型  | 默认值 |      说明      |
| :-------: | :----: | :----: | :------------: |
|   array   | Array  |   -    | 需要查找的数组 |
|   value   |  any   |   -    |  需要查找的值  |
| fromIndex | number |   0    | 开始查询的位置 |

## 返回

- number(number): 返回 value 在数组中的索引位置, 没有找到为返回-1

## 例子

```js
_.indexOf([1, 2, 1, 2], 2)
// => 1

// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2)
// => 3
```
