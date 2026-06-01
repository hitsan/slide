<template>
  <div class="slidev-layout list-icon">
    <div class="list-header">
      <slot />
    </div>
    <div class="list-items">
      <div v-if="$slots['item1']" class="list-item">
        <div class="list-icon-wrap"><slot name="item1-icon" /></div>
        <div class="list-content"><slot name="item1" /></div>
      </div>
      <div v-if="$slots['item2']" class="list-item">
        <div class="list-icon-wrap"><slot name="item2-icon" /></div>
        <div class="list-content"><slot name="item2" /></div>
      </div>
      <div v-if="$slots['item3']" class="list-item">
        <div class="list-icon-wrap"><slot name="item3-icon" /></div>
        <div class="list-content"><slot name="item3" /></div>
      </div>
      <div v-if="$slots['item4']" class="list-item">
        <div class="list-icon-wrap"><slot name="item4-icon" /></div>
        <div class="list-content"><slot name="item4" /></div>
      </div>
      <div v-if="$slots['item5']" class="list-item">
        <div class="list-icon-wrap"><slot name="item5-icon" /></div>
        <div class="list-content"><slot name="item5" /></div>
      </div>
      <div v-if="$slots['item6']" class="list-item">
        <div class="list-icon-wrap"><slot name="item6-icon" /></div>
        <div class="list-content"><slot name="item6" /></div>
      </div>
    </div>
  </div>
</template>
