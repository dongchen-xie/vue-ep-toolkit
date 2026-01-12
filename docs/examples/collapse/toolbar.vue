<template>
  <div class="demo-collapse">
    <bk-collapse v-model="activeNames" @change="handleChange">
      <bk-collapse-item title="Data" name="1" show-export>
        <bk-table :raw-data="tableData">
          <bk-table-column prop="date" label="Date" width="180"> </bk-table-column>
          <bk-table-column prop="name" label="Name" width="180"> </bk-table-column>
          <bk-table-column prop="address" label="Address"> </bk-table-column>
        </bk-table>
      </bk-collapse-item>
      <bk-collapse-item title="Settings" name="2">
        <template #toolbar>
          <bk-icon
            icon="tabler:settings-check"
            size="30"
            @click.stop="event = 'Settings Check'"
          ></bk-icon>
          <bk-icon
            icon="tabler:settings-code"
            size="30"
            @click.stop="event = 'Settings Code'"
          ></bk-icon>
          <bk-icon
            icon="tabler:settings-exclamation"
            size="30"
            @click.stop="event = 'Settings Exclamation'"
          ></bk-icon>
        </template>
        {{ event }}
      </bk-collapse-item>
    </bk-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

import type { CollapseModelValue } from "vue-business-kit"

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
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
]

const activeNames = ref(["1"])
const event = ref("There are no click events for the time being")
const handleChange = (val: CollapseModelValue) => {
  console.log(val)
}
</script>
