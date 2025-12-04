# isRegExp

::: tip Syntax

\_.isRegExp(value)

:::

## Description

Checks if `value` 是否为 `RegExp` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果 `value` 为一个正则表达式，Returns `true`，否则 `false`。

## Examples

```js
_.isRegExp(/abc/)
// => true

_.isRegExp("/abc/")
// => false
```
