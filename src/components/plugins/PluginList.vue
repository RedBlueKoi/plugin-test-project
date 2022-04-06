<script setup lang="ts">
  import PluginItem from "./PluginItem.vue"
  import { Plugins } from "@/mock/Plugins"
</script>

<template>
  <div class="list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <plugin-item
      v-for="(plugin, index) in Plugins"
      :key="index"
      :plugin="plugin" />
  </div>
</template>

<style scoped lang="postcss"></style>
