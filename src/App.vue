<template>
  <div class="bg-black h-screen text-gray-300">
    <Sidebar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
</script>

<style lang="scss" scoped>

</style>