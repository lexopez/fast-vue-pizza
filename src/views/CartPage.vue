<script setup>
import { RouterLink } from 'vue-router'
import { cart } from '@/data/cart'
import SharedButton from '@/components/SharedButton.vue'
import UpdateItemQuantity from '@/components/UpdateItemQuantity.vue'
import DeleteItem from '@/components/DeleteItem.vue'
import { formatCurrency } from '@/utils/helpers'
import { useUserStore } from '@/stores/userStore'
import { useCartStore } from '@/stores/cartStore'
import EmptyCart from '@/components/EmptyCart.vue'
const userStore = useUserStore()
const cartStore = useCartStore()
</script>

<template>
  <div v-if="cartStore.cart.length" class="px-4 py-3">
    <RouterLink to="/menu">&larr; Back to menu</RouterLink>

    <h2 class="mt-7 text-xl font-semibold">Your cart, {{ userStore.username }}</h2>

    <ul class="mt-3 divide-y divide-stone-200 border-b">
      <li
        v-for="(item, index) in cartStore.cart"
        :key="index"
        className="py-3 sm:flex sm:items-center sm:justify-between"
      >
        <p className="mb-1 sm:mb-0">{{ item.quantity }}&times; {{ item.name }}</p>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="text-sm font-bold">{{ formatCurrency(item.totalPrice) }}</p>

          <UpdateItemQuantity :pizzaId="item.pizzaId" />
          <DeleteItem :pizzaId="item.pizzaId" />
        </div>
      </li>
    </ul>

    <div class="mt-6 space-x-2">
      <RouterLink to="/order/new">
        <SharedButton type="primary"> Order pizzas </SharedButton>
      </RouterLink>

      <SharedButton type="secondary" @trigger="cartStore.clearCart"> Clear cart </SharedButton>
    </div>
  </div>
  <EmptyCart v-else />
</template>
