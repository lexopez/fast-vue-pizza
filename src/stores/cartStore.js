import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // --- STATE ---
  const cart = ref([])

  // --- GETTERS (computed) ---
  const getTotalCartQuantity = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0),
  )

  const getTotalCartPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.totalPrice, 0),
  )

  // Note: Getters with arguments in Pinia are functions
  const getCurrentQuantityById = (id) => {
    return cart.value.find((item) => item.pizzaId === id)?.quantity ?? 0
  }

  // --- ACTIONS (functions) ---
  function addItem(newItem) {
    cart.value.push(newItem)
  }

  function deleteItem(id) {
    cart.value = cart.value.filter((item) => item.pizzaId !== id)
  }

  function increaseItemQuantity(id) {
    const item = cart.value.find((item) => item.pizzaId === id)
    if (item) {
      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    }
  }

  function decreaseItemQuantity(id) {
    const item = cart.value.find((item) => item.pizzaId === id)
    if (!item) return

    item.quantity--
    item.totalPrice = item.quantity * item.unitPrice

    if (item.quantity === 0) {
      deleteItem(id)
    }
  }

  function clearCart() {
    cart.value = []
  }

  return {
    cart,
    getTotalCartQuantity,
    getTotalCartPrice,
    getCurrentQuantityById,
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
  }
})
