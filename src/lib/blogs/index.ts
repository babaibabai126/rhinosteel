import type { BlogPost } from './types';
import { post01 } from './post-01';
import { post02 } from './post-02';
import { post03 } from './post-03';
import { post04 } from './post-04';
import { post05 } from './post-05';
import { post06 } from './post-06';
import { post07 } from './post-07';
import { post08 } from './post-08';
import { post09 } from './post-09';
import { post10 } from './post-10';
import { post11 } from './post-11';
import { post12 } from './post-12';

export type { BlogPost, BlogSection } from './types';

export const BLOG_POSTS: BlogPost[] = [post01, post02, post03, post04, post05, post06, post07, post08, post09, post10, post11, post12];

/** Newest first — for listing pages */
export const BLOG_POSTS_SORTED: BlogPost[] = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
