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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mintdetail.co.uk"),
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
  ],
  authors: [{ name: "Mint Detail" }],
  creator: "Mint Detail",
  publisher: "Mint Detail",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.mintdetail.co.uk",
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
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Car Detailing & Ceramic Coating | Mint Detail",
    description:
      "Expert mobile car detailing in Earls Colne, North Essex. Ceramic coating, paint correction & full valet.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

// ─── Structured Data ────────────────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mintdetail.co.uk/#business",
  name: "Mint Detail",
  url: "https://www.mintdetail.co.uk",
  telephone: "+447732693857",
  image: "https://www.mintdetail.co.uk/og-image.jpg",
  description:
    "Fully insured mobile automotive valeting and detailing service based in Earls Colne, North Essex. Specialising in ceramic coating, paint correction, machine polishing, and premium car detailing delivered to your door.",
  priceRange: "£££",
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
  areaServed: [
    { "@type": "City", name: "Earls Colne" },
    { "@type": "City", name: "Colchester" },
    { "@type": "City", name: "Halstead" },
    { "@type": "City", name: "Braintree" },
    { "@type": "City", name: "Coggeshall" },
    { "@type": "City", name: "Sudbury" },
    { "@type": "AdministrativeArea", name: "North Essex" },
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
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "James T." },
      reviewBody:
        "Had a pre-sale detail done on my Nissan 350Z right on the driveway. Incredibly professional service — hours of meticulous attention to detail that completely transformed the car. It sold within 24 hours of listing. I cannot recommend Mint Detail highly enough.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Sarah M." },
      reviewBody:
        "Booked a full valet on my BMW M3. From the moment they arrived with all their professional kit I knew my car was in safe hands. The paint looked better than when I bought it. Five stars isn't enough.",
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
    name: "Ceramic Coating — North Essex",
    description:
      "Professional-grade ceramic coating delivering 2–5 year paint protection, hydrophobic properties, and showroom gloss. Applied to paint, glass, and wheels.",
    provider: { "@id": "https://www.mintdetail.co.uk/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "North Essex" },
    serviceType: "Ceramic Coating",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Paint Correction — North Essex",
    description:
      "Multi-stage machine polishing to remove swirl marks, scratches, and oxidation, restoring the paint to a defect-free, high-gloss finish.",
    provider: { "@id": "https://www.mintdetail.co.uk/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "North Essex" },
    serviceType: "Paint Correction",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full Valet — Mobile, North Essex",
    description:
      "Comprehensive mobile full valet service covering exterior wash, clay bar, hand polish, interior deep clean, seat shampoo, and carpet extraction.",
    provider: { "@id": "https://www.mintdetail.co.uk/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "North Essex" },
    serviceType: "Full Car Valet",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior Detailing — Mobile, North Essex",
    description:
      "Professional interior detailing including steam clean, seat shampooing, leather care, carpet extraction, and full interior glass clean.",
    provider: { "@id": "https://www.mintdetail.co.uk/#business" },
    areaServed: { "@type": "AdministrativeArea", name: "North Essex" },
    serviceType: "Interior Car Detailing",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you come to my home or workplace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that's the whole point. We're fully mobile and bring our professional setup directly to you, whether you're at home or at work. All we need is access to your vehicle and space to work.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between a valet and a full detail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A valet is a cleaning service — wash, vacuum, and wipe-down. A full detail goes much deeper: machine polishing to remove paint defects, clay bar decontamination, steam interior cleaning, and protective coatings. Think of a valet as a thorough clean and a detail as a complete restoration and protection treatment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does ceramic coating last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professionally applied ceramic coating typically lasts 2–5 years depending on the product, the paint condition beforehand, and ongoing maintenance. We recommend a maintenance wash every 3–4 months to maximise longevity.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Earls Colne and all of North Essex, including Colchester, Halstead, Braintree, Coggeshall, and Sudbury, plus surrounding villages. Get in touch if you're unsure whether we cover your area.",
      },
    },
    {
      "@type": "Question",
      name: "Are you fully insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We carry full public liability insurance and care, custody & control (CCC) insurance, meaning your vehicle is covered while in our care.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a full detail take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mini valet typically takes 1.5–2 hours. A full valet takes 3–4 hours. A premium detail with machine polishing can take 6–8 hours. A full ceramic coating package may span a full day or two depending on the prep work required.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to prepare my car beforehand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all — we handle everything. The only thing we ask is clear access to the vehicle and that any personal items you'd like to keep are removed from the interior before we start.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.mintdetail.co.uk",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {serviceSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
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
