<template>
  <ep-table
    :raw-data="tableData"
    :columns="columns"
    show-refresh
    show-export
    @refresh="handleRefresh"
    @export="handleExport"
    :border="true"
  >
    <template #toolbar-left>
      <ep-button @click="handleAdd" type="primary" icon="tabler:plus">Add</ep-button>
    </template>
  </ep-table>
</template>

<script setup lang="ts">
import type { EpTableColumnProps } from "vue-ep-toolkit"

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Jerry",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Alice",
    address: "No. 189, Grove St, New York"
  },
  {
    date: "2016-05-01",
    name: "Bob",
    address: "No. 189, Grove St, Chicago"
  }
]

const columns: EpTableColumnProps[] = [
  {
    prop: "date",
    label: "Date",
    width: 180
  },
  {
    prop: "name",
    label: "Name",
    width: 180
  },
  {
    prop: "address",
    label: "Address"
  }
]

const handleAdd = () => {
  console.log("Add new row")
}

const handleRefresh = () => {
  console.log("Refresh table data")
}

const handleExport = (data: any[], columns: any[]) => {
  console.log("Export data:", data, columns)
}
</script>
