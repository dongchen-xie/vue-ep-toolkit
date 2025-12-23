<script setup lang="ts">
import { computed } from "vue"
import { ElIcon } from "element-plus"
import type { BkIconInternalProps } from "./types"

defineOptions({
  name: "BkIcon",
  inheritAttrs: false
})

const props = defineProps<BkIconInternalProps>()

const iconClass = computed(() => {
  return props.icon ? (props.icon.startsWith("i-") ? props.icon : `i-${props.icon}`) : undefined
})
</script>

<template>
  <el-icon v-bind="$attrs">
    <div v-if="iconClass" :class="iconClass" />
    <slot v-else />
  </el-icon>
</template>
