# unzipWith

::: tip Syntax

_.unzipWith(array, [iteratee=_.identity])

:::

## Description

这个方法类似[`_.zip`](/Array/zip)，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（Returns数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）

## Parameters

|   Parameters   |   Type   | Default |         Description         |
| :------: | :------: | :----: | :------------------: |
|  array   | ...Array |   -    | 要处理的分组元素数组 |
| iteratee | Function |   -    |       迭代函数       |

## Returns

- array(Array): Returns重组元素的新数组

## Examples

```js
var zipped = _.zip([1, 2], [10, 20], [100, 200])
// => [[1, 10, 100], [2, 20, 200]]

_.unzipWith(zipped, _.add)
// => [3, 30, 300]
```
