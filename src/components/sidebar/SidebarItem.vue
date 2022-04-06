<script setup lang="ts">
  import { RouterLink } from "vue-router"
  interface Props {
    link: string
  }

  defineProps<Props>()
</script>

<template>
  <li>
    <RouterLink :to="link" class="sidebar-item">
      <slot />
    </RouterLink>
  </li>
</template>

<style scoped lang="postcss">
  .sidebar-item {
    @apply flex justify-start items-center px-6 py-4 relative gap-4;
    @apply hover:bg-white transition-colors ease-in-out duration-200;

    &::before {
      content: "";
      @apply absolute top-0 left-0 h-full w-0;
      @apply bg-red-500;
      @apply transition-all ease-in-out duration-200;
    }

    &.router-link-active {
      @apply bg-white;

      &::before {
        @apply w-1;
      }
    }

    &:not(.router-link-active):hover {
      &::before {
        @apply w-2;
      }
    }
  }
</style>
