<template>
  switch parent border: <el-switch v-model="parentBorder" /> switch child border:
  <el-switch v-model="childBorder" /> preserve expanded:
  <el-switch v-model="preserveExpanded" />
  <bk-table
    :raw-data="tableData"
    :border="parentBorder"
    :preserve-expanded-content="preserveExpanded"
    style="width: 100%"
  >
    <bk-table-column type="expand">
      <template #default="props">
        <div m="4">
          <p m="t-0 b-2">State: {{ props.row.state }}</p>
          <p m="t-0 b-2">City: {{ props.row.city }}</p>
          <p m="t-0 b-2">Address: {{ props.row.address }}</p>
          <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
          <h3>Family</h3>
          <bk-table :data="props.row.family" :border="childBorder">
            <bk-table-column label="Name" prop="name" />
            <bk-table-column label="State" prop="state" />
            <bk-table-column label="City" prop="city" />
            <bk-table-column label="Address" prop="address" />
            <bk-table-column label="Zip" prop="zip" />
          </bk-table>
        </div>
      </template>
    </bk-table-column>
    <bk-table-column label="Date" prop="date" />
    <bk-table-column label="Name" prop="name" />
  </bk-table>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const parentBorder = ref(false)
const childBorder = ref(false)
const preserveExpanded = ref(false)
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-08",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-06",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  },
  {
    date: "2016-05-07",
    name: "Tom",
    state: "California",
    city: "San Francisco",
    address: "3650 21st St, San Francisco",
    zip: "CA 94114",
    family: [
      {
        name: "Jerry",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Spike",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      },
      {
        name: "Tyke",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114"
      }
    ]
  }
]
</script>
