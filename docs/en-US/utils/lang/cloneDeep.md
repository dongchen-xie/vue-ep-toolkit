# cloneDeep

::: tip Syntax

\_.cloneDeep(value)

:::

## Description

这个方法类似[`_.clone`](/Lang/clone)，除了它会递归拷贝 `value`。

## Parameters

| Parameters  | Type | Default |     Description     |
| :---: | :--: | :----: | :----------: |
| value | any  |   -    | 要深拷贝的值 |

## Returns

- any: Returns拷贝后的值

## Examples

```js
var objects = [{ a: 1 }, { b: 2 }]

var deep = _.cloneDeep(objects)
console.log(deep[0] === objects[0])
// => false
```
