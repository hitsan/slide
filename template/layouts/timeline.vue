<script setup>
import { useSlots, computed } from 'vue'
import { splitByHr } from '../composables/useSlotItems.js'

const slots = useSlots()
const steps = computed(() => splitByHr(slots.steps))
</script>

<template>
  <div class="slidev-layout timeline">
    <div class="timeline-header">
      <slot />
    </div>
    <div class="timeline-track">
      <template v-for="(step, i) in steps" :key="i">
        <div v-if="i > 0" class="timeline-arrow">→</div>
        <div class="timeline-step">
          <div class="step-badge">{{ i + 1 }}</div>
          <div class="step-card">
            <component :is="() => step.content" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
