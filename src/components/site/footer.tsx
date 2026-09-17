import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT, PRODUCTS } from '@/lib/data';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt="Rhino Steel logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold tracking-wide text-foreground">
                  RHINO <span className="text-primary">STEEL</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Think Roof · Think Rhino
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Your one-stop destination for complete roofing, steel structure and
              insulation solutions in Kolkata &amp; Eastern India — delivering trusted
              brands with professional installation.
            </p>
          </div>

          {/* Products */}
          <nav aria-label="Footer products navigation">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Our Products
            </h3>
            <ul className="mt-4 space-y-2">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/#products`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {product.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick links */}
          <nav aria-label="Footer quick navigation">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: 'Home', href: '/#home' },
                { label: 'Products', href: '/#products' },
                { label: 'Why Rhino Steel', href: '/#why-us' },
                { label: 'Contact Us', href: '/#contact' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Reach Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="flex flex-col gap-0.5">
                  {CONTACT.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="transition-colors hover:text-primary"
                    >
                      {phone.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="flex flex-col gap-0.5">
                  {/* Bottom of the site keeps tkmitra08@gmail.com first */}
                  {[...CONTACT.emails].reverse().map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="break-all transition-colors hover:text-primary"
                    >
                      {email}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  91/2B/1, Becharam Chatterjee Road, Behala, Kolkata – 700034
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="text-xs text-muted-foreground">
            © {year} Rhino Steel. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Developed by{' '}
            <a
              href="https://aarohantechsolutions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground transition-colors hover:text-primary hover:underline"
            >
              Aarohan Tech Solution
            </a>
          </p>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
            Think Roof <span className="text-primary">—</span> Think Rhino
          </p>
        </div>
      </div>
    </footer>
  );
}
