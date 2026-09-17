import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/blogs';

const SITE = 'https://rhinosteel.co.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = BLOG_POSTS.map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts,
  ];
}
