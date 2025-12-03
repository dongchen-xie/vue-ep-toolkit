<template>
  <div class="button-example">
    <ep-button icon="tabler:search" circle />
    <ep-button type="primary" icon="tabler:edit" circle />
    <ep-button type="success" icon="tabler:check" circle />
    <ep-button type="info" icon="tabler:message" circle />
    <ep-button type="warning" icon="tabler:star" circle />
    <ep-button type="danger" icon="tabler:trash" circle />
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "basic"
})
</script>
<style scoped>
.button-example {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-example > * {
  margin: 0;
}
</style>
