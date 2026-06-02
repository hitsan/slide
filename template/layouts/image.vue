<template>
  <div class="slidev-layout image">
    <div class="image-header">
      <slot />
    </div>
    <div class="image-body">
      <div class="image-figure">
        <slot name="image" />
      </div>
      <div class="image-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
