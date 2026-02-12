import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCTA } from "@/components/mobile-cta";
import "./globals.css";

const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blumen-springer.de"),
  title: {
    default: "Blumen Springer – Floristik, Hochzeitsblumen & Bio-Obst | Talheim bei Heilbronn",
    template: "%s | Blumen Springer Talheim",
  },
  description:
    "Ihr Florist in Talheim bei Heilbronn: Hochzeitsfloristik, Trauerfloristik, frische Sträuße, Bio-Obst & Gemüse. Meisterliche Qualität mit Liebe zum Detail. ☎ 07133/15450",
  keywords: [
    "Florist Talheim",
    "Blumenladen Talheim",
    "Blumenladen Heilbronn",
    "Hochzeitsfloristik Heilbronn",
    "Hochzeitsfloristik Talheim",
    "Trauerfloristik Heilbronn",
    "Brautstrauß Heilbronn",
    "Blumen bestellen Talheim",
    "Bio Obst Talheim",
    "Blumen Springer",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Blumen Springer",
    title: "Blumen Springer – Floristik mit Leidenschaft in Talheim",
    description:
      "Hochzeitsfloristik, frische Sträuße & Bio-Obst – handgefertigt mit Liebe zum Detail. Ihr Florist in Talheim bei Heilbronn.",
    images: [
      {
        url: "https://image.jimcdn.com/app/cms/image/transf/dimension=4096x4096:format=jpg/path/s95596f5193805018/image/i5e2effaf41620f38/version/1745615467/image.jpg",
        width: 1200,
        height: 630,
        alt: "Blumen Springer – Floristik in Talheim",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.blumen-springer.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Florist",
        "@id": "https://www.blumen-springer.de/#florist",
        name: "Blumen Springer",
        alternateName: "Springer-Blumen",
        url: "https://www.blumen-springer.de",
        telephone: "+49713315450",
        email: "blumen-springer@web.de",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bahnhofstraße 46",
          addressLocality: "Talheim",
          postalCode: "74388",
          addressRegion: "Baden-Württemberg",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 49.0836,
          longitude: 9.1917,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "12:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "14:30",
            closes: "18:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "14:00",
          },
        ],
        sameAs: ["https://www.instagram.com/blumen_springer/"],
        image: "https://image.jimcdn.com/app/cms/image/transf/dimension=4096x4096:format=jpg/path/s95596f5193805018/image/i5e2effaf41620f38/version/1745615467/image.jpg",
        description:
          "Frische Blumen, Hochzeitsfloristik & Bio-Obst und Gemüse in Talheim und der Region Heilbronn. Gärtnermeisterin & ausgebildeter Florist – Handwerk auf höchstem Niveau.",
        priceRange: "€€",
        areaServed: [
          "Talheim",
          "Heilbronn",
          "Flein",
          "Ilsfeld",
          "Lauffen am Neckar",
          "Untergruppenbach",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Floristik-Leistungen",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hochzeitsfloristik" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trauerfloristik" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blumen & Pflanzen" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bio-Obst & Gemüse" } },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.blumen-springer.de/#organization",
        name: "Blumen Springer",
        url: "https://www.blumen-springer.de",
        logo: "https://www.blumen-springer.de/logo.png",
        founder: {
          "@type": "Person",
          name: "Martin Springer",
          jobTitle: "Florist",
        },
      },
    ],
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${heading.variable} ${body.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
