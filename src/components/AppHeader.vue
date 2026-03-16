<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SearchOrder from './SearchOrder.vue'
import { useUserStore } from '@/stores/userStore'
const store = useUserStore()
</script>
<template>
  <header
    class="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6"
  >
    <RouterLink to="/" class="tracking-widest"> Fast React Pizza Co. </RouterLink>

    <SearchOrder />
    <div class="hidden text-sm font-semibold md:block">{{ store.username }}</div>
  </header>
</template>
