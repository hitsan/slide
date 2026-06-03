<script setup>
import { useSlots, computed } from 'vue'
import { splitByHr } from '../composables/useSlotItems.js'

const slots = useSlots()
const items = computed(() => splitByHr(slots.items))
</script>

<template>
  <div class="slidev-layout cards">
    <div class="cards-header"><slot /></div>
    <div class="cards-grid">
      <div v-for="(item, i) in items" :key="i" class="card">
        <div v-if="item.icon" class="card-icon">
          <component :is="() => [item.icon]" />
        </div>
        <component :is="() => item.content" />
      </div>
    </div>
  </div>
</template>
