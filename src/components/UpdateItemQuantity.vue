<script setup>
import { useCartStore } from '@/stores/cartStore'
import SharedButton from './SharedButton.vue'
defineProps({ pizzaId: Number })
const store = useCartStore()
</script>

<template>
  <div class="flex items-center gap-2 md:gap-3">
    <SharedButton type="round" @trigger="store.decreaseItemQuantity(pizzaId)"> - </SharedButton>
    <span class="text-sm font-medium">{{ store.getCurrentQuantityById(pizzaId) }}</span>
    <SharedButton type="round" @trigger="store.increaseItemQuantity(pizzaId)"> + </SharedButton>
  </div>
</template>
