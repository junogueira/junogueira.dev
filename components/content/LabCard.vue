<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  showUsageTab: {
    type: Boolean,
    default: true,
  },
  showCreditTab: {
    type: Boolean,
    default: false,
  },
});

const tab = ref('preview');
</script>

<template>
  <div>
    <h2 class="text-sm font-semibold">{{ title }}</h2>
    <p class="text-sm text-gray-500">
      {{ description }}
    </p>
    <div
      class="mt-2 overflow-hidden rounded-lg border shadow-sm dark:border-white/10"
    >
      <div class="flex items-center gap-2 border-b p-2 dark:border-white/10">
        <div class="flex w-full items-center">
          <UButton
            label="Preview"
            variant="soft"
            color="white"
            size="xs"
            class="relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            :class="{ 'active-tab': tab === 'preview' }"
            @click="tab = 'preview'"
          />
          <UButton
            label="Code"
            variant="soft"
            color="white"
            size="xs"
            class="relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            :class="{ 'active-tab': tab === 'code' }"
            @click="tab = 'code'"
          />
          <UButton
            v-if="showUsageTab"
            label="Usage"
            variant="soft"
            color="white"
            size="xs"
            class="relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            :class="{ 'active-tab': tab === 'usage' }"
            @click="tab = 'usage'"
          />
          <UButton
            v-if="showCreditTab"
            label="Credits"
            variant="soft"
            color="white"
            size="xs"
            class="relative hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            :class="{ 'active-tab': tab === 'credit' }"
            @click="tab = 'credit'"
          />
        </div>
      </div>
      <div>
        <div
          v-if="tab === 'preview'"
          class="overflow-hidden bg-gray-100 dark:bg-gray-900"
        >
          <slot name="preview" />
        </div>
        <slot v-if="tab === 'code'" name="codebase" />
        <slot v-if="tab === 'usage'" name="usage" />
        <slot v-if="tab === 'credit'" name="credit" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.active-tab {
  @apply after:bg-primary-500 after:pointer-events-none after:absolute after:bottom-[-9px] after:left-0 after:h-0.5 after:w-full after:content-[''];
}
</style>
