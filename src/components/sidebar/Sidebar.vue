<script setup lang="ts">
  import { computed } from "vue"
  import IconMdi from "@/components/icons/IconMdi.vue"
  import SidebarItem from "./SidebarItem.vue"
  import SidebarFooter from "./SidebarFooter.vue"
  import { useMainStore } from "@/stores/main"

  const mainStore = useMainStore()

  const tabs = computed(() => mainStore.tabs)
</script>

<template>
  <aside class="app-sidebar bg-neutral-200">
    <header
      class="text-2xl md:text-5xl px-6 py-8 flex justify-start items-center">
      DataGuard
    </header>
    <nav>
      <ul v-if="tabs">
        <sidebar-item
          v-for="tab in tabs"
          :key="tab.title"
          :link="`${tab.title.toLowerCase()}`">
          <icon-mdi :size="32" :icon="tab.icon" />
          {{ tab.title }}
        </sidebar-item>
      </ul>
    </nav>
    <sidebar-footer />
  </aside>
</template>

<style scoped lang="postcss">
  .app-sidebar {
    @apply grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
