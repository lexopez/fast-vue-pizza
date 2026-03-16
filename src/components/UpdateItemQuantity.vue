<script setup lang="ts">
import SharedButton from './SharedButton.vue'
</script>

<template>
  <div class="flex items-center gap-2 md:gap-3">
    <SharedButton type="round"> - </SharedButton>
    <span class="text-sm font-medium">x</span>
    <SharedButton type="round"> + </SharedButton>
  </div>
</template>
