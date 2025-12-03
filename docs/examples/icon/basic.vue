<template>
  <div class="icon-example">
    <ep-icon icon="tabler:number-1-small" size="50" />
    <ep-icon icon="tabler:number-2-small" size="50" />
    <ep-icon icon="tabler:number-3-small" size="50" />
    <ep-icon icon="tabler:number-4-small" size="50" />
    <ep-icon icon="tabler:number-5-small" size="50" />
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: "basic"
})
</script>
<style scoped>
.icon-example {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}
</style>
