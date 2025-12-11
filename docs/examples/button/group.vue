<template>
  <el-button-group class="mb-4">
    <ep-button type="primary" icon="tabler:chevron-left">Previous Page</ep-button>
    <ep-button type="primary">
      Next Page<ep-icon class="el-icon--right" icon="tabler:chevron-right" />
    </ep-button>
  </el-button-group>
  <br />
  <el-radio-group v-model="direction" class="mb-2">
    <el-radio value="horizontal">Horizontal</el-radio>
    <el-radio value="vertical">Vertical</el-radio>
  </el-radio-group>
  <br />

  <el-button-group :direction="direction">
    <ep-button type="primary" icon="tabler:smart-home" />
    <ep-button type="primary" icon="tabler:adjustments-horizontal" />
    <ep-button type="primary" icon="tabler:notification" />
  </el-button-group>
</template>

<script setup lang="ts">
import { ref } from "vue"

const direction = ref<"horizontal" | "vertical">("horizontal")
</script>
