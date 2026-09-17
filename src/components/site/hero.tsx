'use client';

import Image from 'next/image';
import { ArrowRight, Phone, ShieldCheck, Wrench, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/data';

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image with overlays */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.jpg"
          alt="Steel structure building with metal roofing at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-zinc-950/40 dark:from-zinc-950/95 dark:via-zinc-950/85 dark:to-zinc-950/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/40" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-300 backdrop-blur">
            Complete Roofing & Steel Structure Solutions
          </span>

          <h1 className="font-display mt-6 text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Think Roof
            <span className="mx-3 block text-primary sm:ml-4 sm:inline">—</span>
            <span className="block sm:inline">Think </span>
            <span className="text-primary">Rhino</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            From pre-engineered buildings and tensile structures to colour coated roofing,
            insulation and PUF panels — <strong className="text-white">Rhino Steel</strong> delivers
            end-to-end roofing solutions for factories, warehouses, showrooms and homes across
            Kolkata and Eastern India.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-12 px-7 text-base font-semibold shadow-lg shadow-orange-950/40">
              <a href="#contact" className="group">
                How Can We Help You?
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur hover:bg-white/15 hover:text-white"
            >
              <a href="#products">Explore Our Products</a>
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: 'Trusted Brands & Quality Materials' },
              { icon: Wrench, label: 'Expert Supply & Installation' },
              { icon: Truck, label: '9 Product Verticals, One Roof' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur"
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call CTA ribbon */}
      <div className="bg-steel-stripes relative z-10 border-t border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3.5 text-center sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-zinc-300">
            Need a quote for your roofing or shed project?
          </p>
          <a
            href={`tel:${CONTACT.phones[0].tel}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-orange-400"
          >
            <Phone className="h-4 w-4" />
            Call {CONTACT.phones[0].display}
          </a>
        </div>
      </div>
    </section>
  );
}
