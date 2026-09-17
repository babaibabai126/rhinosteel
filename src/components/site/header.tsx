'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { CONTACT } from '@/lib/data';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/#products' },
  { label: 'Why Rhino', href: '/#why-us' },
  { label: 'Contact', href: '/#contact' },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Rhino Steel — Home">
          <Image
            src="/logo.svg"
            alt="Rhino Steel logo"
            width={38}
            height={38}
            className="h-9 w-9"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-wide whitespace-nowrap text-foreground">
              RHINO <span className="text-primary">STEEL</span>
            </span>
            <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Think Roof · Think Rhino
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phones[0].tel}`}
            className="hidden items-center gap-2 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary lg:flex"
            aria-label={`Call us at ${CONTACT.phones[0].display}`}
          >
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            {CONTACT.phones[0].display}
          </a>

          <a
            href={`mailto:${CONTACT.emails[0]}`}
            className="hidden items-center gap-2 whitespace-nowrap rounded-md px-2.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary xl:flex"
            aria-label={`Email us at ${CONTACT.emails[0]}`}
          >
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            {CONTACT.emails[0]}
          </a>

          <ThemeToggle />

          <Button asChild className="hidden font-semibold sm:inline-flex">
            <a href="/#contact">Get a Quote</a>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/logo.svg"
                    alt="Rhino Steel logo"
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                  RHINO STEEL
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1 px-4" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-4 font-semibold">
                  <a href="/#contact" onClick={() => setOpen(false)}>
                    Get a Quote
                  </a>
                </Button>
                <a
                  href={`tel:${CONTACT.phones[0].tel}`}
                  className="mt-2 flex items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-primary"
                >
                  <Phone className="h-4 w-4" /> {CONTACT.phones[0].display}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
