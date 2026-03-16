<script setup>
import DeleteItem from '@/components/DeleteItem.vue'
import SharedButton from '@/components/SharedButton.vue'
import UpdateItemQuantity from '@/components/UpdateItemQuantity.vue'
import { formatCurrency } from '@/utils/helpers'
import { getMenu } from '@/services/apiRestaurant'
import { onMounted, ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const store = useCartStore()
const menu = ref([])

const isInCart = (id) => store.getCurrentQuantityById(id) > 0

onMounted(async () => {
  menu.value = await getMenu()
})

const handleAddToCart = ({ id, name, unitPrice }) => {
  const newItem = {
    pizzaId: id,
    name,
    quantity: 1,
    unitPrice,
    totalPrice: unitPrice * 1,
  }
  store.addItem(newItem)
}
</script>

<template>
  <ul class="divide-y divide-stone-200 px-2">
    {{
      console.log('render')
    }}
    <li v-for="(pizza, index) in menu" :key="index" class="flex gap-4 py-2">
      <img
        :src="pizza.imageUrl"
        :alt="pizza.name"
        :class="`h-24 ${pizza.soldOut ? 'opacity-70 grayscale' : ''}`"
      />
      <div class="flex grow flex-col pt-0.5">
        <p class="font-medium">{{ pizza.name }}</p>
        <p class="text-sm capitalize italic text-stone-500">
          {{ pizza.ingredients.join(', ') }}
        </p>
        <div class="mt-auto flex items-center justify-between">
          <p class="text-sm" v-if="!pizza.soldOut">{{ formatCurrency(pizza.unitPrice) }}</p>

          <p v-else class="text-sm font-medium uppercase text-stone-500">Sold out</p>

          <div v-if="isInCart(pizza.id)" class="flex items-center gap-3 sm:gap-8">
            <UpdateItemQuantity :pizzaId="pizza.id" />
            <DeleteItem :pizzaId="pizza.id" />
          </div>

          <SharedButton
            v-if="!pizza.soldOut && !isInCart(pizza.id)"
            type="small"
            @trigger="handleAddToCart(pizza)"
          >
            Add to cart
          </SharedButton>
        </div>
      </div>
    </li>
  </ul>
</template>
