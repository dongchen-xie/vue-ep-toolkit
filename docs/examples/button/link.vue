<template>
  <p>Basic link button</p>
  <div class="mb-4">
    <bk-button v-for="button in buttons" :key="button.text" :type="button.type" link>
      {{ button.text }}
    </bk-button>
  </div>

  <p>Disabled link button</p>
  <div>
    <bk-button v-for="button in buttons" :key="button.text" :type="button.type" link disabled>
      {{ button.text }}
    </bk-button>
  </div>
</template>

<script setup lang="ts">
const buttons = [
  { type: "", text: "plain" },
  { type: "primary", text: "primary" },
  { type: "success", text: "success" },
  { type: "info", text: "info" },
  { type: "warning", text: "warning" },
  { type: "danger", text: "danger" }
] as const
</script>
