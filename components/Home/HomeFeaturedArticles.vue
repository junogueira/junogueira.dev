<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles-home', () =>
  queryContent('/articles')
    .sort({ published: -1 })
    .limit(3)
    .only(['title', 'description', 'published', 'slug', '_path'])
    .find(),
);
</script>

<template>
  <div>
    <h2 class="mb-6 text-xs font-semibold uppercase text-gray-400">
      RECENT ARTICLES
    </h2>
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <div class="mt-6 flex items-center justify-center text-sm">
      <UButton
        label="All Articles &rarr;"
        to="/articles"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>
