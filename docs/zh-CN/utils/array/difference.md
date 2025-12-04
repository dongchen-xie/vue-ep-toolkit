# difference

::: tip 语法

\_.difference(array, [values])

:::

## 描述

创建一个新数组，使这个数组中的值为第一个数组参数排除了给定数组中的值。该方法使用[SameValueZero](https://262.ecma-international.org/7.0/#sec-samevaluezero)做相等比较。结果值的顺序是由第一个数组中的顺序确定。

## 参数

|   参数   |   类型   | 默认值 |      说明      |
| :------: | :------: | :----: | :------------: |
|  array   |  Array   |   -    | 需要处理的数组 |
| [values] | ...Array |   -    |   要排除的值   |

## 返回

- array (Array): 返回一个过滤值后的新数组。

## 例子

```js
// 从第一个数组中，排除第二个数组中的值
_.difference([3, 2, 1], [4, 2])
// => [3, 1]
```
