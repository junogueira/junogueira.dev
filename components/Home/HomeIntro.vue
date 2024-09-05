<script setup lang="ts">
const siteMeta = useSiteMeta();

useSeoMeta({
  title: `${siteMeta.name} • Software Engineer from Brazil`,
  titleTemplate: '',
});
</script>

<template>
  <div class="space-y-6">
    <NuxtImg
      :src="siteMeta.image"
      :alt="siteMeta.name"
      class="hover:ring-primary hover:border-primary-300 dark:hover:border-primary-300 dark:hover:ring-primary-500 h-12 w-12 rounded-full border border-gray-300 bg-gray-200 ring-2 ring-gray-200 transition-all duration-300 hover:ring-4 sm:h-16 sm:w-16 dark:border-gray-800 dark:bg-gray-900 dark:ring-white/10"
      sizes="48px sm:64px"
      placeholder
      format="webp"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hey there! 👋🏼
    </h1>

    <p>
      I'm Ju, a software engineer and builder from Brazil 🇧🇷. I've been building
      web applications and sites for the last 10+ years, and more recently, I've
      been specializing in the Javascript ecosystem with Vue.js, Nuxt &amp;
      Node.js.
    </p>

    <p>
      Currently, I work as a Frontend Engineer at
      <NuxtLink
        external
        to="https://hubstaff.com/"
        target="_blank"
        class="underline"
        >Hubstaff</NuxtLink
      >, and in my free time, I'm always tinkering with some app or site that I
      am building, experimenting with SEO, or even designing a new project.
    </p>
  </div>
</template>
