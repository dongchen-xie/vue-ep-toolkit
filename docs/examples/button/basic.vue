<template>
  <div class="button-example">
    <div class="button-row">
      <ep-button>Default</ep-button>
      <ep-button type="primary">Primary</ep-button>
      <ep-button type="success">Success</ep-button>
      <ep-button type="info">Info</ep-button>
      <ep-button type="warning">Warning</ep-button>
      <ep-button type="danger">Danger</ep-button>
    </div>

    <div class="button-row">
      <ep-button plain>Plain</ep-button>
      <ep-button type="primary" plain>Primary</ep-button>
      <ep-button type="success" plain>Success</ep-button>
      <ep-button type="info" plain>Info</ep-button>
      <ep-button type="warning" plain>Warning</ep-button>
      <ep-button type="danger" plain>Danger</ep-button>
    </div>

    <div class="button-row">
      <ep-button round>Round</ep-button>
      <ep-button type="primary" round>Primary</ep-button>
      <ep-button type="success" round>Success</ep-button>
      <ep-button type="info" round>Info</ep-button>
      <ep-button type="warning" round>Warning</ep-button>
      <ep-button type="danger" round>Danger</ep-button>
    </div>

    <div class="button-row">
      <ep-button icon="tabler:search" circle />
      <ep-button type="primary" icon="tabler:edit" circle />
      <ep-button type="success" icon="tabler:check" circle />
      <ep-button type="info" icon="tabler:message" circle />
      <ep-button type="warning" icon="tabler:star" circle />
      <ep-button type="danger" icon="tabler:trash" circle />
    </div>
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
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-row > * {
  margin: 0;
}
</style>
