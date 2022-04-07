<script setup lang="ts">
  import { RouterView } from "vue-router"
  import Sidebar from "@/components/sidebar/Sidebar.vue"
  import { computed, onMounted } from "vue"
  import { useMainStore } from "./stores/main"
  import IconMdi from "@/components/icons/IconMdi.vue"
  import { mdiLoading } from "@mdi/js"
  import * as api from "@/api"

  const mainStore = useMainStore()

  const tabs = computed(() => mainStore.tabs)

  onMounted(async () => {
    const response = await api.getTabs()
    mainStore.setTabs(response.data)
  })
</script>

<template>
  <icon-mdi :icon="mdiLoading" class="animate-spin" v-if="!tabs.length" />
  <div class="app-layout" v-else>
    <sidebar />
    <RouterView />
  </div>
</template>

<style>
  @import "@/assets/base.css";

  .app-layout {
    @apply grid h-screen;

    grid-template-columns: min(350px, 50%) 1fr;
  }
</style>
