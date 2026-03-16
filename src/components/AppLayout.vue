<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './AppHeader.vue'
import CartOverview from './CartOverview.vue'
</script>

<template>
  <div class="grid h-screen grid-rows-[auto_1fr_auto]">
    <AppHeader />

    <div class="overflow-scroll">
      <main class="mx-auto max-w-3xl">
        <RouterView />
      </main>
    </div>

    <CartOverview />
  </div>
</template>
