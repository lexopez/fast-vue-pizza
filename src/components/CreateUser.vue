<script setup lang="ts">
import SharedButton from './SharedButton.vue'
</script>

<template>
  <form>
    <p class="mb-4 text-sm text-stone-600 md:text-base">
      👋 Welcome! Please start by telling us your name:
    </p>

    <input type="text" placeholder="Your full name" className="input mb-8 w-72" />

    <div>
      <SharedButton type="primary">Start ordering</SharedButton>
    </div>
  </form>
</template>
