<template>
  <div class="slidev-layout two-images">
    <div class="two-images-header">
      <slot />
    </div>
    <div class="two-images-body">
      <div class="two-images-item">
        <slot name="image1" />
      </div>
      <div class="two-images-item">
        <slot name="image2" />
      </div>
    </div>
  </div>
</template>
