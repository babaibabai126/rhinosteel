import { MapPin, Phone, Mail, Globe, User, MessageSquareText } from 'lucide-react';
import { CONTACT } from '@/lib/data';
import { EnquiryForm } from './enquiry-form';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <MessageSquareText className="h-3.5 w-3.5" aria-hidden="true" />
            Get In Touch
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            Let&rsquo;s Talk About <span className="text-primary">Your Roof</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Call, WhatsApp, email or drop us a message — whichever is easiest for you.
            We respond to every enquiry, usually within the same working day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* Person card */}
            <div className="rounded-xl border border-border/70 bg-secondary/40 p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <User className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-foreground">
                    {CONTACT.person}
                  </h3>
                  <p className="text-sm font-medium text-primary">{CONTACT.role}</p>
                </div>
              </div>
              <p className="mt-4 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
                Your single point of contact for product information, site visits,
                quotations and order support. Feel free to call between 10 AM – 8 PM,
                Monday to Saturday.
              </p>
            </div>

            {/* Phone numbers */}
            <div className="rounded-xl border border-border/70 bg-card p-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" /> Call / WhatsApp
              </h4>
              <div className="mt-3 flex flex-col gap-2">
                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="rounded-md px-2 py-1.5 text-lg font-semibold text-foreground transition-colors hover:bg-accent hover:text-primary"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>

            {/* Emails */}
            <div className="rounded-xl border border-border/70 bg-card p-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" /> Email
              </h4>
              <div className="mt-3 flex flex-col gap-2">
                {CONTACT.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="break-all rounded-md px-2 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-border/70 bg-card p-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" /> Office Address
              </h4>
              <address className="mt-3 px-2 text-sm not-italic leading-relaxed text-foreground/90">
                {CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-3 flex items-center gap-2 border-t border-border/60 px-2 pt-3 text-sm text-muted-foreground">
                <Globe className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {CONTACT.website}
              </p>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
