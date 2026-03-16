<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { RouterLink, useRoute } from 'vue-router'
import { formatCurrency } from '@/utils/helpers'
const store = useCartStore()
const route = useRoute()
</script>

<template>
  <div
    class="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base"
  >
    <p class="space-x-4 font-semibold text-stone-300 sm:space-x-6">
      <span>{{ store.getTotalCartQuantity }} pizzas</span>
      <span>{{ formatCurrency(store.getTotalCartPrice) }}</span>
    </p>
    <RouterLink v-if="route.path !== '/cart'" to="/cart">Open cart &rarr;</RouterLink>
  </div>
</template>
