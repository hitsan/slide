<script setup>
import { useSlots, computed } from 'vue'
import { splitByHr } from '../composables/useSlotItems.js'

const slots = useSlots()
const items = computed(() => splitByHr(slots.items))
</script>

<template>
  <div class="slidev-layout grid2x2">
    <div class="grid-header"><slot /></div>
    <div class="grid2x2-grid">
      <div v-for="(item, i) in items" :key="i" class="cell">
        <div v-if="item.icon" class="cell-icon">
          <component :is="() => [item.icon]" />
        </div>
        <component :is="() => item.content" />
      </div>
    </div>
  </div>
</template>
