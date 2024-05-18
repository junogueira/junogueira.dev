<script lang="ts" setup>
const siteMeta = useSiteMeta();

const links = [
  {
    name: 'Twitter',
    url: siteMeta.socials.twitter,
    icon: 'i-simple-icons-twitter',
  },
  {
    name: 'GitHub',
    url: siteMeta.socials.github,
    icon: 'i-simple-icons-github',
  },
  {
    name: 'Linkedin',
    url: siteMeta.socials.linkedin,
    icon: 'i-simple-icons-linkedin',
  },
];
</script>

<template>
  <div>
    <h2 class="mb-4 text-xs font-semibold uppercase text-gray-400">
      FIND ME ON
    </h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        :class="[
          `hover:text-${link.name.toLowerCase()}`,
          'group flex items-end gap-4 transition-colors dark:hover:text-gray-300',
        ]"
      >
        <span class="text-sm leading-none">
          {{ link.name }}
        </span>
        <div
          :class="[
            `group-hover:border-${link.name.toLowerCase()}`,
            'flex-1 border-b border-dashed border-gray-300 transition-colors duration-300 dark:border-gray-800 dark:group-hover:border-gray-700',
          ]"
        ></div>
        <UIcon :name="link.icon" class="size-5"></UIcon>
      </NuxtLink>
    </div>
  </div>
</template>
