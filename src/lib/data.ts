export interface Product {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  /** Brand chips displayed on the product card */
  brands?: string[];
  image: string;
  /** Extra pictures shown on the card (e.g. brand-wise sheet photos) */
  gallery?: { src: string; label: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'peb',
    name: 'Pre-Engineered Buildings (PEB)',
    shortName: 'PEB',
    tagline: 'Engineered for strength, built for speed',
    description:
      'Custom-designed steel buildings for factories, warehouses, showrooms, cold storages and multi-level structures. Every frame is precision-engineered, factory-fabricated and erected on site in a fraction of conventional construction time.',
    features: [
      'Factory, warehouse & showroom structures',
      'Design, fabrication & erection under one roof',
      'Faster completion, lower maintenance',
      'Large clear spans, future expansion ready',
    ],
    image: '/images/peb.jpg',
  },
  {
    id: 'prefab',
    name: 'Prefabricated Structures (Prefab)',
    shortName: 'Prefab',
    tagline: 'Ready structures, delivered anywhere',
    description:
      'Portable and modular prefabricated buildings — site offices, labour colonies, security cabins, farm houses, schools and toilet blocks. Quick to install, easy to relocate and built to withstand tough site conditions.',
    features: [
      'Site offices, cabins & labour camps',
      'Modular — relocate & reassemble with ease',
      'Thermal & acoustic comfort options',
      'Ideal for remote and project sites',
    ],
    image: '/images/prefab.jpg',
    gallery: [{ src: '/images/aframe-resort.jpg', label: 'A-Frame Resort Structure' }],
  },
  {
    id: 'tenso',
    name: 'Tenso (Tensile) Structures',
    shortName: 'Tenso Structure',
    tagline: 'Italian designs for car parking',
    description:
      'Premium tensile fabric car parking sheds in elegant Italian designs — Airone Classic, Nibbio, Astore, Condor, Archeo, Airone Max, Cicogna, Vault, Gavina and Merlo. High-tensile membranes over robust steel framing keep vehicles cool, dry and protected in style.',
    features: [
      'Italian-design car parking sheds',
      'Inbuilt rain-gutter options (Airone Max)',
      'PVDF / PTFE premium membranes',
      'Walkways, entrances & landscape covers',
    ],
    image: '/images/tenso.jpg',
  },
  {
    id: 'roofing',
    name: 'Colour Coated Roofing Sheets',
    shortName: 'Roofing Sheet',
    tagline: 'Colours that last, protection that endures',
    description:
      'Colour coated roofing sheets in 5 types — JSW PPGL (zinc–aluminium coating), AM/NS Optigal ZAM (zinc–aluminium–magnesium), SKYSAFE PPGL, aluminium sheets and camouflage pattern sheets. Superior corrosion resistance, excellent colour retention and multiple profiles for industrial, commercial and residential roofs.',
    features: [
      'JSW PPGL — zinc–aluminium coating',
      'AM/NS Optigal — ZAM coating',
      'SKYSAFE PPGL & aluminium sheets',
      'Camouflage pattern sheets available',
    ],
    brands: ['JSW', 'AM/NS', 'SKYSAFE', 'Aluminium', 'Camouflage'],
    image: '/images/roofing-colour.jpg',
    gallery: [
      { src: '/images/roofing-jsw.jpg', label: 'JSW — Pragati' },
      { src: '/images/roofing-optigal.jpg', label: 'AM/NS — Optigal' },
      { src: '/images/roofing-skysafe.jpg', label: 'SKYSAFE — PPGL' },
      { src: '/images/roofing-aluminium.jpg', label: 'Aluminium Sheet' },
      { src: '/images/roofing-camouflage.jpg', label: 'Camouflage Pattern Sheet' },
      { src: '/images/roofing-color-palette.jpg', label: 'Metal Colour Palette' },
    ],
  },
  {
    id: 'trussless',
    name: 'Trussless Roofing',
    shortName: 'Trussless Roof',
    tagline: 'Seamless arch roofs, zero purlins',
    description:
      'Self-supporting trussless roofing — continuous arch panels roll-formed on site and bolted into one seamless, purlin-free curved roof. Ideal for warehouses, godowns, aircraft hangars, sports facilities and industrial sheds needing large clear spans.',
    features: [
      'Self-supporting arch — no purlins, no trusses',
      'Large clear spans, column-free interiors',
      'Rapid on-site roll-forming & erection',
      'Seamless, leak-proof & maintenance friendly',
    ],
    image: '/images/trussless.jpg',
  },
  {
    id: 'polycarbonate',
    name: 'Polycarbonate Sheets & Turbo Vents',
    shortName: 'PC Sheet & Turbo Vent',
    tagline: 'Natural light in, hot air out',
    description:
      'Transparent polycarbonate roofing sheets flood industrial sheds with natural daylight, while stainless steel turbo ventilators continuously extract hot air, fumes and moisture — a healthier, brighter and more energy-efficient workspace.',
    features: [
      'Plain & multiwall polycarbonate sheets',
      'UV-protected, high impact resistance',
      'Stainless steel turbo ventilators',
      'Reduces daytime lighting costs',
    ],
    image: '/images/polycarbonate.jpg',
    gallery: [{ src: '/images/turbo-vent.jpg', label: 'Turbo Ventilator' }],
  },
  {
    id: 'foil',
    name: 'Aluminium Bubble Foil Insulation',
    shortName: 'Bubble Foil',
    tagline: 'Beat the heat, cut the bills',
    description:
      'Professional installation of aluminium bubble foil insulation under roofs and walls. The reflective thermal barrier keeps interiors cooler in summer and warmer in winter, dramatically reducing air-conditioning costs.',
    features: [
      'Roof-top & under-deck insulation',
      'Reflects up to 97% radiant heat',
      'Vapour barrier — stops condensation',
      'Fire-retardant, maintenance-free',
    ],
    image: '/images/foil.jpg',
  },
  {
    id: 'puf',
    name: 'PUF Panels',
    shortName: 'PUF Panel',
    tagline: 'Insulated panels for every climate need',
    description:
      'Rigid polyurethane foam sandwich panels for cold storages, clean rooms, ripening chambers, portable cabins and temperature-controlled enclosures. Lightweight, airtight and exceptionally thermally efficient.',
    features: [
      'Cold storage & clean room panels',
      'Wall, roof, door & cam-lock panels',
      '60 / 80 / 100 / 150 mm thicknesses',
      'Fast dry-clamping installation',
    ],
    image: '/images/puf.jpg',
  },
  {
    id: 'lgsf',
    name: 'LGSF — Light Gauge Steel Framing',
    shortName: 'LGSF',
    tagline: 'Rooftop extensions in record time',
    description:
      'Modern fast-track construction technology for roof top extensions — add whole extra floors on existing buildings with lightweight galvanised steel frames, without disturbing occupants below. Also ideal for villas, farm houses and buildings up to G+3.',
    features: [
      'Roof top extensions on existing buildings',
      'Villas, schools & buildings up to G+3',
      'Lightweight — minimal load on structure',
      'Fast, clean & precise dry construction',
    ],
    image: '/images/lgsf.jpg',
  },
];

export interface ContactInfo {
  person: string;
  role: string;
  addressLines: string[];
  phones: { display: string; tel: string }[];
  emails: string[];
  website: string;
}

export const CONTACT: ContactInfo = {
  person: 'T. K. Mitra',
  role: 'Marketing Consultant — Rhino Steel',
  addressLines: [
    '91/2B/1, Becharam Chatterjee Road,',
    'Behala,',
    'Kolkata – 700034, West Bengal',
  ],
  phones: [
    { display: '+91 90070 06050', tel: '+919007006050' },
    { display: '+91 91473 71345', tel: '+919147371345' },
  ],
  emails: ['tapan.rhinosteel@gmail.com', 'tkmitra08@gmail.com'],
  website: 'www.rhinosteel.com',
};
