import { isNumber, subtract } from "lodash-es"
import type { BaselineConfig, EChartsOption, SparklineInternalProps, SeriesOption } from "../types"

export const useBarStick = (
  _props: SparklineInternalProps,
  data: { name: string; value: number }[],
  baseline: BaselineConfig,
  isDetail: boolean = false
): EChartsOption => {
  const processedData = data!.map((val) => ({
    ...val,
    value: subtract(val.value, baseline.value)
  }))

  const series: SeriesOption[] = [
    {
      type: "line",
      data: Array(processedData.length).fill(0),
      symbol: "none",
      lineStyle: {
        color: "#f0f0f0",
        width: 1,
        ...baseline.lineStyle
      }
    },
    {
      type: "bar",
      data: processedData,
      barWidth: 5,
      itemStyle: {
        color: "#d9d9d9"
      },
      label: { show: false }
    }
  ]

  const max = Math.max(
    ...data!.map((item) => {
      const value = isNumber(item) ? item : item.value
      return Math.abs(value)
    })
  )
  const yAxis = {
    min: -max,
    max
  }
  return {
    series,
    yAxis
  }
}
