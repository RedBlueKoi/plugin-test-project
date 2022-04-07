<script setup lang="ts"></script>

<template>
  <div class="card"><slot /></div>
</template>

<style scoped lang="postcss">
  .card {
    @apply border-2 border-neutral-300 p-2 md:p-4 rounded-md;
  }
</style>
