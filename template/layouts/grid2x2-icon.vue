<template>
  <div class="slidev-layout grid2x2-icon">
    <div class="grid-header">
      <slot />
    </div>
    <div class="grid2x2-grid">
      <div class="cell">
        <div class="cell-icon"><slot name="card1-icon" /></div>
        <slot name="card1" />
      </div>
      <div class="cell">
        <div class="cell-icon"><slot name="card2-icon" /></div>
        <slot name="card2" />
      </div>
      <div class="cell">
        <div class="cell-icon"><slot name="card3-icon" /></div>
        <slot name="card3" />
      </div>
      <div class="cell">
        <div class="cell-icon"><slot name="card4-icon" /></div>
        <slot name="card4" />
      </div>
    </div>
  </div>
</template>
