<script setup lang="ts">
  import PageHeader from "@/components/layout/PageHeader.vue"
  import PluginList from "@/components/plugins/PluginList.vue"
</script>

<template>
  <div>
    <page-header heading="Marketing Plugins"></page-header>
    <main class="page-content default-paddings">
      <plugin-list />
    </main>
  </div>
</template>

<style scoped lang="postcss"></style>
