# cloneDeep

::: tip 语法

\_.cloneDeep(value)

:::

## 描述

这个方法类似[`_.clone`](/Lang/clone)，除了它会递归拷贝 `value`。

## 参数

| 参数  | 类型 | 默认值 |     说明     |
| :---: | :--: | :----: | :----------: |
| value | any  |   -    | 要深拷贝的值 |

## 返回

- any: 返回拷贝后的值

## 例子

```js
var objects = [{ a: 1 }, { b: 2 }]

var deep = _.cloneDeep(objects)
console.log(deep[0] === objects[0])
// => false
```
