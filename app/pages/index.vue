<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();

onMounted(() => {
  const tgUser = getTelegramUser();
  if (tgUser) {
    userStore.setUser({ ...tgUser, name: tgUser.first_name });
  }
});
</script>

<template>
  <div class="p-4 flex flex-col items-center justify-center min-h-screen">
    <CopyableText :text="userStore.user?.first_name" />
    <Avatar :src="userStore.user?.photo_url" />

    <div class="mt-2 text-sm text-gray-500">
      <p>ID: {{ userStore.user?.id }}</p>
      <p>Имя: {{ userStore.user?.first_name || '—' }}</p>
      <p>Фамилия: {{ userStore.user?.last_name || '—' }}</p>
    </div>

    <NameForm />
  </div>
</template>
