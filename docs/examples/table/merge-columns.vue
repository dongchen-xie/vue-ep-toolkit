<template>
  <bk-table :raw-data="tableData" :merge-columns="['name']" :border="true">
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
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Jerry",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Jerry",
    address: "No. 189, Grove St, Los Angeles"
  }
]
</script>
