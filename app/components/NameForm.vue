<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const newName = ref(userStore.user?.first_name || '');

const updateName = () => {
  if (newName.value.trim()) {
    userStore.updateName(newName.value.trim());
  }
};
</script>

<template>
  <div class="mt-6 w-full flex flex-col items-center">
    <input
      v-model="newName"
      type="text"
      placeholder="Новое имя"
      class="border p-2 w-full max-w-xs rounded focus:outline-none"
    />
    <button
      @click="updateName"
      class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
    >
      Обновить имя
    </button>
  </div>
</template>
