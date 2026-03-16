<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base"
  >
    <p class="space-x-4 font-semibold text-stone-300 sm:space-x-6">
      <span>{totalCartQuantity} pizzas</span>
      <span>{formatCurrency(totalCartPrice)}</span>
    </p>
    <RouterLink to="/cart">Open cart &rarr;</RouterLink>
  </div>
</template>
