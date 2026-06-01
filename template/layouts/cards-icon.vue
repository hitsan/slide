<template>
  <div class="slidev-layout cards-icon">
    <div class="cards-header">
      <slot />
    </div>
    <div class="cards-grid">
      <div class="card">
        <div class="card-icon"><slot name="card1-icon" /></div>
        <slot name="card1" />
      </div>
      <div class="card">
        <div class="card-icon"><slot name="card2-icon" /></div>
        <slot name="card2" />
      </div>
      <div class="card">
        <div class="card-icon"><slot name="card3-icon" /></div>
        <slot name="card3" />
      </div>
    </div>
  </div>
</template>
