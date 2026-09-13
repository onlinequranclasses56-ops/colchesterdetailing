import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mintdetail.co.uk"),

  applicationName: "Mint Detail",
  category: "Automotive Services",

  title: {
    template: "%s | Mint Detail",
    default:
      "Mobile Car Detailing & Ceramic Coating in Earls Colne, North Essex | Mint Detail",
  },
  description:
    "Expert mobile car detailing in Earls Colne, North Essex. Ceramic coating, paint correction & full valet service at your door. 5★ rated, fully insured. Call +44 7732 693857.",
  keywords: [
    "mobile car detailing Earls Colne",
    "ceramic coating Colchester",
    "paint correction North Essex",
    "mobile valet Essex",
    "car detailing Halstead",
    "ceramic coating Braintree",
    "mobile valeting Coggeshall",
    "paint correction Sudbury",
    "car detailing Earls Colne",
    "full valet North Essex",
    "car valeting North Essex",
    "mobile car wash Colchester",
    "paint protection film Essex",
  ],
  authors: [{ name: "Mint Detail", url: "https://www.mintdetail.co.uk" }],
  creator: "Mint Detail",
  publisher: "Mint Detail",

  // ── Indexing ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Google Search Console verification ─────────────────────────────────────
  verification: {
    google: "VxFDnCP7IHm3kTP3DtGxagAST-u6HHrMbo5R15e4Vso",
  },

  // ── Canonical & hreflang ───────────────────────────────────────────────────
  alternates: {
    canonical: "https://www.mintdetail.co.uk/",
    languages: {
      "en-GB": "https://www.mintdetail.co.uk/",
      "x-default": "https://www.mintdetail.co.uk/",
    },
  },

  // ── Disable phone-number auto-detection on iOS (avoids content shifts) ─────
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // ── OpenGraph ──────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.mintdetail.co.uk/",
    siteName: "Mint Detail",
    title:
      "Mobile Car Detailing & Ceramic Coating in Earls Colne, North Essex | Mint Detail",
    description:
      "Expert mobile car detailing in Earls Colne, North Essex. Ceramic coating, paint correction & full valet — we come to you. 5★ rated, fully insured.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mint Detail — Mobile Car Detailing in Earls Colne, North Essex",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@mintdetailuk",
    creator: "@mintdetailuk",
    title: "Mobile Car Detailing & Ceramic Coating | Mint Detail",
    description:
      "Expert mobile car detailing in Earls Colne, North Essex. Ceramic coating, paint correction & full valet.",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Mint Detail — Mobile Car Detailing in Earls Colne, North Essex",
      },
    ],
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.webmanifest",
};

// ─── Structured Data ─────────────────────────────────────────────────────────

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.mintdetail.co.uk/#website",
  url: "https://www.mintdetail.co.uk/",
  name: "Mint Detail",
  description:
    "Mobile car detailing and ceramic coating in Earls Colne, North Essex.",
  publisher: { "@id": "https://www.mintdetail.co.uk/#business" },
  inLanguage: "en-GB",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "@id": "https://www.mintdetail.co.uk/#business",
  name: "Mint Detail",
  url: "https://www.mintdetail.co.uk/",
  telephone: "+447732693857",

  image: [
    "https://www.mintdetail.co.uk/og-image.jpg",
  ],
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.mintdetail.co.uk/#logo",
    url: "https://www.mintdetail.co.uk/logo.png",
    contentUrl: "https://www.mintdetail.co.uk/logo.png",
    width: 200,
    height: 200,
    caption: "Mint Detail logo",
  },

  description:
    "Fully insured mobile automotive valeting and detailing service based in Earls Colne, North Essex. Specialising in ceramic coating, paint correction, machine polishing, and premium car detailing delivered to your door.",
  slogan: "Showroom-Finish Detailing, Delivered to Your Driveway",
  priceRange: "£££",
  paymentAccepted: "Cash, Bank Transfer",
  currenciesAccepted: "GBP",

  address: {
    "@type": "PostalAddress",
    streetAddress: "55 Foundry Ln",
    addressLocality: "Earls Colne",
    addressRegion: "Essex",
    postalCode: "CO6 2SB",
    addressCountry: "GB",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.9197,
    longitude: 0.6856,
  },

  hasMap:
    "https://www.google.com/maps/place/55+Foundry+Ln,+Earls+Colne,+Colchester+CO6+2SB",

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+447732693857",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: ["en"],
  },

  knowsAbout: [
    "Car Detailing",
    "Ceramic Coating",
    "Paint Correction",
    "Machine Polishing",
    "Paint Protection Film",
    "Mobile Valeting",
    "Interior Detailing",
    "Engine Bay Detailing",
    "Clay Bar Treatment",
    "Hydrophobic Coatings",
  ],

  areaServed: [
    { "@type": "City", name: "Earls Colne" },
    { "@type": "City", name: "Colchester" },
    { "@type": "City", name: "Halstead" },
    { "@type": "City", name: "Braintree" },
    { "@type": "City", name: "Coggeshall" },
    { "@type": "City", name: "Sudbury" },
    { "@type": "AdministrativeArea", name: "North Essex" },
    { "@type": "AdministrativeArea", name: "Essex" },
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "27",
    bestRating: "5",
    worstRating: "1",
  },

  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "James T." },
      reviewBody:
        "Had a pre-sale detail done on my Nissan 350Z right on the driveway. Incredibly professional service — hours of meticulous attention to detail that completely transformed the car. It sold within 24 hours of listing. I cannot recommend Mint Detail highly enough.",
      datePublished: "2024-09-01",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sarah M." },
      reviewBody:
        "Booked a full valet on my BMW M3. From the moment they arrived with all their professional kit I knew my car was in safe hands. The paint looked better than when I bought it. Five stars isn't enough.",
      datePublished: "2024-10-15",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Tom K." },
      reviewBody:
        "Had the ceramic coating package done on my new Golf R. Flawless results — the paint has incredible depth and water just sheets straight off. Really professional attitude from start to finish.",
      datePublished: "2024-11-20",
    },
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
    },
  ],

  sameAs: [
    "https://www.facebook.com/mintdetailuk",
    "https://www.instagram.com/mintdetailuk",
  ],
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mintdetail.co.uk/#service-ceramic-coating",
    name: "Ceramic Coating — North Essex",
    alternateName: "Car Ceramic Coating Colchester",
    url: "https://www.mintdetail.co.uk/#services",
    description:
      "Professional-grade ceramic coating delivering 2–5 year paint protection, hydrophobic properties, and showroom gloss. Applied to paint, glass, and wheels. Mobile service across North Essex.",
    provider: { "@id": "https://www.mintdetail.co.uk/#business" },
    areaServed: [
      { "@type": "City", name: "Colchester" },
      { "@type": "AdministrativeArea", name: "North Essex" },
    ],
    serviceType: "Ceramic Coating",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "295",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "295",
        priceCurrency: "GBP",
        description: "Starting price — varies by vehicle size",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mintdetail.co.uk/#service-paint-correction",
    name: "Paint Correction — North Essex",
    alternateName: "Machine Polishing Earls Colne",
    url: "https://www.mintdetail.co.uk/#services",
    description:
      "Multi-stage machine polishing to remove swirl marks, scratches, and oxidation, restoring the paint to a defect-free, high-gloss finish. Mobile service across North Essex.",
    provider: { "@id": "https://www.mintdetail.co.uk/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "North Essex" },
    serviceType: "Paint Correction",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "250",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "250",
        priceCurrency: "GBP",
        description: "Starting price — varies by vehicle and paint condition",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mintdetail.co.uk/#service-full-valet",
    name: "Full Valet — Mobile, North Essex",
    alternateName: "Mobile Full Car Valet Essex",
    url: "https://www.mintdetail.co.uk/#packages",
    description:
      "Comprehensive mobile full valet covering exterior wash, clay bar, hand polish, interior deep clean, seat shampoo, and carpet extraction. Delivered to your door across North Essex.",
    provider: { "@id": "https://www.mintdetail.co.uk/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "North Essex" },
    serviceType: "Full Car Valet",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "145",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "145",
        priceCurrency: "GBP",
        description: "Starting price — varies by vehicle size",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mintdetail.co.uk/#service-interior-detailing",
    name: "Interior Detailing — Mobile, North Essex",
    alternateName: "Car Interior Deep Clean Essex",
    url: "https://www.mintdetail.co.uk/#services",
    description:
      "Professional interior detailing including steam clean, seat shampooing, leather care, carpet extraction, and full interior glass clean. Mobile service across North Essex.",
    provider: { "@id": "https://www.mintdetail.co.uk/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "North Essex" },
    serviceType: "Interior Car Detailing",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "120",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "120",
        priceCurrency: "GBP",
        description: "Starting price — varies by vehicle size",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mintdetail.co.uk/#service-mini-valet",
    name: "Mini Valet — Mobile, North Essex",
    alternateName: "Mobile Car Wash Earls Colne",
    url: "https://www.mintdetail.co.uk/#packages",
    description:
      "Quick refresh mobile valet: exterior hand wash, snow foam, wheel clean, window clean, interior vacuum, dashboard wipe-down, and tyre dressing.",
    provider: { "@id": "https://www.mintdetail.co.uk/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "North Essex" },
    serviceType: "Mini Car Valet",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "75",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "75",
        priceCurrency: "GBP",
        description: "Starting price — varies by vehicle size",
      },
    },
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.mintdetail.co.uk/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you come to my home or workplace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that's the whole point. Mint Detail is a fully mobile service and we bring our professional detailing setup directly to you, whether you're at home or at work in Earls Colne, Colchester, Halstead, Braintree, or anywhere across North Essex. All we need is access to your vehicle and space to work.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between a valet and a full detail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A valet is primarily a cleaning service — exterior wash, interior vacuum, and a wipe-down. A full detail goes much deeper: machine polishing to remove paint defects and swirl marks, clay bar decontamination, steam interior cleaning, leather conditioning, and the application of protective ceramic coatings. Think of a valet as a thorough clean and a detail as a complete restoration and protection treatment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does ceramic coating last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professionally applied ceramic coating typically lasts 2 to 5 years, depending on the product used, the condition of the paint beforehand, and how the vehicle is maintained afterwards. We recommend a maintenance wash every 3 to 4 months using pH-neutral shampoo to maximise longevity and keep your coating performing at its best.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover for mobile car detailing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're based in Earls Colne and cover all of North Essex including Colchester, Halstead, Braintree, Coggeshall, and Sudbury, plus surrounding villages across the region. We also travel into South Suffolk. Get in touch if you're unsure whether we cover your area.",
      },
    },
    {
      "@type": "Question",
      name: "Are you fully insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. Mint Detail carries full public liability insurance and care, custody and control (CCC) insurance. CCC cover specifically protects your vehicle while it is in our care — so you have complete peace of mind from the moment we arrive to the moment we leave.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a full car detail take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the service. A mini valet typically takes 1.5 to 2 hours. A full valet takes 3 to 4 hours. A premium detail including machine polishing can take 6 to 8 hours. A full ceramic coating package may span a full day or two depending on the vehicle size and paint condition. We always give you a realistic time estimate before starting.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to prepare my car before the detail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all — we handle everything. The only things we ask are: clear, unobstructed access to your vehicle, and that any personal items you want to keep safe are removed from the interior before we begin.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.mintdetail.co.uk/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Mint Detail — Mobile Car Detailing North Essex",
      item: "https://www.mintdetail.co.uk/",
    },
  ],
};

// ─── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Service schemas */}
        {serviceSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {/* FAQPage schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* BreadcrumbList schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="grain bg-[#0a0a0a] text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
