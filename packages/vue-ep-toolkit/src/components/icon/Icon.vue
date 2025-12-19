<script setup lang="ts">
import { computed } from "vue"
import { ElIcon } from "element-plus"
import type { EpIconInternalProps } from "./types"

defineOptions({
  name: "EpIcon",
  inheritAttrs: false
})

const props = defineProps<EpIconInternalProps>()

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
