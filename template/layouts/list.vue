<script setup>
import { useSlots, computed } from 'vue'
import { splitByHr } from '../composables/useSlotItems.js'

const slots = useSlots()
const items = computed(() => splitByHr(slots.items))
</script>

<template>
  <div class="slidev-layout list">
    <div class="list-header"><slot /></div>
    <div class="list-items">
      <div v-for="(item, i) in items" :key="i" class="list-item">
        <div v-if="item.icon" class="list-icon-wrap">
          <component :is="() => [item.icon]" />
        </div>
        <div class="list-content">
          <component :is="() => item.content" />
        </div>
      </div>
    </div>
  </div>
</template>
