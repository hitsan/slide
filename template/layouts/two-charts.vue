<template>
  <div class="slidev-layout two-charts">
    <div class="two-charts-header">
      <slot />
    </div>
    <div class="two-charts-body">
      <div class="two-charts-item">
        <slot name="chart1" />
      </div>
      <div class="two-charts-item">
        <slot name="chart2" />
      </div>
    </div>
  </div>
</template>
