<template>
  <div class="slidev-layout timeline">
    <div class="timeline-header">
      <slot />
    </div>
    <div class="timeline-track">
      <div v-if="$slots['step1']" class="timeline-step">
        <div class="step-badge">1</div>
        <div class="step-card"><slot name="step1" /></div>
      </div>
      <div v-if="$slots['step1'] && $slots['step2']" class="timeline-arrow">→</div>
      <div v-if="$slots['step2']" class="timeline-step">
        <div class="step-badge">2</div>
        <div class="step-card"><slot name="step2" /></div>
      </div>
      <div v-if="$slots['step2'] && $slots['step3']" class="timeline-arrow">→</div>
      <div v-if="$slots['step3']" class="timeline-step">
        <div class="step-badge">3</div>
        <div class="step-card"><slot name="step3" /></div>
      </div>
      <div v-if="$slots['step3'] && $slots['step4']" class="timeline-arrow">→</div>
      <div v-if="$slots['step4']" class="timeline-step">
        <div class="step-badge">4</div>
        <div class="step-card"><slot name="step4" /></div>
      </div>
      <div v-if="$slots['step4'] && $slots['step5']" class="timeline-arrow">→</div>
      <div v-if="$slots['step5']" class="timeline-step">
        <div class="step-badge">5</div>
        <div class="step-card"><slot name="step5" /></div>
      </div>
    </div>
  </div>
</template>
