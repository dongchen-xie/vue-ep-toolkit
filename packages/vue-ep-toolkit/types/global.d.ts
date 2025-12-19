import type { DefineComponent } from "vue"
import type {
  EpTableProps,
  EpTableEmits,
  EpTableInstance,
  EpButtonProps,
  EpIconProps,
  EpFormProps,
  EpFormEmits,
  EpFormInstance
} from "../src/components"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EpTable: DefineComponent<EpTableProps, EpTableInstance, {}, {}, {}, {}, string, EpTableEmits>
    EpButton: DefineComponent<EpButtonProps>
    EpIcon: DefineComponent<EpIconProps>
    EpForm: DefineComponent<EpFormProps, EpFormInstance, {}, {}, {}, {}, string, EpFormEmits>
  }
}
