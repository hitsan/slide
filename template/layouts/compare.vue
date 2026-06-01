<template>
  <div class="slidev-layout compare">
    <div class="compare-header">
      <slot />
    </div>
    <div class="compare-cols">
      <div class="compare-col">
        <slot name="col1" />
      </div>
      <div class="compare-col">
        <slot name="col2" />
      </div>
    </div>
    <div v-if="$slots['bottom']" class="compare-bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>
