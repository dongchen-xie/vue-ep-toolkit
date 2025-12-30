# toArrayTree

将一个带层级的数据列表转成树结构。

## 语法

```ts
toArrayTree(array: any, options?: ToArrayTreeOptions): any[]
```

## 参数

### array

要转换为树结构的数组。

- **类型**: `any`

### options

配置选项对象。

- **类型**: `ToArrayTreeOptions`
- **可选**

#### ToArrayTreeOptions

| 属性          | 类型      | 默认值       | 描述                                                      |
| ------------- | --------- | ------------ | --------------------------------------------------------- |
| `strict`      | `boolean` | `false`      | 是否启用严格模式                                          |
| `key`         | `string`  | `"id"`       | 用于标识节点的键字段名                                    |
| `parentKey`   | `string`  | `"parentId"` | 用于标识父子关系的父键字段名                              |
| `children`    | `string`  | `"children"` | 用于存储子节点的子节点字段名                              |
| `mapChildren` | `string`  | `""`         | 映射子节点的字段名（创建子节点数组的副本）                |
| `sortKey`     | `any`     | `undefined`  | 用于节点排序的排序键                                      |
| `data`        | `string`  | `undefined`  | 用于包装原始数据的字段名                                  |
| `reverse`     | `boolean` | `false`      | **已废弃**: 请使用 `sortKey: { ..., order: 'desc' }` 替代 |

## 返回值

- **类型**: `any[]`

返回树结构数组。

## 示例

```ts
const data = [
  { id: 1, name: "节点1", parentId: null },
  { id: 2, name: "节点2", parentId: 1 },
  { id: 3, name: "节点3", parentId: 1 },
  { id: 4, name: "节点4", parentId: 2 }
]

toArrayTree(data)
// => [
//   {
//     id: 1,
//     name: '节点1',
//     parentId: null,
//     children: [
//       {
//         id: 2,
//         name: '节点2',
//         parentId: 1,
//         children: [
//           {
//             id: 4,
//             name: '节点4',
//             parentId: 2,
//             children: []
//           }
//         ]
//       },
//       {
//         id: 3,
//         name: '节点3',
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
