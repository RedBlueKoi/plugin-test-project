<script setup lang="ts">
  interface Props {
    heading: string
  }
  defineProps<Props>()
</script>

<template>
  <header class="default-paddings">
    <h1 class="flex justify-start items-center gap-4 text-2xl">
      {{ heading }}
    </h1>
    <slot />
  </header>
</template>

<style scoped lang="postcss"></style>
