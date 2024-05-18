import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { serverQueryContent } from '#content/server';
import { asSitemapUrl, defineSitemapEventHandler } from '#imports';

type SitemapContent = Pick<
  ParsedContent,
  '_extension' | '_path' | 'createdAt' | 'updatedAt'
>;

export default defineSitemapEventHandler(async e => {
  const contentList = (await serverQueryContent(e)
    .only(['_extension', '_path', 'createdAt', 'updatedAt'])
    .where({ _extension: 'md' })
    .find()) as SitemapContent[];

  return contentList.map(c => {
    return asSitemapUrl({
      loc: c._path,
      lastmod: c?.updatedAt || c.createdAt,
      // images: c.image
      //   ? [{ loc: c.image.src, title: c.image?.alt || undefined }]
      //   : undefined,
    });
  });
});
