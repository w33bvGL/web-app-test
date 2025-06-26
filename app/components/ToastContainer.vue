<template>
  <div class="fixed top-4 right-4 z-50 flex flex-col gap-2">
    <div
      v-for="toast in toastStore.toasts"
      :key="toast.id"
      class="px-4 py-2 rounded shadow text-white"
      :class="{
        'bg-green-500': toast.type === 'success',
        'bg-red-500': toast.type === 'error',
      }"
    >
      {{ toast.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';
const toastStore = useToastStore();
</script>
