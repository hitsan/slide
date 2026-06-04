<script setup>
import { useSlots, computed } from 'vue'
import { splitByHr } from '../composables/useSlotItems.js'

const slots = useSlots()
const items = computed(() => splitByHr(slots.items))
</script>

<template>
  <div class="slidev-layout list">
    <slot />
    <div class="list-items">
      <div v-for="(item, i) in items" :key="i" class="list-item" :class="{ 'has-icon': !!item.icon }">
        <template v-if="item.icon">
          <div class="list-left">
            <component :is="() => item.heading ? [item.heading] : []" />
            <div class="list-icon-wrap">
              <component :is="() => [item.icon]" />
            </div>
          </div>
          <div class="list-content">
            <component :is="() => item.body" />
          </div>
        </template>
        <template v-else>
          <div class="list-content">
            <component :is="() => item.content" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
