<template>
  <ep-table :raw-data="tableData" :columns="columns" :number-format="true" :border="true">
    11
  </ep-table>
</template>

<script setup lang="ts">
import type { EpTableColumnProps } from "vue-ep-toolkit"

const tableData = [
  //   {
  //     product: "iPhone 15",
  //     price: 999.99,
  //     sales: 1234567,
  //     profit: 123456.789
  //   },
  //   {
  //     product: "MacBook Pro",
  //     price: 2499.0,
  //     sales: 987654,
  //     profit: 987654.321
  //   },
  //   {
  //     product: "iPad Air",
  //     price: 599.99,
  //     sales: 2468135,
  //     profit: 456789.123
  //   },
  //   {
  //     product: "Apple Watch",
  //     price: 399.0,
  //     sales: 3691470,
  //     profit: 789123.456
  //   }
]

const columns: EpTableColumnProps[] = [
  {
    prop: "product",
    label: "Product"
  },
  {
    prop: "price",
    label: "Price ($)",
    width: 120
  },
  {
    prop: "sales",
    label: "Sales",
    width: 120
  },
  {
    prop: "profit",
    label: "Profit ($)",
    width: 120
  }
]
</script>
