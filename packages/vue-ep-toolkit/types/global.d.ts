import type { DefineComponent } from "vue"
import type {
  EpButtonProps,
  EpFormEmits,
  EpFormInstance,
  EpFormProps,
  EpIconProps,
  EpTableEmits,
  EpTableInstance,
  EpTableProps
} from "vue-ep-toolkit"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EpButton: DefineComponent<EpButtonProps, {}>
    EpForm: DefineComponent<EpFormProps, EpFormInstance, {}, {}, {}, {}, string, EpFormEmits>
    EpIcon: DefineComponent<EpIconProps, {}>
    EpTable: DefineComponent<EpTableProps, EpTableInstance, {}, {}, {}, {}, string, EpTableEmits>
  }
}
