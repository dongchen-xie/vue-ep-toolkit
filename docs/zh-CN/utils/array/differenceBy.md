# differenceBy

::: tip 语法

_.differenceBy(array, [values], [iteratee=_.identity])

:::

## 描述

这个方法类似[`_.difference`](/Array/difference) ，除了它接受一个 iteratee （注：迭代器）， 调用 array 和 values 中的每个元素以产生比较的标准。iteratee 会调用一个参数：(value)，返回的值作为比较值）

## 参数

|         参数          |                类型                | 默认值 |      说明      |
| :-------------------: | :--------------------------------: | :----: | :------------: |
|         array         |               Array                |   -    | 需要处理的数组 |
|       [values]        |              ...Array              |   -    |   要排除的值   |
| [iteratee=_.identity] | Array / Function / Object / string |   -    |     迭代器     |

## 返回

- array (Array): 返回一个过滤值后的新数组。

## 例子

```js
/**
 * 1: 使用Math.floor方法迭代所有元素，处理之后的结果为: [2.1, 1.2] => [２, １], [2.3, 3.4] => [2, 3]
 * 2: 于是就变成了处理 _.difference([2, 1], [2, 3])，参照 difference 文档得结果为: [1]
 * 3: 返回处理的结果，但不能返回为 [1]，应当返回为迭代为1之前的初始值，及 [1.2]
 */
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [1.2]

// `_.property` 迭代器的速写，意为删除 key 为 x 且值相同的对象
_.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x")
// => [{ 'x': 2 }]
```
