<script setup>
import DeleteItem from '@/components/DeleteItem.vue'
import SharedButton from '@/components/SharedButton.vue'
import UpdateItemQuantity from '@/components/UpdateItemQuantity.vue'
import { data } from '@/data/data'
</script>

<template>
  <ul class="divide-y divide-stone-200 px-2">
    <li v-for="(pizza, index) in data" :key="index" class="flex gap-4 py-2">
      <img
        :src="pizza.imageUrl"
        :alt="pizza.name"
        :class="`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`"
      />
      <div class="flex grow flex-col pt-0.5">
        <p class="font-medium">{{ pizza.name }}</p>
        <p class="text-sm capitalize italic text-stone-500">
          {{ pizza.ingredients.join(', ') }}
        </p>
        <div class="mt-auto flex items-center justify-between">
          <p class="text-sm" v-if="!soldOut">{formatCurrency(unitPrice)}</p>

          <p v-else class="text-sm font-medium uppercase text-stone-500">Sold out</p>

          <div v-if="1 === 11" class="flex items-center gap-3 sm:gap-8">
            <UpdateItemQuantity />
            <DeleteItem />
          </div>

          <SharedButton type="small"> Add to cart </SharedButton>
        </div>
      </div>
    </li>
  </ul>
</template>
