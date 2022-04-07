<script setup lang="ts">
  import { useMainStore } from "@/stores/main"
  import { mdiPower } from "@mdi/js"
  import { computed } from "vue"
  import IconMdi from "@/components/icons/IconMdi.vue"
  import Toggle from "@/components/layout/Toggle.vue"

  const mainStore = useMainStore()
  const arePluginsEnabled = computed(() => mainStore.arePluginsEnabled)

  const onToggleClick = () => {
    mainStore.setPluginsEnabled(!arePluginsEnabled.value)
  }
</script>

<template>
  <footer
    class="default-paddings flex justify-center items-center gap-4 flex-col md:flex-row">
    <span>All plugins enabled</span>
    <toggle :value="arePluginsEnabled" @click="onToggleClick" :height="38">
      <icon-mdi :icon="mdiPower" :size="25" stroke="transparent" />
    </toggle>
  </footer>
</template>

<style scoped lang="postcss"></style>
