<script setup>
import { RouterLink } from 'vue-router'
import { cart } from '@/data/cart'
import SharedButton from '@/components/SharedButton.vue'
import UpdateItemQuantity from '@/components/UpdateItemQuantity.vue'
import DeleteItem from '@/components/DeleteItem.vue'
import { formatCurrency } from '@/utils/helpers'
</script>

<template>
  <div class="px-4 py-3">
    <RouterLink to="/menu">&larr; Back to menu</RouterLink>

    <h2 class="mt-7 text-xl font-semibold">Your cart, {username}</h2>

    <ul class="mt-3 divide-y divide-stone-200 border-b">
      <li
        v-for="(item, index) in cart"
        :key="index"
        className="py-3 sm:flex sm:items-center sm:justify-between"
      >
        <p className="mb-1 sm:mb-0">{{ item.quantity }}&times; {{ item.name }}</p>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="text-sm font-bold">{{ formatCurrency(item.totalPrice) }}</p>

          <UpdateItemQuantity />
          <DeleteItem />
        </div>
      </li>
    </ul>

    <div class="mt-6 space-x-2">
      <SharedButton to="/order/new" type="primary"> Order pizzas </SharedButton>

      <SharedButton type="secondary"> Clear cart </SharedButton>
    </div>
  </div>
</template>
