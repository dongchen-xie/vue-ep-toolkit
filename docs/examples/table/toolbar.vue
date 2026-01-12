<template>
  <bk-table :raw-data="tableData" show-refresh show-export @refresh="handleRefresh">
    <template #toolbar-left>
      <bk-button @click="handleAdd" type="primary" icon="tabler:plus">Add</bk-button>
    </template>
    <bk-table-column prop="date" label="Date" width="180" />
    <bk-table-column prop="name" label="Name" width="180" />
    <bk-table-column prop="address" label="Address" />
  </bk-table>
</template>

<script setup lang="ts">
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

const handleAdd = () => {
  console.log("Add new row")
}

const handleRefresh = () => {
  console.log("Refresh table data")
}
</script>
