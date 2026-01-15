import { add, map, toNumber } from "lodash-es"
import type { BaselineConfig, EChartsOption, SparklineInternalProps, SeriesOption } from "../types"
import { formatNumber } from "../../../utils"

export const useBarTrend = (
  props: SparklineInternalProps,
  data: { name: string; value: number }[],
  baseline: BaselineConfig,
  isDetail: boolean = false
): EChartsOption => {
  const assistData: number[] = [0]
  let cumulative = toNumber(data[0]?.value || 0)
  for (let i = 1; i < data.length - 1; i++) {
    assistData.push(cumulative)
    cumulative = add(cumulative, toNumber(data[i]?.value || 0))
  }
  const series: SeriesOption[] = [
    {
      name: "assist",
      type: "bar",
      stack: "waterfall",
      itemStyle: { borderColor: "transparent", color: "transparent" },
      emphasis: { itemStyle: { borderColor: "transparent", color: "transparent" } },
      data: assistData
    },
    {
      name: "Perf",
      type: "bar",
      stack: "waterfall",
      data: data.map((v, index) => ({
        name: v.name,
        value: v.value,
        itemStyle: {
          color: index === data.length - 1 ? baseline.lineStyle?.color : props.color
        }
      })),
      label: {
        show: isDetail,
        formatter: (params: any) => formatNumber(params.value, props.valueFormat),
        position: "top"
      },
      barMaxWidth: 40
    }
  ]
  return {
    series,
    xAxis: {
      type: "category",
      show: true,
      data: map(data, "name"),
      axisLine: {
        lineStyle: {
          color: "#b0b0b0",
          width: 2
        }
      },
      axisLabel: {
        color: "#636363",
        fontSize: 12,
        show: isDetail
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      show: false,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    tooltip: {
      show: isDetail,
      trigger: "axis",
      axisPointer: {
        type: "line"
      },
      valueFormatter: (value: any) => formatNumber(value, props.valueFormat)
    }
  }
}
