<script setup lang="ts">
import { useFixedHeader } from 'vue-use-fixed-header';
const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);

const route = useRoute();
console.log(route);
const isActiveRoute = (path: string) => {
  // console.log(path, route.path);
  return path === route.path;
};

const items = [
  {
    name: 'Home',
    path: '/',
    icon: 'i-solar-home-smile-outline',
  },
  // {
  //   name: 'Projects',
  //   path: '/projects',
  //   icon: 'i-solar-folder-with-files-outline',
  // },
  // {
  //   name: 'Articles',
  //   path: '/articles',
  //   icon: 'i-solar-document-add-outline',
  // },
  // {
  //   name: 'Lab',
  //   path: '/lab',
  //   icon: 'i-solar-programming-outline',
  // },
  // {
  //   name: "What's in my bag?",
  //   path: '/whats-in-my-bag',
  //   icon: 'i-solar-backpack-outline',
  // },
  // {
  //   name: 'Bookmarks',
  //   path: '/bookmarks',
  //   icon: 'i-solar-bookmark-outline',
  // },
];
</script>

<template>
  <div ref="headerRef" :style="styles" class="fixed top-0 z-50 w-full">
    <nav class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
      <ul
        class="my-4 flex items-center space-x-3 rounded-full bg-white/90 px-5 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20"
      >
        <li v-for="item in items" :key="item.path">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              :to="item.path"
              class="hover:text-primary-500 dark:hover:text-primary-400 relative flex size-8 items-center justify-center rounded-full transition"
              active-class="text-primary-600 dark:text-primary-400 bg-gray-100 dark:bg-white/10"
            >
              <UIcon aria-hidden="true" :name="item.icon" class="z-10 size-5" />
              <span
                v-if="isActiveRoute(item.path)"
                class="from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0 absolute inset-x-0 -bottom-[11px] h-px w-full bg-gradient-to-r"
              ></span>
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="!ml-auto">
          <AppThemeToggle />
        </li>
      </ul>
    </nav>
  </div>
</template>
