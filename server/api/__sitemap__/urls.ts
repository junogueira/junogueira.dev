import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { serverQueryContent } from '#content/server';
import { asSitemapUrl, defineSitemapEventHandler } from '#imports';

export default defineSitemapEventHandler(async e => {
  const contentList = (await serverQueryContent(e)
    .where({ _type: 'markdown' })
    .find()) as ParsedContent[];

  return contentList.map(c => {
    return asSitemapUrl({
      loc: c._path,
      lastmod: c?.updatedAt || c.createdAt,
      images: c.image
        ? [{ loc: c.image.src, title: c.image?.alt || undefined }]
        : undefined,
    });
  });
});
