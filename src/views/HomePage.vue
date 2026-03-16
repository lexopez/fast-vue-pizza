<script setup>
import CreateUser from '@/components/CreateUser.vue'
import SharedButton from '@/components/SharedButton.vue'
import { useUserStore } from '@/stores/userStore'

const store = useUserStore()
</script>

<template>
  <div class="my-10 px-4 text-center sm:my-16">
    <h1 class="mb-8 text-xl font-semibold md:text-3xl">
      The best pizza.
      <br />
      <span class="text-yellow-500"> Straight out of the oven, straight to you. </span>
    </h1>

    <CreateUser v-if="store.username === ''" />
    <SharedButton v-else type="primary">Continue ordering, {{ store.username }}</SharedButton>
  </div>
</template>
