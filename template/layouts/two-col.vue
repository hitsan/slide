<script setup>
import { useSlots, computed } from 'vue'
import { splitByHr } from '../composables/useSlotItems.js'

const slots = useSlots()
const cols = computed(() => splitByHr(slots.cols))
</script>

<template>
  <div class="slidev-layout two-col">
    <slot />
    <div class="two-col-grid">
      <div v-for="(col, i) in cols" :key="i" class="col">
        <div v-if="col.icon" class="col-icon">
          <component :is="() => [col.icon]" />
        </div>
        <component :is="() => col.content" />
      </div>
    </div>
  </div>
</template>
