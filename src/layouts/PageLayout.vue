<template>
  <div class="layout">
    <SideMenu />
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import SideMenu from "@/menus/SideMenu.vue";
</script>
<style scoped>
.layout {
  @apply grid gap-8;

  grid-template-columns: 18.5rem 1fr;
}
</style>
