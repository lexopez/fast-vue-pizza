<script setup lang="ts">
import { ref } from 'vue'
import SharedButton from './SharedButton.vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useUserStore()
const username = ref('')
const handleSubmit = () => {
  if (!username.value) return
  store.updateName(username.value)
  router.push('/menu')
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <p class="mb-4 text-sm text-stone-600 md:text-base">
      👋 Welcome! Please start by telling us your name:
    </p>

    <input
      type="text"
      v-model="username"
      placeholder="Your full name"
      className="input mb-8 w-72"
    />

    <div>
      <SharedButton v-if="username !== ''" type="primary">Start ordering</SharedButton>
    </div>
  </form>
</template>
