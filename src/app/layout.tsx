import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurumandember.com"),
  title: {
    default: "Aurum & Ember — Fine Dining",
    template: "%s | Aurum & Ember",
  },
  description:
    "A fine dining experience where fire, time, and devotion converge. Seasonal tasting menus crafted with the finest ingredients in an atmosphere of understated luxury.",
  keywords: [
    "fine dining",
    "restaurant",
    "tasting menu",
    "luxury dining",
    "seasonal cuisine",
    "New York restaurant",
  ],
  openGraph: {
    title: "Aurum & Ember — Fine Dining",
    description:
      "Where gold meets fire. A fine dining experience honoring the alchemy of elemental cooking.",
    url: "https://aurumandember.com",
    siteName: "Aurum & Ember",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Aurum & Ember Fine Dining Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurum & Ember — Fine Dining",
    description: "Where gold meets fire. Seasonal tasting menus in an atmosphere of understated luxury.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { PageTransition } from "@/components/layout/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Aurum & Ember",
    image: "https://aurumandember.com/images/hero/hero.jpg",
    description: "A fine dining experience where fire, time, and devotion converge.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "142 West 24th Street",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10011",
      addressCountry: "US",
    },
    servesCuisine: "Contemporary Fine Dining",
    priceRange: "$$$$",
    telephone: "+12125550187",
    url: "https://aurumandember.com",
    acceptsReservations: "True",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:30",
        closes: "22:00",
      }
    ]
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${outfit.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
