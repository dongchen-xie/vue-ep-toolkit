# toColumns

根据给定的表格数据和列属性创建列配置。

## 语法

```ts
toColumns(data: any[], spcs?: any, com?: object): any[]
```

## 参数

### data

用于生成列的表格数据。

- **类型**: `any[]`

### spcs

特定属性的列规范。

- **类型**: `any`
- **可选**

### com

应用于所有列的通用列属性。

- **类型**: `object`
- **可选**
- **默认值**: `{}`

## 返回值

- **类型**: `any[]`

返回列配置对象数组。

## 示例

```ts
const tableData = [
  { name: "John", age: 25, city: "New York" },
  { name: "Jane", age: 30, city: "London" }
]

// 基础用法 - 从数据自动生成列
const columns = toColumns(tableData)
// => [
//   { prop: 'name', label: 'NAME' },
//   { prop: 'age', label: 'AGE' },
//   { prop: 'city', label: 'CITY' }
// ]

// 带通用属性
const columnsWithCommon = toColumns(tableData, null, { width: 120, sortable: true })
// => [
//   { prop: 'name', label: 'NAME', width: 120, sortable: true },
//   { prop: 'age', label: 'AGE', width: 120, sortable: true },
//   { prop: 'city', label: 'CITY', width: 120, sortable: true }
// ]

// 带特定列规范
const columnSpecs = [
  { prop: "name", label: "Full Name", width: 150 },
  { prop: "age", label: "Age", sortable: true }
]

const columnsWithSpecs = toColumns(tableData, columnSpecs, { resizable: true })
// => [
//   { prop: 'name', label: 'Full Name', width: 150, resizable: true },
//   { prop: 'age', label: 'Age', sortable: true, resizable: true },
//   { prop: 'city', label: 'CITY', resizable: true }
// ]
```
