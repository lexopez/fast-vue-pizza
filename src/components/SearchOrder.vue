<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const query = ref('')
const handleSubmit = () => {
  if (!query.value) return
  router.push(`/order/${query.value}`)
  query.value = ''
}
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="query"
      placeholder="Search order #"
      class="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
    />
  </form>
</template>
