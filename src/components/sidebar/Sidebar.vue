<script setup lang="ts">
  import IconMdi from "@/components/icons/IconMdi.vue"
  import SidebarItem from "./SidebarItem.vue"
  import { mdiFinance, mdiGrid, mdiAccount } from "@mdi/js"
  import SidebarFooter from "./SidebarFooter.vue"
</script>

<template>
  <aside class="app-sidebar bg-neutral-200">
    <header class="text-5xl px-6 py-8 flex justify-start items-center">
      DataGuard
    </header>
    <nav>
      <ul>
        <sidebar-item link="marketing">
          <icon-mdi :size="32" :icon="mdiGrid" />
          Marketing
        </sidebar-item>
        <sidebar-item link="finance">
          <icon-mdi :size="32" :icon="mdiFinance" />
          Finance
        </sidebar-item>
        <sidebar-item link="personnel">
          <icon-mdi :size="32" :icon="mdiAccount" />
          Personnel
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
