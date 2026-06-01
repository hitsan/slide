<template>
  <div class="slidev-layout two-col-icon">
    <div class="two-col-header">
      <slot />
    </div>
    <div class="two-col-grid">
      <div class="col">
        <div class="col-icon"><slot name="col1-icon" /></div>
        <slot name="col1" />
      </div>
      <div class="col">
        <div class="col-icon"><slot name="col2-icon" /></div>
        <slot name="col2" />
      </div>
    </div>
  </div>
</template>
