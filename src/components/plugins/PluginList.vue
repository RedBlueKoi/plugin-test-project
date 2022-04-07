<script setup lang="ts">
  import type Plugin from "@/types/Plugin"
  import type Tab from "@/types/Tab"
  import PluginItem from "./PluginItem.vue"

  interface Props {
    plugins: Plugin[]
    tab: Tab
  }

  defineProps<Props>()
</script>

<template>
  <div class="list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <plugin-item
      v-for="plugin in plugins"
      :key="plugin.title"
      :tab="tab"
      :plugin="plugin" />
  </div>
</template>

<style scoped lang="postcss"></style>
