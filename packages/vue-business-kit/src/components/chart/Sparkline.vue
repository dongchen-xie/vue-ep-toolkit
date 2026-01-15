<script setup lang="ts">
import { computed, ref } from "vue"
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { LineChart } from "echarts/charts"
import { TitleComponent, TooltipComponent, GridComponent } from "echarts/components"
import VChart from "vue-echarts"
import { formatNumber } from "../../utils"
import type { FormatNumberOptions } from "../../utils"
import type { SparklineInternalProps } from "./types"
import type { EChartsOption } from "echarts"
import { has, isArray, isNumber, isObject } from "lodash-es"
import { BkIcon, BkDialog } from "../"
import { useLineTrend, useBarTrend, useBarStick } from "./composables"

use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, GridComponent])

defineOptions({
  name: "Sparkline",
  inheritAttrs: false
})

const props = withDefaults(defineProps<SparklineInternalProps>(), {
  layout: "vertical",
  showChart: true,
  showDetail: false,
  animation: true,
  smooth: true,
  color: "#409eff",
  autoresize: true
})

const showDetail = ref(false)

const useChartOption = (isDetail: boolean) => {
  if (!props.showChart || !props.data) return undefined
  const data = (props.data || []).map((v, index) => {
    return isObject(v) ? v : { name: String(index), value: v }
  }) as { name: string; value: number }[]
  const baseline: any = props.baseline
    ? isArray(props.baseline)
      ? props.baseline.map((v) => (isObject(v) ? v : { value: v }))
      : isObject(props.baseline)
      ? props.baseline
      : { value: props.baseline }
    : []

  let options: EChartsOption = {}

  switch (props.chartType) {
    case "line-trend":
      options = useLineTrend(props, data, baseline, isDetail)
      break
    case "bar-trend":
      options = useBarTrend(props, data, baseline, isDetail)
      break
    case "bar-stick":
      options = useBarStick(props, data, baseline, isDetail)
      break
  }

  return {
    animation: props.animation,
    grid: {
      top: 3,
      left: 3,
      right: 3,
      bottom: 3,
      ...props.config?.grid
    },
    ...options
  } as EChartsOption
}

const chartOption = computed<EChartsOption | undefined>(() => useChartOption(false))

const detailChartOption = computed<EChartsOption | undefined>(() => useChartOption(true))
const chartHeight = computed(() => {
  return isNumber(props.chartHeight) ? `${props.chartHeight}px` : props.chartHeight
})

const chartWidth = computed(() => {
  return isNumber(props.chartWidth) ? `${props.chartWidth}px` : props.chartWidth
})
</script>

<template>
  <div class="bk-sparkline" :class="`bk-sparkline--${layout}`" @dblclick="showDetail = true">
    <div class="bk-sparkline-main">
      <div v-if="title || subtitle" class="bk-sparkline-titles">
        <h3 class="bk-sparkline-title">{{ title }}</h3>
        <p class="bk-sparkline-subtitle">{{ subtitle }}</p>
      </div>

      <div class="bk-sparkline-value">
        <span class="bk-sparkline-value-main">
          {{ formatNumber(value as number | string, valueFormat) }}
        </span>
        <span v-if="subvalue" class="bk-sparkline-value-subvalue">
          ({{
            formatNumber(
              isObject(subvalue) ? subvalue.value : subvalue,
              isObject(subvalue) ? subvalue.valueFormat : valueFormat
            )
          }})
        </span>
      </div>

      <div class="bk-sparkline-footer">
        <span
          v-if="trend"
          class="bk-sparkline-trend"
          :style="{ color: isObject(trend) ? trend.color : color }"
        >
          {{
            formatNumber(
              isObject(trend) ? trend.value : trend,
              (has(trend, "valueFormat") ? trend.valueFormat : valueFormat) as FormatNumberOptions
            )
          }}
          <bk-icon :icon="(trend.icon as string)" v-if="has(trend, 'icon')" size="14" />
        </span>
        <span v-if="description" class="bk-sparkline-description">
          {{ description }}
        </span>
      </div>
    </div>
    <v-chart
      v-if="showChart"
      class="bk-sparkline-chart"
      :style="{
        height: chartHeight,
        width: chartWidth
      }"
      :option="chartOption"
      v-bind="$attrs"
    >
    </v-chart>
    <bk-dialog width="56%" v-model="showDetail" v-if="showChart && props.showDetail">
      <template #title>
        <div class="flex-1">
          <div class="text-20px">{{ detailTitle || title }}</div>
          <div class="text-[var(--dell-gray-800)] text-14px lh-20px">{{ subtitle }}</div>
        </div>
      </template>
      <v-chart
        :style="{
          height: '27vh',
          width: '53.8vw'
        }"
        :option="detailChartOption"
        v-bind="$attrs"
      >
      </v-chart>
    </bk-dialog>
  </div>
</template>

<style lang="scss" scoped>
.bk-sparkline {
  width: 100%;
  display: flex;
  gap: 12px;

  &--vertical {
    flex-direction: column;
    gap: 8px;
    position: relative;

    .bk-sparkline-main {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 2;
    }

    .bk-sparkline-chart {
      position: absolute;
      z-index: 1;
    }
  }

  &--horizontal {
    flex-direction: row;
    align-items: center;

    .bk-sparkline-main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    // .bk-sparkline-chart {
    // }
  }

  &-titles {
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: var(--el-text-color-regular);
  }

  &-subtitle {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    color: var(--el-text-color-regular);
  }

  &-value {
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding-top: 4px;
  }

  &-value-main {
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  &-value-subvalue {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.5%;
    color: var(--el-text-color-primary);
  }

  &-footer {
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 20px;
    font-size: 12px;
    font-weight: bold;
    color: var(--el-text-color-regular);
  }

  &-trend {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}
</style>
