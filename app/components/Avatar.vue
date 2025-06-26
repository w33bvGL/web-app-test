<script setup lang="ts">
defineProps<{ src?: string }>();
</script>


<template>
  <div>
    <div class="rounded-full overflow-hidden w-24 h-24 mt-4 bg-neutral-500">
      <img :src="src" class="w-full h-full object-cover" alt="avatar" />
    </div>
  </div>
</template>

