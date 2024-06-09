<script setup lang="ts">
import type { Project } from '~/types';

interface Props {
  project: Project;
}

const props = defineProps<Props>();

const badgeColor = computed(() => {
  if (!props.project?.status) return 'primary';

  const colorsMap: Record<string, string> = {
    abandoned: 'red',
    acquired: 'emerald',
    active: 'primary',
    wip: 'yellow',
  };

  return colorsMap[props.project.status];
});
</script>

<template>
  <NuxtLink
    class="group -m-2 flex items-end gap-4 rounded-lg p-2"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="max-w-sm">
      <div class="flex space-x-2">
        <h3 class="group-hover:text-primary-600 text-sm font-medium">
          {{ project.name }}
        </h3>
        <UBadge
          v-if="project?.status"
          :color="badgeColor"
          variant="subtle"
          size="xs"
          :ui="{
            rounded: 'rounded-full',
            size: { xs: 'text-[9px] px-2 py-px' },
          }"
          class="uppercase leading-none tracking-wider"
        >
          {{ project.status }}
        </UBadge>
      </div>
      <p class="text-sm text-gray-400">{{ project.description }}</p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-300 group-hover:border-gray-700 dark:border-gray-800"
    ></div>
    <UAvatar
      :src="project.thumbnail"
      :ui="{ rounded: 'rounded z-10 relative' }"
      size="md"
      :alt="project.name"
    />
  </NuxtLink>
</template>
