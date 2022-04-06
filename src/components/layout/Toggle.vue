<script setup lang="ts">
  import { computed } from "vue"

  interface Props {
    value: boolean
    height: number
    disabled?: boolean
    label?: string
  }
  const props = defineProps<Props>()
  const toggleGap = 3
  const toggleGapPx = computed(() => `${toggleGap}px`)
  const heightPx = computed(() => `${props.height}px`)
  const widthPx = computed(() => `${props.height * 2}px`)
  const knobSizePx = computed(() => {
    const knobSize = props.height - toggleGap * 2
    return `${knobSize}px`
  })
</script>

<template>
  <div class="toggle-container flex flex-col justify-center items-center">
    <div
      class="toggle"
      :class="{ 'toggle-active': value, 'cursor-pointer': !disabled }">
      <div class="knob">
        <slot />
      </div>
    </div>
    <span v-if="label" class="label">{{ label }}</span>
  </div>
</template>

<style scoped lang="postcss">
  .toggle {
    @apply bg-red-400 text-red-400 rounded-3xl;
    @apply transition-colors ease-in-out duration-200;
    @apply relative;

    height: v-bind(heightPx);
    width: v-bind(widthPx);

    .knob {
      @apply absolute flex justify-center items-center;
      @apply bg-white rounded-full;
      @apply transition-all duration-200 ease-in-out;
      height: v-bind(knobSizePx);
      width: v-bind(knobSizePx);

      top: v-bind(toggleGapPx);
      left: v-bind(toggleGapPx);
    }

    &.toggle-active {
      @apply bg-green-400 text-green-400;

      .knob {
        left: calc(100% - v-bind(knobSizePx) - v-bind(toggleGapPx));
      }
    }
  }
  .label {
    @apply text-red-400;
  }
  .toggle-active + .label {
    @apply text-green-400;
  }
</style>
