# toTreeArray

Converts a tree structure into a flat array list.

## Syntax

```ts
toTreeArray(array: any[], options?: ToTreeArrayOptions): any[]
```

## Arguments

### array

The tree structure array to convert.

- **Type**: `any[]`

### options

The options object.

- **Type**: `ToTreeArrayOptions`
- **Optional**

#### ToTreeArrayOptions

| Property    | Type      | Default      | Description                                                 |
| ----------- | --------- | ------------ | ----------------------------------------------------------- |
| `key`       | `string`  | `"id"`       | The key field name for identifying nodes                    |
| `parentKey` | `string`  | `"parentId"` | The parent key field name for parent relationships          |
| `children`  | `string`  | `"children"` | The children field name for accessing child nodes           |
| `data`      | `string`  | `undefined`  | The field name for accessing wrapped data                   |
| `updated`   | `boolean` | `true`       | Whether to update parent key during conversion              |
| `clear`     | `boolean` | `false`      | Whether to clear children field from nodes after conversion |

## Returns

- **Type**: `T[]`

Returns the flat array list.

## Example

```ts
const treeData = [
  {
    id: 1,
    name: "Node 1",
    children: [
      {
        id: 2,
        name: "Node 2",
        children: [{ id: 4, name: "Node 4", children: [] }]
      },
      {
        id: 3,
        name: "Node 3",
        children: []
      }
    ]
  }
]

toTreeArray(treeData)
// => [
//   { id: 1, name: 'Node 1', parentId: null, children: [...] },
//   { id: 2, name: 'Node 2', parentId: 1, children: [...] },
//   { id: 4, name: 'Node 4', parentId: 2, children: [] },
//   { id: 3, name: 'Node 3', parentId: 1, children: [] }
// ]

toTreeArray(treeData, {
  key: "id",
  parentKey: "parentId",
  children: "children",
  clear: true
})

toTreeArray(treeData, {
  data: "data",
  updated: false
})

// With wrapped data structure
const wrappedTree = [
  {
    id: 1,
    data: { name: "Node 1", value: "value1" },
    children: [
      {
        id: 2,
        data: { name: "Node 2", value: "value2" },
        children: []
      }
    ]
  }
]

toTreeArray(wrappedTree, { data: "data" })
// => [
//   { name: 'Node 1', value: 'value1', parentId: null },
//   { name: 'Node 2', value: 'value2', parentId: 1 }
// ]
```
