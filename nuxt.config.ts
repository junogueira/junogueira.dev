import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_LANGUAGE,
  SITE_TWITTER,
  SITE_IMAGE,
  SITE_OG_IMAGE,
  SITE_SAME_AS,
} from './utils/constants';

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
      { property: 'og:image', content: SITE_OG_IMAGE },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: `@${SITE_TWITTER}` },
      { name: 'twitter:image', content: SITE_OG_IMAGE },
    ],
    head: {
      templateParams: {
        separator: '•',
      },
    },
  },

  content: {
    highlight: false,
    // highlight: {
    //   theme: 'github-dark',
    // },
  },

  devtools: { enabled: true },

  googleFonts: {
    display: 'swap',
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],

  ogImage: {
    enabled: false,
  },

  robots: {
    credits: false,
  },

  routeRules: {
    '/api/**': { index: false, robots: false },
  },

  runtimeConfig: {
    public: {
      // can be overridden by NUXT_PUBLIC_SITE_URL environment variable
      siteUrl: '',
      // can be overridden by NUXT_PUBLIC_GTAG_ID environment variable
      gtagId: '',
    },
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: SITE_NAME,
      image: SITE_IMAGE,
      sameAs: SITE_SAME_AS,
    },
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    defaultLocale: SITE_LANGUAGE,
    trailingSlash: false,
  },

  sitemap: {
    exclude: ['/ignore/**'],
    cacheMaxAgeSeconds: 86400, // 1 day
    // sources: ['/api/__sitemap__/urls'],
  },

  ui: {
    icons: ['heroicons', 'simple-icons', 'solar'],
  },
});
