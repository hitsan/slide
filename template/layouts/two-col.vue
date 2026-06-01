<template>
  <div class="slidev-layout two-col">
    <div class="two-col-header">
      <slot />
    </div>
    <div class="two-col-grid">
      <div class="col">
        <slot name="col1" />
      </div>
      <div class="col">
        <slot name="col2" />
      </div>
    </div>
  </div>
</template>
