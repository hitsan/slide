<template>
  <div class="slidev-layout cards">
    <div class="cards-header">
      <slot />
    </div>
    <div class="cards-grid">
      <div class="card">
        <slot name="card1" />
      </div>
      <div class="card">
        <slot name="card2" />
      </div>
      <div class="card">
        <slot name="card3" />
      </div>
    </div>
  </div>
</template>
