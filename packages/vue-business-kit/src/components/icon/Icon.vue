<script setup lang="ts">
import { computed, ref } from "vue"
import { ElIcon } from "element-plus"
import type { IconInstance } from "element-plus"
import type { IconInternalProps } from "./types"

defineOptions({
  name: "Icon",
  inheritAttrs: false
})

const props = defineProps<IconInternalProps>()

const elIconRef = ref<IconInstance | null>(null)

const iconClass = computed(() => {
  return props.icon ? (props.icon.startsWith("i-") ? props.icon : `i-${props.icon}`) : undefined
})

defineExpose({ elIconRef })
</script>

<template>
  <el-icon class="bk-icon" ref="elIconRef" v-bind="$attrs">
    <div v-if="iconClass" :class="iconClass" />
    <slot v-else />
  </el-icon>
</template>
