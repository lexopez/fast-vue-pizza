<script setup>
import { useCartStore } from '@/stores/cartStore'
import SharedButton from './SharedButton.vue'
const props = defineProps({ pizzaId: Number })
const handleDelete = () => {
  const store = useCartStore()
  store.deleteItem(props.pizzaId)
}
</script>

<template>
  <SharedButton type="primary" @trigger="handleDelete"> Delete </SharedButton>
</template>
