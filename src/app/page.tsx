import { SiteHeader } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { Products } from '@/components/site/products';
import { WhyUs } from '@/components/site/why-us';
import { Contact } from '@/components/site/contact';
import { SiteFooter } from '@/components/site/footer';
import { FloatingActions } from '@/components/site/floating-actions';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Products />
        <WhyUs />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
