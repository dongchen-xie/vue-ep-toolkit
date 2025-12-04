# isArguments

::: tip Syntax

\_.isArguments(value)

:::

## Description

Checks if `value` 是否是一个类 `arguments` 对象。

## Parameters

| Parameters  | Type | Default |    Description    |
| :---: | :--: | :----: | :--------: |
| value | any  |   -    | The value to check |

## Returns

- boolean: 如果`value`是一个`arguments`对象，Returns `true`，否则 `false`。

## Examples

```js
_.isArguments(
  (function () {
    return arguments
  })()
)
// => true

_.isArguments([1, 2, 3])
// => false
```
