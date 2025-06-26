<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const tgUser = ref(null);

onMounted(() => {
  const user = getTelegramUser();
  tgUser.value = user;

  if (user) {
    userStore.setUser({ ...user });
  }
});
</script>

<template>
  <pre>{{ tgUser }}</pre> text
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
