<script lang="ts" setup>
import type { Project } from '~/types';

const { data: projects } = await useAsyncData('projects-home', () =>
  queryContent<Project>('/projects').limit(3).find(),
);
</script>

<template>
  <div>
    <h2 class="mb-6 text-xs font-semibold uppercase text-gray-400">
      FEATURED PROEJCTS
    </h2>
    <div class="space-y-4">
      <ProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <!-- <div class="mt-6 flex items-center justify-center text-sm">
      <UButton
        label="All Projects"
        to="/projects"
        variant="link"
        color="gray"
        icon="i-solar-arrow-right-linear"
        trailing
        :ui="{ icon: { size: { sm: 'h-4 w-4' } } }"
      />
    </div> -->
  </div>
</template>
