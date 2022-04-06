<script setup lang="ts">
  import { computed } from "vue"
  import type { Plugin } from "@/types/Plugin"
  import AppCard from "@/components/layout/AppCard.vue"
  import Toggle from "@/components/layout/Toggle.vue"
  import { useMainStore } from "@/stores/main"

  interface Props {
    plugin: Plugin
  }
  const props = defineProps<Props>()
  const mainStore = useMainStore()

  const arePluginsEnabled = computed(() => mainStore.arePluginsEnabled)
  const isDisabled = computed(
    () => !arePluginsEnabled.value || props.plugin.disabled
  )
  const label = computed(() => (props.plugin.allowed ? "Allowed" : "Blocked"))
</script>

<template>
  <app-card
    class="flex flex-col justify-between gap-2 transition-opacity duration-200 ease-in-out"
    :class="{ disabled: isDisabled }">
    <div class="flex justify-between items-start gap-4">
      <div class="text-lg">{{ plugin.name }}</div>
      <toggle
        :value="plugin.allowed"
        :label="label"
        :height="20"
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
