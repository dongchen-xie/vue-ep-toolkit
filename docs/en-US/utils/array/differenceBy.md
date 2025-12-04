# differenceBy

::: tip Syntax

_.differenceBy(array, [values], [iteratee=_.identity])

:::

## Description

这个方法类似[`_.difference`](/Array/difference) ，除了它接受一个 iteratee （注：The iteratee）， 调用 array 和 values 中的每个元素以产生比较的标准。iteratee 会调用一个Parameters：(value)，Returns的值作为比较值）

## Parameters

|         Parameters          |                Type                | Default |      Description      |
| :-------------------: | :--------------------------------: | :----: | :------------: |
|         array         |               Array                |   -    | The array to process |
|       [values]        |              ...Array              |   -    |   The values to exclude   |
| [iteratee=_.identity] | Array / Function / Object / string |   -    |     The iteratee     |

## Returns

- array (Array): Returns一个过滤值后的新数组。

## Examples

```js
/**
 * 1: 使用Math.floor方法迭代所有元素，处理之后的结果为: [2.1, 1.2] => [２, １], [2.3, 3.4] => [2, 3]
 * 2: 于是就变成了处理 _.difference([2, 1], [2, 3])，参照 difference 文档得结果为: [1]
 * 3: Returns处理的结果，但不能Returns为 [1]，应当Returns为迭代为1之前的初始值，及 [1.2]
 */
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [1.2]

// `_.property` The iteratee的速写，意为删除 key 为 x 且值相同的对象
_.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x")
// => [{ 'x': 2 }]
```
