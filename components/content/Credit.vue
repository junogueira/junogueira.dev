<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="bg-gray-100 p-4 text-center text-sm dark:bg-gray-900">
    This component was inspired by
    <NuxtLink :to="link" external target="_blank" class="font-medium underline">
      {{ label }} </NuxtLink
    >.
  </div>
</template>
