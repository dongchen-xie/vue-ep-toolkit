<template>
  <bk-table :raw-data="tableData" style="width: 100%">
    <bk-table-column prop="date" label="Date" width="150" />
    <bk-table-column label="Delivery Info">
      <bk-table-column prop="name" label="Name" width="120" />
      <bk-table-column label="Address Info">
        <bk-table-column prop="state" label="State" width="120" />
        <bk-table-column prop="city" label="City" width="120" />
        <bk-table-column prop="address" label="Address" />
        <bk-table-column prop="zip" label="Zip" width="120" />
      </bk-table-column>
    </bk-table-column>
  </bk-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-08",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-06",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-07",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  }
]
</script>
