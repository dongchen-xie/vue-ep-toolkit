<template>
  <div class="button-example">
    <div class="button-row">
      <ep-button disabled>Default</ep-button>
      <ep-button type="primary" disabled>Primary</ep-button>
      <ep-button type="success" disabled>Success</ep-button>
      <ep-button type="info" disabled>Info</ep-button>
      <ep-button type="warning" disabled>Warning</ep-button>
      <ep-button type="danger" disabled>Danger</ep-button>
    </div>

    <div class="button-row">
      <ep-button plain disabled>Plain</ep-button>
      <ep-button type="primary" plain disabled>Primary</ep-button>
      <ep-button type="success" plain disabled>Success</ep-button>
      <ep-button type="info" plain disabled>Info</ep-button>
      <ep-button type="warning" plain disabled>Warning</ep-button>
      <ep-button type="danger" plain disabled>Danger</ep-button>
    </div>
  </div>
</template>

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
