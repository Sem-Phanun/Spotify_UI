<template>
  <div class="bg-gray-800 h-screen text-gray-300 flex">
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