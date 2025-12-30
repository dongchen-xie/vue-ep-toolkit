# toColumns

Creates column configurations based on the given table data and column specifications.

## Syntax

```ts
toColumns(data: any[], spcs?: any, com?: object): any[]
```

## Arguments

### data

The table data to generate columns from.

- **Type**: `any[]`

### spcs

The column specifications for specific properties.

- **Type**: `any`
- **Optional**

### com

The common column properties applied to all columns.

- **Type**: `object`
- **Optional**
- **Default**: `{}`

## Returns

- **Type**: `any[]`

Returns an array of column configuration objects.

## Example

```ts
const tableData = [
  { name: "John", age: 25, city: "New York" },
  { name: "Jane", age: 30, city: "London" }
]

// Basic usage - auto-generate columns from data
const columns = toColumns(tableData)
// => [
//   { prop: 'name', label: 'NAME' },
//   { prop: 'age', label: 'AGE' },
//   { prop: 'city', label: 'CITY' }
// ]

// With common properties
const columnsWithCommon = toColumns(tableData, null, { width: 120, sortable: true })
// => [
//   { prop: 'name', label: 'NAME', width: 120, sortable: true },
//   { prop: 'age', label: 'AGE', width: 120, sortable: true },
//   { prop: 'city', label: 'CITY', width: 120, sortable: true }
// ]

// With specific column specifications
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
