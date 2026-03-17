<script setup>
import SharedButton from '@/components/SharedButton.vue'
import { getMenu, getOrder, updateOrder } from '@/services/apiRestaurant'
import { calcMinutesLeft, formatCurrency, formatDate } from '@/utils/helpers'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const order = ref(null)
const ingredients = ref(null)
const deliveryIn = computed(() => calcMinutesLeft(order.value.estimatedDelivery))
onMounted(async () => {
  order.value = await getOrder(route.params.orderID)
  const menu = await getMenu()

  ingredients.value = order.value.cart.map(
    (obj) => menu.find((el) => el.id === obj.pizzaId).ingredients ?? [],
  )
})

const handlePriority = async () =>
  (order.value = await updateOrder(route.params.orderID, { priority: true }))
</script>
<template>
  <div class="space-y-8 px-4 py-6" v-if="order">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <h2 class="text-xl font-semibold">Order #{{ order.id }} status</h2>

      <div class="space-x-2">
        <span
          v-if="order.priority"
          class="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50"
        >
          Priority
        </span>
        <span
          class="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50"
        >
          {{ order.status }} order
        </span>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
      <p class="font-medium">
        {{
          deliveryIn >= 0
            ? `Only ${calcMinutesLeft(order.estimatedDelivery)} minutes left`
            : 'Order should have arrived'
        }}
      </p>
      <p class="text-xs text-stone-500">
        (Estimated delivery: {{ formatDate(order.estimatedDelivery) }})
      </p>
    </div>

    <ul class="dive-stone-200 divide-y border-b border-t">
      <li v-for="(item, index) in order.cart" :key="index" class="space-y-1 py-3">
        <div class="flex items-center justify-between gap-4 text-sm">
          <p>
            <span class="font-bold">{{ item.quantity }}&times;</span> {{ item.name }}
          </p>
          <p class="font-bold">{{ formatCurrency(item.totalPrice) }}</p>
        </div>
        <p class="text-sm capitalize italic text-stone-500">
          {{ ingredients && ingredients[index].join(', ') }}
        </p>
      </li>
    </ul>

    <div class="space-y-2 bg-stone-200 px-6 py-5">
      <p class="text-sm font-medium text-stone-600">
        Price pizza: {{ formatCurrency(order.orderPrice) }}
      </p>

      <p class="text-sm font-medium text-stone-600">
        Price priority: {{ formatCurrency(order.priorityPrice) }}
      </p>
      <p class="font-bold">
        To pay on delivery: {{ formatCurrency(order.orderPrice + order.priorityPrice) }}
      </p>
    </div>
    <div class="text-right">
      <SharedButton @trigger="handlePriority" v-if="!order.priority" type="primary"
        >Make priority</SharedButton
      >
    </div>
  </div>
</template>
