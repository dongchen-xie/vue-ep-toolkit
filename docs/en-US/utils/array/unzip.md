# unzip

::: tip Syntax

\_.unzip(array)

:::

## Description

这个方法类似[`_.zip`](/Array/zip)，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（Returns数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）

## Parameters

| Parameters  |   Type   | Default |         Description         |
| :---: | :------: | :----: | :------------------: |
| array | ...Array |   -    | 要处理的分组元素数组 |

## Returns

- array(Array): Returns重组元素的新数组

## Examples

```js
var zipped = _.zip(["fred", "barney"], [30, 40], [true, false])
// => [['fred', 30, true], ['barney', 40, false]]

_.unzip(zipped)
// => [['fred', 'barney'], [30, 40], [true, false]]
```
