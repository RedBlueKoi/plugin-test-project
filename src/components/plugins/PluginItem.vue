<script setup lang="ts">
  import { computed, ref } from "vue"
  import AppCard from "@/components/layout/AppCard.vue"
  import Toggle from "@/components/layout/Toggle.vue"
  import { useMainStore } from "@/stores/main"
  import * as api from "@/api"
  import type Plugin from "@/types/Plugin"
  import type Tab from "@/types/Tab"

  interface Props {
    plugin: Plugin
    tab: Tab
  }
  const props = defineProps<Props>()
  const mainStore = useMainStore()
  const isLoading = ref(false)

  const arePluginsEnabled = computed(() => mainStore.arePluginsEnabled)
  const isPluginActive = computed(() =>
    props.tab.active.includes(props.plugin.title)
  )
  const isPluginDisabled = computed(() =>
    props.tab.disabled.includes(props.plugin.title)
  )
  const isDisabled = computed(
    () => !arePluginsEnabled.value || isPluginDisabled.value || isLoading.value
  )
  const label = computed(() => (isPluginActive.value ? "Allowed" : "Blocked"))

  const updateStatus = async () => {
    if (isDisabled.value) return
    isLoading.value = true
    const { tab, plugin } = props
    const newStatus = !isPluginActive.value
    const updatedTab: Tab = JSON.parse(JSON.stringify(tab))

    if (newStatus) {
      updatedTab.active.push(plugin.title)
      updatedTab.inactive = updatedTab.inactive.filter(
        (title) => title !== plugin.title
      )
    } else {
      updatedTab.inactive.push(plugin.title)
      updatedTab.active = updatedTab.active.filter(
        (title) => title !== plugin.title
      )
    }
    const response = await api.updateTab(updatedTab)
    if (response.data) mainStore.updateTab(updatedTab)
    isLoading.value = false
  }
</script>

<template>
  <app-card
    class="flex flex-col justify-between gap-2 transition-opacity duration-200 ease-in-out"
    :class="{ disabled: isDisabled }">
    <div
      class="flex justify-between items-start gap-2 md:gap-4 flex-col md:flex-row">
      <div class="text-lg">{{ plugin.title }}</div>
      <toggle
        :value="isPluginActive"
        :label="label"
        :height="20"
        @click="updateStatus"
        :disabled="isDisabled" />
    </div>
    <div class="text-neutral-500">{{ plugin.description }}</div>
  </app-card>
</template>

<style scoped lang="postcss">
  .disabled {
    @apply opacity-50;
  }
</style>
