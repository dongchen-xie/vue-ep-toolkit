<!-- 
 @Author: Chen 
 @Description: 
 -->
<script setup lang="ts">
import { computed, ref } from "vue"
import { ElButton } from "element-plus"
import type { EpButtonProps } from "./types"
import Icon from "../icon/Icon.vue"

defineOptions({ name: "Button", inheritAttrs: false })

const props = defineProps<EpButtonProps>()

const buttonRef = ref<InstanceType<typeof ElButton>>()

const iconComponent = computed(() => {
  if (!props.icon) return ""
  if (typeof props.icon === "string") {
    return Icon
  }
  return props.icon
})

const iconProps = computed(() => {
  if (typeof props.icon === "string") {
    return { icon: props.icon }
  }
  return {}
})

defineExpose({ buttonRef })
</script>

<template>
  <el-button ref="buttonRef" v-bind="$attrs" :icon="iconComponent ? undefined : props.icon">
    <template v-if="iconComponent" #icon>
      <component :is="iconComponent" v-bind="iconProps" />
    </template>
    <slot />
  </el-button>
</template>

<style lang="scss" scoped>
.el-button :deep(span:empty) {
  margin-left: 0 !important;
}
</style>
