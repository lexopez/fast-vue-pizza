<script setup>
import SharedButton from '@/components/SharedButton.vue'
import { cart } from '@/data/cart'
import { formatCurrency } from '@/utils/helpers'
</script>
<template>
  <div class="space-y-8 px-4 py-6">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <h2 class="text-xl font-semibold">Order #{id} status</h2>

      <div class="space-x-2">
        <span
          class="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50"
        >
          Priority
        </span>
        <span
          class="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50"
        >
          {status} order
        </span>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
      <p class="font-medium">Order should have arrived</p>
      <p class="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
    </div>

    <ul class="dive-stone-200 divide-y border-b border-t">
      <li v-for="(item, index) in cart" :key="index" class="space-y-1 py-3">
        <div class="flex items-center justify-between gap-4 text-sm">
          <p>
            <span class="font-bold">{{ item.quantity }}&times;</span> {{ item.name }}
          </p>
          <p class="font-bold">{{ formatCurrency(item.totalPrice) }}</p>
        </div>
        <p class="text-sm capitalize italic text-stone-500">
          {{ item.ingredients }}
        </p>
      </li>
    </ul>

    <div class="space-y-2 bg-stone-200 px-6 py-5">
      <p class="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>

      <p class="text-sm font-medium text-stone-600">Price priority: x</p>
      <p class="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
    </div>
    <div class="text-right">
      <SharedButton type="primary">Make priority</SharedButton>
    </div>
  </div>
</template>
