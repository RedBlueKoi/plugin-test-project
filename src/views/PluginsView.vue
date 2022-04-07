<script setup lang="ts">
  import PageHeader from "@/components/layout/PageHeader.vue"
  import PluginList from "@/components/plugins/PluginList.vue"
  import IconMdi from "@/components/icons/IconMdi.vue"
  import { mdiLoading } from "@mdi/js"
  import { computed, onMounted } from "vue"
  import { useMainStore } from "@/stores/main"
  import type Tab from "@/types/Tab"
  import * as api from "@/api"
  import router from "@/router"

  const mainStore = useMainStore()

  const plugins = computed(() => mainStore.plugins)
  const tabs = computed(() => mainStore.tabs)
  const currentTab = computed<Tab | undefined>(() => {
    const { slug } = router.currentRoute.value.params
    return tabs.value.find((tab) => tab.title.toLowerCase() === slug)
  })
  const heading = computed(
    () => `${currentTab.value?.title} Plugins` || "Plugins"
  )
  const tabPlugins = computed(() => {
    if (!currentTab.value) return plugins.value
    return plugins.value.filter((plugin) => {
      if (currentTab.value?.disabled.includes(plugin.title)) return true
      if (currentTab.value?.active.includes(plugin.title)) return true
      if (currentTab.value?.inactive.includes(plugin.title)) return true
      return false
    })
  })

  const getPlugins = async () => {
    const response = await api.getPlugins()
    mainStore.setPlugins(response.data)
  }

  onMounted(() => {
    getPlugins()
  })
</script>

<template>
  <div>
    <page-header :heading="heading" />
    <main
      class="default-paddings min-h-[100px] flex justify-center items-center">
      <plugin-list
        v-if="plugins.length && currentTab"
        :plugins="tabPlugins"
        :tab="currentTab" />
      <icon-mdi :icon="mdiLoading" class="animate-spin" v-else />
    </main>
  </div>
</template>

<style scoped lang="postcss"></style>
