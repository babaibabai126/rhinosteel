import {
  Handshake,
  MapPinned,
  BadgeCheck,
  Wallet,
  Clock,
  Headset,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const REASONS = [
  {
    icon: Handshake,
    title: 'One-Stop Solution',
    description:
      'From structural design to the last fixing screw — PEB, prefab, roofing, ventilation and insulation are all handled by a single, accountable partner, so you never have to coordinate between multiple vendors again.',
  },
  {
    icon: BadgeCheck,
    title: 'Trusted Brands Only',
    description:
      'We associate with India\u2019s leading manufacturers for every product line. That means genuine materials, mill test certificates, manufacturer warranties and consistent quality on every single order.',
  },
  {
    icon: MapPinned,
    title: 'Kolkata Roots, Eastern India Reach',
    description:
      'Based in Behala, Kolkata, we serve factories, warehouses, contractors and house-owners across West Bengal and neighbouring states — with prompt site visits and dependable local support.',
  },
  {
    icon: Clock,
    title: 'Fast, Professional Execution',
    description:
      'Steel structures are about speed. Our experienced installation teams follow engineered methods and safety practices to hand over your project in the shortest possible time — without compromising quality.',
  },
  {
    icon: Wallet,
    title: 'Honest, Competitive Pricing',
    description:
      'Direct sourcing from manufacturers and lean overheads let us offer genuinely competitive rates — with transparent quotations, no hidden charges and clear specifications you can compare.',
  },
  {
    icon: Headset,
    title: 'After-Sales Support',
    description:
      'Our relationship does not end at handover. From leakage complaints to additional requirements and maintenance guidance, we stay reachable and responsive long after installation is complete.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-16 bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 border-primary/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Why Rhino Steel
          </Badge>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            Strength You Can <span className="text-primary">Lean On</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A roof protects everything beneath it. That is why customers across Kolkata
            and Eastern India trust Rhino Steel — the name that stands for strength,
            reliability and complete peace of mind.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5.5 w-5.5" aria-hidden="true" />
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold uppercase tracking-wide text-foreground">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Process strip */}
        <div className="mt-14 rounded-xl border border-border/70 bg-card p-6 sm:p-8">
          <h3 className="font-display text-center text-2xl font-semibold uppercase tracking-wide text-foreground">
            How We Work
          </h3>
          <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Enquire', desc: 'Call, WhatsApp or submit the enquiry form — tell us about your project.' },
              { step: '02', title: 'Site Visit & Estimate', desc: 'We visit your site, understand requirements and send a detailed, transparent quotation.' },
              { step: '03', title: 'Supply & Installation', desc: 'Genuine materials delivered and installed by skilled teams, on schedule.' },
              { step: '04', title: 'Handover & Support', desc: 'Clean handover with warranty documents, backed by responsive after-sales service.' },
            ].map(({ step, title, desc }) => (
              <li key={step} className="relative">
                <span className="font-display text-4xl font-extrabold text-primary/25">
                  {step}
                </span>
                <h4 className="font-display mt-1 text-lg font-semibold uppercase tracking-wide text-foreground">
                  {title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
