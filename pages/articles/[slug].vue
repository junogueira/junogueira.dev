<script setup>
const route = useRoute();
const { slug } = route.params;
useSeoMeta({
  ogImage: `https://fayazahmed.com/articles/${slug}.png`,
  twitterCard: 'summary_large_image',
  articleAuthor: 'Fayaz Ahmed',
});

// useSeoMeta({
//   title,
//   ogTitle: title,
//   description,
//   ogDescription: description,
//   articleModifiedTime: post.value?.updatedAt || post.value.createdAt,
//   ogImage,
//   twitterImage: ogImage,
// });

// useSchemaOrg(defineArticle(useDefineArticle(post.value)));
</script>
<template>
  <div>
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:rounded-lg prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </div>
</template>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
