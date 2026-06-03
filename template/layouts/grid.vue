<script setup>
import { useSlots, computed } from 'vue'
import { splitByHr } from '../composables/useSlotItems.js'

const slots = useSlots()
const items = computed(() => splitByHr(slots.items))

const cols = computed(() => {
  const n = items.value.length
  if (n <= 3) return n
  if (n === 4) return 2
  return 3
})
</script>

<template>
  <div class="slidev-layout grid">
    <div class="grid-header"><slot /></div>
    <div class="grid-body" :style="{ gridTemplateColumns: `repeat(${cols}, 1fr)` }">
      <div v-for="(item, i) in items" :key="i" class="cell">
        <div v-if="item.icon" class="cell-icon">
          <component :is="() => [item.icon]" />
        </div>
        <component :is="() => item.content" />
      </div>
    </div>
  </div>
</template>
