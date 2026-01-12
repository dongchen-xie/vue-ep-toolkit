<script lang="ts" setup>
import { ElCollapseItem } from "element-plus"
import type { CollapseItemProps as ElCollapseItemProps } from "element-plus"
import { computed, h, ref, useAttrs } from "vue"
import type { CollapseItemInternalProps } from "./types"
import { exportDomToExcel } from "../../utils"
import { BkIcon } from "../"
import { CollapseItemInstance as ElCollapseItemInstance } from "element-plus/lib/components/index.js"
defineOptions({
  name: "CollapseItem",
  inheritAttrs: false
})

const props = defineProps<CollapseItemInternalProps>()

const attrs: Partial<ElCollapseItemProps> = useAttrs()

const elCollapseItemRef = ref<ElCollapseItemInstance | null>(null)

const iconComponent = computed(() => {
  if (!props.icon) return undefined
  if (typeof props.icon === "string") {
    return h(BkIcon, { icon: props.icon, color: props.iconColor, size: props.iconSize })
  }
  return props.icon
})

const handleExport = () => {
  if (props.onExport) props.onExport()
  else {
    const tableDom = elCollapseItemRef.value?.$el.querySelector(".el-table__inner-wrapper")
    const title = props.title ? `${props.title}-` : ""
    const subtitle = props.subtitle ? `${props.subtitle}-` : ""
    exportDomToExcel(tableDom, `${title}${subtitle}${new Date().getTime()}`)
  }
}

defineExpose({ elCollapseItemRef })
</script>

<template>
  <el-collapse-item class="bk-collapse" ref="elCollapseItemRef" v-bind="attrs">
    <template #title="{ isActive }">
      <div>
        <div class="bk-collapse-title">{{ title }}</div>
        <div class="bk-collapse-subtitle">{{ subtitle }}</div>
      </div>
      <slot name="title" v-bind="{ isActive }"></slot>
    </template>
    <template #icon="{ isActive }">
      <div class="bk-collapse-toolbar-container">
        <slot name="toolbar"></slot>
        <bk-icon
          title="Export to Excel"
          icon="tabler:file-download"
          :color="iconColor"
          :size="iconSize"
          v-if="showExport"
          @click.stop="handleExport"
        />
        <slot name="icon" v-bind="{ isActive }" v-if="$slots.icon"></slot>
        <component v-else-if="iconComponent" :is="iconComponent" :size="16"></component>
        <bk-icon
          v-else
          :title="isActive ? 'Hide' : 'Show'"
          :icon="isActive ? 'tabler:chevron-up' : 'tabler:chevron-down'"
          :color="iconColor"
          :size="iconSize"
        />
      </div>
    </template>
    <slot />
  </el-collapse-item>
</template>
<style lang="scss" scoped>
.bk-collapse {
  &-title {
    line-height: 28px;
  }
  &-subtitle {
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    color: #636363;
  }
  &-toolbar-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
}
</style>
