<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  type: { type: String, default: 'bar' },
  data: { type: Object, required: true },
  options: { type: Object, default: () => ({}) },
  width: { type: String, default: '100%' },
  height: { type: String, default: '100%' },
})

const canvas = ref(null)
let instance = null

const defaultOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: '#334155', font: { size: 14 } },
    },
  },
  scales: props.type !== 'pie' && props.type !== 'doughnut' ? {
    x: {
      ticks: { color: '#334155', font: { size: 13 } },
      grid: { color: '#e2e8f0' },
    },
    y: {
      ticks: { color: '#334155', font: { size: 13 } },
      grid: { color: '#e2e8f0' },
    },
  } : {},
  ...props.options,
}))

onMounted(() => {
  instance = new Chart(canvas.value, {
    type: props.type,
    data: props.data,
    options: defaultOptions.value,
  })
})

watch(() => props.data, (newData) => {
  if (instance) {
    instance.data = newData
    instance.update()
  }
}, { deep: true })

onUnmounted(() => {
  instance?.destroy()
})
</script>

<template>
  <div :style="{ width, height }">
    <canvas ref="canvas" />
  </div>
</template>
