<template>
  <div class="slidev-layout grid2x2">
    <div class="grid-header">
      <slot />
    </div>
    <div class="grid2x2-grid">
      <div class="cell">
        <slot name="card1" />
      </div>
      <div class="cell">
        <slot name="card2" />
      </div>
      <div class="cell">
        <slot name="card3" />
      </div>
      <div class="cell">
        <slot name="card4" />
      </div>
    </div>
  </div>
</template>
