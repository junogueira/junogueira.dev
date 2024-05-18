import {
  SITE_NAME,
  SITE_IMAGE,
  SITE_OG_IMAGE,
  SITE_LANGUAGE,
  TWITTER_URL,
  GITHUB_URL,
  LINKEDIN_URL,
} from '~/utils/constants';

export default function () {
  const {
    public: { siteUrl },
  } = useRuntimeConfig();

  return {
    name: SITE_NAME,
    siteUrl,
    image: SITE_IMAGE,
    ogImage: SITE_OG_IMAGE,
    language: SITE_LANGUAGE,
    socials: {
      twitter: TWITTER_URL,
      github: GITHUB_URL,
      linkedin: LINKEDIN_URL,
    },
  };
}
