<script setup lang="ts">
import type { Project } from '~/types';

const description =
  "I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.";

useSeoMeta({
  title: 'Projects',
  description,
});

const { data: projects } = await useAsyncData('projects-all', () =>
  queryContent<Project>('/projects').find(),
);
</script>

<template>
  <div>
    <PageHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <ProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </div>
</template>
