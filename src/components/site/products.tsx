'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Building2, CheckCircle2, Snowflake, Sun, Tent, Thermometer, Factory, Boxes, Layers, Frame, Warehouse, X, ZoomIn } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PRODUCTS } from '@/lib/data';
import { useEnquiryStore } from '@/lib/store';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  peb: Factory,
  prefab: Boxes,
  tenso: Tent,
  roofing: Layers,
  trussless: Warehouse,
  polycarbonate: Sun,
  foil: Thermometer,
  puf: Snowflake,
  lgsf: Frame,
};

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

export function Products() {
  const setSelectedProduct = useEnquiryStore((s) => s.setSelectedProduct);
  const [zoom, setZoom] = useState<{ src: string; label: string } | null>(null);

  const handleEnquire = (productName: string) => {
    setSelectedProduct(productName);
    scrollToContact();
  };

  // Fullscreen zoom (lightbox): close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoom(null);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [zoom]);

  return (
    <section id="products" className="scroll-mt-16 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Our Products
          </Badge>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            Everything Your Roof Needs, <span className="text-primary">Under One Roof</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nine specialised product verticals covering every roofing, cladding and
            insulation requirement — backed by India&rsquo;s most reputed manufacturers
            and installed by experienced teams.
          </p>
        </div>

        {/* Product grid — masonry columns: every card keeps its natural height,
            so tall cards (e.g. roofing with 6 gallery pics) never stretch their
            neighbours into blank space */}
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
          {PRODUCTS.map((product, index) => {
            const Icon = ICONS[product.id] ?? Building2;
            return (
              <Card
                key={product.id}
                className="group mb-6 flex flex-col break-inside-avoid overflow-hidden rounded-xl border-border/70 pt-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image — click to zoom fullscreen */}
                <div className="relative h-44 w-full overflow-hidden bg-muted">
                  <button
                    type="button"
                    onClick={() => setZoom({ src: product.image, label: product.name })}
                    className="absolute inset-0 cursor-zoom-in"
                    aria-label={`Zoom ${product.name}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </button>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                  <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="absolute bottom-3 left-3 font-mono text-xs font-semibold text-white/90">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <CardContent className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold uppercase leading-tight tracking-wide text-foreground">
                      {product.shortName}
                    </h3>
                    <p className="mt-1 text-xs font-medium italic text-primary">
                      {product.tagline}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <ul className="space-y-1.5">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Brand chips */}
                  {product.brands && (
                    <div className="flex flex-wrap gap-1.5">
                      {product.brands.map((brand) => (
                        <span
                          key={brand}
                          className="rounded-md border border-primary/30 bg-primary/5 px-2 py-0.5 text-[11px] font-semibold text-primary"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Extra pictures — big tiles that fill, click to zoom fullscreen */}
                  {product.gallery && (
                    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${product.gallery.length > 2 ? 2 : product.gallery.length}, minmax(0, 1fr))` }}>
                      {product.gallery.map((g) => (
                        <figure key={g.src} className="overflow-hidden rounded-lg border border-border/60 bg-muted">
                          <button
                            type="button"
                            onClick={() => setZoom({ src: g.src, label: g.label })}
                            className={`group/gal relative block w-full cursor-zoom-in ${product.gallery!.length === 1 ? 'h-40 sm:h-44' : 'h-28 sm:h-32'}`}
                            aria-label={`Zoom ${g.label}`}
                          >
                            <Image
                              src={g.src}
                              alt={g.label}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/gal:scale-105"
                              sizes="(max-width: 640px) 50vw, 200px"
                            />
                            <span className="absolute right-1.5 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/45 text-white opacity-0 shadow transition-opacity duration-200 group-hover/gal:opacity-100">
                              <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                          </button>
                          <figcaption title={g.label} className="truncate px-1.5 py-1 text-[10px] font-medium leading-tight text-muted-foreground">
                            {g.label}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-2">
                    <Button
                      variant="outline"
                      className="w-full font-semibold group-hover:border-primary group-hover:text-primary"
                      onClick={() => handleEnquire(product.name)}
                    >
                      Enquire Now
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Fullscreen zoom lightbox */}
      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoom.label}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setZoom(null)}
        >
          <button
            type="button"
            onClick={() => setZoom(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            aria-label="Close zoom"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div
            className="relative h-[85vh] max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-xl bg-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoom.src}
              alt={zoom.label}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-center">
              <p className="text-sm font-semibold text-white">{zoom.label}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
