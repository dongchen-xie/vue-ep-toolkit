<script setup lang="ts">
import { ref, computed, useAttrs } from "vue"
import { ElMenu, MenuInstance } from "element-plus"
import type { MenuProps as ElMenuProps } from "element-plus"
import { useMenu } from "./composables"
import type { MenuInternalProps } from "./types"

defineOptions({
  name: "BkMenu",
  inheritAttrs: false
})

const props = defineProps<MenuInternalProps>()
const attrs: Partial<ElMenuProps> = useAttrs()

const elMenuRef = ref<MenuInstance | null>(null)

const { menuItems, defaultActive } = useMenu(props)

const mergedAttrs = computed(() => {
  const mergedAttrs = { ...attrs }
  if (menuItems && defaultActive.value) {
    mergedAttrs["defaultActive"] = defaultActive.value
  }
  return mergedAttrs
})

defineExpose({ elMenuRef })
</script>

<template>
  <el-menu class="bk-menu" ref="elMenuRef" v-bind="mergedAttrs">
    <template v-if="menuItems">
      <component :is="item" v-for="(item, index) in menuItems" :key="item.key || index" />
    </template>
    <slot />
  </el-menu>
</template>
<style lang="scss">
.bk-menu {
  --el-sub-menu-bg-color: var(--el-menu-bg-color);
  --el-menu-active-bg-color: none;
  .el-sub-menu .el-menu {
    background-color: var(--el-sub-menu-bg-color);
  }
  .is-active:not(.el-sub-menu) {
    background-color: var(--el-menu-active-bg-color);
  }
}
</style>
