<script setup lang="ts">
  import { RouterView } from "vue-router"
  import Sidebar from "@/components/sidebar/Sidebar.vue"
</script>

<template>
  <div class="app-layout">
    <sidebar />
    <RouterView />
  </div>
</template>

<style>
  @import "@/assets/base.css";

  .app-layout {
    @apply grid h-screen;

    grid-template-columns: 350px 1fr;
  }
</style>
