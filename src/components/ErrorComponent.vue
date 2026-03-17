<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
router.onError((error) => {
  console.error(error.message)
})
const handleBack = () => router.back()
</script>
<template>
  <div>
    <h1>Something went wrong 😢</h1>
    <p>{{ router.onError().message }}</p>

    <button
      class="text-sm text-blue-500 hover:text-blue-600 hover:underline hover:cursor-pointer"
      @click="handleBack"
    >
      &larr; Go back
    </button>
  </div>
</template>
