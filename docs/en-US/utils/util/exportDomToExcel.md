# exportDomToExcel

Exports a DOM element (typically a table) to an Excel file.

## Syntax

```ts
exportDomToExcel(dom: HTMLElement, filename: string): void
```

## Arguments

### dom

The DOM element to export, typically a table element.

- **Type**: `HTMLElement`

### filename

The export filename (without extension).

- **Type**: `string`

## Returns

- **Type**: `void`

## Example

```ts
const table = document.querySelector("#my-table") as HTMLElement
exportDomToExcel(table, "user-data")
// => This will export the table to an Excel file named "user-data.xlsx"
```

## Notes

- The function automatically adds the `.xlsx` extension to the filename
- The DOM element should be a table or table-like structure for best results
- If the DOM element is not provided or is invalid, an error will be thrown
- If the filename is not provided, an error will be thrown

## Dependencies

- `xlsx`: Library for Excel file generation and manipulation
