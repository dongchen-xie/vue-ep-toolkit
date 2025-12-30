# toArrayTree

Converts a flat array with hierarchical relationships into a tree structure.

## Syntax

```ts
toArrayTree(array: any[], options?: ToArrayTreeOptions): any[]
```

## Arguments

### array

The array to convert to tree structure.

- **Type**: `any[]`

### options

The options object.

- **Type**: `ToArrayTreeOptions`
- **Optional**

#### ToArrayTreeOptions

| Property      | Type      | Default      | Description                                                            |
| ------------- | --------- | ------------ | ---------------------------------------------------------------------- |
| `strict`      | `boolean` | `false`      | Whether to enable strict mode                                          |
| `key`         | `string`  | `"id"`       | The key field name for identifying nodes                               |
| `parentKey`   | `string`  | `"parentId"` | The parent key field name for identifying parent relationships         |
| `children`    | `string`  | `"children"` | The children field name for storing child nodes                        |
| `mapChildren` | `string`  | `""`         | The field name for mapping children (creates a copy of children array) |
| `sortKey`     | `any`     | `undefined`  | The sort key for ordering nodes                                        |
| `data`        | `string`  | `undefined`  | The field name for wrapping original data                              |
| `reverse`     | `boolean` | `false`      | **Deprecated**: Use `sortKey: { ..., order: 'desc' }` instead          |

## Returns

- **Type**: `any[]`

Returns the tree structure array.

## Example

```ts
const data = [
  { id: 1, name: "Node 1", parentId: null },
  { id: 2, name: "Node 2", parentId: 1 },
  { id: 3, name: "Node 3", parentId: 1 },
  { id: 4, name: "Node 4", parentId: 2 }
]

toArrayTree(data)
// => [
//   {
//     id: 1,
//     name: 'Node 1',
//     parentId: null,
//     children: [
//       {
//         id: 2,
//         name: 'Node 2',
//         parentId: 1,
//         children: [
//           {
//             id: 4,
//             name: 'Node 4',
//             parentId: 2,
//             children: []
//           }
//         ]
//       },
//       {
//         id: 3,
//         name: 'Node 3',
//         parentId: 1,
//         children: []
//       }
//     ]
//   }
// ]

toArrayTree(data, {
  key: "id",
  parentKey: "parentId",
  children: "children",
  strict: true
})

toArrayTree(data, {
  sortKey: "name",
  mapChildren: "childNodes"
})
```
