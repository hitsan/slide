<script setup>
import { useSlideContext } from '@slidev/client'
const { $slidev } = useSlideContext()
</script>

<template>
  <div v-if="$slidev.nav.currentSlideNo > 1" class="page-number">
    {{ $slidev.nav.currentSlideNo }}
  </div>
</template>

<style scoped>
.page-number {
  position: absolute;
  bottom: 1.2rem;
  right: 1.5rem;
  font-size: 0.8rem;
  color: #94a3b8;
  font-family: var(--slidev-font-sans, sans-serif);
  letter-spacing: 0.05em;
  pointer-events: none;
  z-index: 10;
}
</style>
