<script setup>
import { useSlots, computed } from 'vue'
import { splitByHr } from '../composables/useSlotItems.js'

const slots = useSlots()
const cols = computed(() => splitByHr(slots.cols))
</script>

<template>
  <div class="slidev-layout compare">
    <div class="compare-header"><slot /></div>
    <div class="compare-cols">
      <div v-for="(col, i) in cols" :key="i" class="compare-col">
        <component :is="() => col.content" />
      </div>
    </div>
    <div v-if="slots.bottom" class="compare-bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>
