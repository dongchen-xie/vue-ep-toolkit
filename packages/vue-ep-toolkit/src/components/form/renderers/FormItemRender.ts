import { defineComponent, h } from "vue"
import {
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElCheckbox,
  ElCheckboxGroup,
  ElRadio,
  ElRadioGroup,
  ElSwitch,
  ElDatePicker,
  ElTimePicker,
  ElSlider,
  ElRate,
  ElCascader,
  ElInputNumber,
  ElUpload,
  ElColorPicker,
  ElTransfer,
  ElAutocomplete,
  ElDivider,
  ElButton
} from "element-plus"
export default defineComponent({
  name: "EpFormItemRender",
  props: {
    item: { type: Object, required: true },
    model: { type: Object, required: true }
  },
  setup(props, { slots }) {
    const typeMap: Record<string, any> = {
      input: ElInput,
      select: ElSelect,
      checkbox: ElCheckbox,
      "checkbox-group": ElCheckboxGroup,
      radio: ElRadio,
      "radio-group": ElRadioGroup,
      switch: ElSwitch,
      "date-picker": ElDatePicker,
      "time-picker": ElTimePicker,
      slider: ElSlider,
      rate: ElRate,
      cascader: ElCascader,
      "input-number": ElInputNumber,
      upload: ElUpload,
      "color-picker": ElColorPicker,
      transfer: ElTransfer,
      autocomplete: ElAutocomplete,
      divider: ElDivider,
      button: ElButton
    }
    function render(item: any) {
      if (item.slot && slots[item.slot]) {
        return h(ElFormItem, { ...item, key: item.prop }, { default: () => slots[item.slot]?.() })
      }
      const Comp = typeMap[item.type] || item.type
      if (item.children && ["select", "checkbox-group", "radio-group"].includes(item.type)) {
        return h(
          ElFormItem,
          { ...item, key: item.prop },
          {
            default: () =>
              h(
                Comp,
                {
                  modelValue: props.model[item.prop],
                  "onUpdate:modelValue": (val: any) => (props.model[item.prop] = val),
                  ...(item.componentProps || {})
                },
                () =>
                  item.children.map((opt: any) => {
                    if (item.type === "select") {
                      return h(ElOption, {
                        key: opt.value,
                        label: opt.label,
                        value: opt.value,
                        ...(opt.componentProps || {})
                      })
                    } else if (item.type === "checkbox-group") {
                      return h(
                        ElCheckbox,
                        { key: opt.value, label: opt.value, ...(opt.componentProps || {}) },
                        () => opt.label
                      )
                    } else if (item.type === "radio-group") {
                      return h(
                        ElRadio,
                        { key: opt.value, label: opt.value, ...(opt.componentProps || {}) },
                        () => opt.label
                      )
                    }
                    return null
                  })
              )
          }
        )
      }
      if (item.children && item.type === "group") {
        return h(
          ElFormItem,
          { ...item, key: item.prop },
          {
            default: () => item.children.map((child: any) => render(child))
          }
        )
      }
      return h(
        ElFormItem,
        { ...item, key: item.prop },
        {
          default: () =>
            h(Comp, {
              modelValue: props.model[item.prop],
              "onUpdate:modelValue": (val: any) => (props.model[item.prop] = val),
              ...(item.componentProps || {})
            })
        }
      )
    }
    return () => render(props.item)
  }
})
