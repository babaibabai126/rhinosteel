import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/site/header';
import { SiteFooter } from '@/components/site/footer';
import { FloatingActions } from '@/components/site/floating-actions';
import { BLOG_POSTS_SORTED, formatDate, getBlogPost } from '@/lib/blogs';
import { CONTACT } from '@/lib/data';

export function generateStaticParams() {
  return BLOG_POSTS_SORTED.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Rhino Steel`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Rhino Steel'],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS_SORTED.filter((p) => p.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Rhino Steel' },
    publisher: { '@type': 'Organization', name: 'Rhino Steel' },
    keywords: post.keywords.join(', '),
    mainEntityOfPage: `https://rhinosteel.co.in/blog/${post.slug}`,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="flex-1 bg-background">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-md border border-primary/30 bg-primary/5 px-2 py-0.5 text-[11px] font-semibold text-primary">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readTime} min read
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-8 space-y-4">
            {post.intro.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/90">
                {para}
              </p>
            ))}
          </div>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="font-display text-2xl font-semibold tracking-wide text-foreground">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-5 space-y-2.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed text-foreground/85">
                      <CheckCircle2 className="mt-1 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-10">
            <div className="space-y-4">
              {post.conclusion.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/90">
                  {para}
                </p>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-foreground">
              Talk to Rhino Steel
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Free site visit, honest specifications and branded material with warranty —
              from Kolkata&rsquo;s trusted roofing &amp; steel structure company.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="font-semibold">
                <a href={`tel:${CONTACT.phones[0].tel}`}>
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {CONTACT.phones[0].display}
                </a>
              </Button>
              <Button asChild variant="outline" className="font-semibold">
                <Link href="/#contact">
                  Enquire Online
                  <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Related articles */}
          <section className="mt-14">
            <Badge variant="outline" className="mb-4 border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Keep Reading
            </Badge>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group rounded-lg border border-border/60 bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {rel.category}
                  </p>
                  <p className="mt-1.5 line-clamp-3 text-sm font-medium leading-snug text-foreground group-hover:text-primary">
                    {rel.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
