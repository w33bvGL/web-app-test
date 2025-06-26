<script setup lang="ts">
import { useToastStore } from '~/stores/toast';
const toastStore = useToastStore();
const props = defineProps<{ text?: string }>();

const copyToClipboard = async () => {
  if (props.text) {
    await navigator.clipboard.writeText(props.text);
    toastStore.showToast('Имя скопировано!', 'success');
  }
};
</script>

<template>
  <div class="flex items-center gap-2">
    <span class="text-xl font-medium">{{ text }}</span>
    <button @click="copyToClipboard">📋</button>
  </div>
</template>
