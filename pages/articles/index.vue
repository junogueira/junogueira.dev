<script setup lang="ts">
const description =
  'All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.';
useSeoMeta({
  title: 'Articles | Fayaz Ahmed',
  description,
});

// useSeoMeta({
//   title: page.value.title,
//   ogTitle: page.value.title,
//   description: page.value.description,
//   ogDescription: page.value.description,
// });

// useSchemaOrg(
//   defineWebPage({
//     '@type': 'CollectionPage',
//     datePublished: page.value?.createdAt
//       ? page.value?.createdAt
//       : posts.value?.length
//         ? posts.value[0].createdAt
//         : undefined,
//     dateModified: page.value?.updatedAt
//       ? page.value?.updatedAt
//       : page.value?.createdAt
//         ? page.value?.createdAt
//         : posts.value?.length
//           ? posts.value[0]?.updatedAt || posts.value[0].createdAt
//           : undefined,
//   }),
// );

const { data: articles } = await useAsyncData('all-articles', () =>
  queryContent('/articles').sort({ published: -1 }).find(),
);
</script>

<template>
  <div>
    <AppHeader class="mb-16" title="Articles" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </div>
</template>
