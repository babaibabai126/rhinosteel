import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { SiteHeader } from '@/components/site/header';
import { SiteFooter } from '@/components/site/footer';
import { FloatingActions } from '@/components/site/floating-actions';
import { BLOG_POSTS_SORTED, formatDate } from '@/lib/blogs';

export const metadata: Metadata = {
  title: 'Blog | Roofing, PEB & Insulation Insights — Rhino Steel Kolkata',
  description:
    'Expert guides on colour coated roofing sheets, PEB buildings, PUF panels, LGSF, tensile structures and roof maintenance — practical articles from Rhino Steel, Kolkata\u2019s trusted roofing company.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Rhino Steel Blog — Roofing & Steel Structure Insights',
    description:
      'Practical guides on roofing sheets, PEB, insulation, cold storage panels and maintenance from Kolkata roofing experts.',
    type: 'website',
  },
};

export default function BlogIndex() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-secondary/30 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Badge variant="outline" className="mb-4 border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Our Blog
            </Badge>
            <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
              Roofing Insights &amp; <span className="text-primary">Buying Guides</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Practical, experience-based articles on roofing sheets, pre-engineered buildings,
              insulation, cold storage panels and maintenance — written by the Rhino Steel team
              to help you choose right and build once.
            </p>
          </div>
        </section>

        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS_SORTED.map((post) => (
                <Card
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-xl border-border/70 pt-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
                >
                  <CardContent className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="rounded-md border border-primary/30 bg-primary/5 px-2 py-0.5 text-[11px] font-semibold text-primary">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                        {formatDate(post.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.readTime} min
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-semibold leading-snug tracking-wide text-foreground">
                      <Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="mt-auto pt-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
