# toTreeArray

将一个树结构转成数组列表。

## 语法

```ts
toTreeArray(array: any[], options?: ToTreeArrayOptions): any[]
```

## 参数

### array

要转换的树结构数组。

- **类型**: `any[]`

### options

配置选项对象。

- **类型**: `ToTreeArrayOptions`
- **可选**

#### ToTreeArrayOptions

| 属性        | 类型      | 默认值       | 描述                               |
| ----------- | --------- | ------------ | ---------------------------------- |
| `key`       | `string`  | `"id"`       | 用于标识节点的键字段名             |
| `parentKey` | `string`  | `"parentId"` | 用于标识父子关系的父键字段名       |
| `children`  | `string`  | `"children"` | 用于访问子节点的子节点字段名       |
| `data`      | `string`  | `undefined`  | 用于访问包装数据的字段名           |
| `updated`   | `boolean` | `true`       | 是否在转换过程中更新父键           |
| `clear`     | `boolean` | `false`      | 是否在转换后从节点中清除子节点字段 |

## 返回值

- **类型**: `T[]`

返回扁平化的数组列表。

## 示例

```ts
const treeData = [
  {
    id: 1,
    name: "节点1",
    children: [
      {
        id: 2,
        name: "节点2",
        children: [{ id: 4, name: "节点4", children: [] }]
      },
      {
        id: 3,
        name: "节点3",
        children: []
      }
    ]
  }
]

toTreeArray(treeData)
// => [
//   { id: 1, name: '节点1', parentId: null, children: [...] },
//   { id: 2, name: '节点2', parentId: 1, children: [...] },
//   { id: 4, name: '节点4', parentId: 2, children: [] },
//   { id: 3, name: '节点3', parentId: 1, children: [] }
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

// 带包装数据结构的情况
const wrappedTree = [
  {
    id: 1,
    data: { name: "节点1", value: "值1" },
    children: [
      {
        id: 2,
        data: { name: "节点2", value: "值2" },
        children: []
      }
    ]
  }
]

toTreeArray(wrappedTree, { data: "data" })
// => [
//   { name: '节点1', value: '值1', parentId: null },
//   { name: '节点2', value: '值2', parentId: 1 }
// ]
```
