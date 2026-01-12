<template>
  <bk-table :raw-data="tableData" style="width: 100%">
    <bk-table-column type="selection" width="55" />
    <bk-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </bk-table-column>
    <bk-table-column property="name" label="Name" width="120" />
    <bk-table-column
      property="address"
      label="use show-overflow-tooltip"
      width="240"
      show-overflow-tooltip
    />
    <bk-table-column property="address" label="address" />
  </bk-table>
</template>

<script lang="ts" setup>
interface User {
  date: string
  name: string
  address: string
}
const tableData: User[] = [
  {
    date: "2016-05-04",
    name: "Aleyna Kutzner",
    address: "Lohrbergstr. 86c, Süd Lilli, Saarland"
  },
  {
    date: "2016-05-03",
    name: "Helen Jacobi",
    address: "760 A Street, South Frankfield, Illinois"
  },
  {
    date: "2016-05-02",
    name: "Brandon Deckert",
    address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen"
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho"
  }
]
</script>
