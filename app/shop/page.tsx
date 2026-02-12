import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import { ShopCatalog } from "@/components/shop-catalog";
import { DeliveryInfo } from "@/components/delivery-info";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Shop – Sträuße, Pflanzen & Geschenke online bestellen",
  description:
    "Bestellen Sie frische Sträuße, saisonale Blumen und Topfpflanzen online bei Blumen Springer in Talheim. Lieferung ab 8,50 € oder Abholung im Geschäft.",
  alternates: {
    canonical: "https://www.blumen-springer.de/shop",
  },
};

const SHOP_URL = "https://blumen-springer.lokalerflorist.de/";

const products = [
  {
    name: "Rosenstrauß bunt",
    description: "Farbenfroher Rosenstrauß in leuchtenden Farben – perfekt als Geschenk für jeden Anlass.",
    price: "35,00 €",
    image: "https://cdn.lokalerflorist.de/products/default/products/rosen-bunt-1_500x-1.jpg",
    category: "straeusse",
    href: SHOP_URL,
    badge: "Beliebt",
  },
  {
    name: "Rosenstrauß pastell",
    description: "Zarter Rosenstrauß in sanften Pastelltönen – elegant und zeitlos schön.",
    price: "35,00 €",
    image: "https://cdn.lokalerflorist.de/products/default/products/rosen-1a_500x-1.jpg",
    category: "straeusse",
    href: SHOP_URL,
  },
  {
    name: "Überraschungsstrauß",
    description: "Unser Florist wählt die schönsten saisonalen Blumen für Sie aus – immer eine Freude.",
    price: "27,50 €",
    image: "https://cdn.lokalerflorist.de/products/default/products/ueberaschung0_500x-1.jpg",
    category: "straeusse",
    href: SHOP_URL,
  },
  {
    name: "Pflückstrauß",
    description: "Natürlich und ungezwungen – wie frisch von der Wiese gepflückt.",
    price: "30,00 €",
    image: "https://cdn.lokalerflorist.de/products/default/products/plukbouquet01_500x-1.jpg",
    category: "straeusse",
    href: SHOP_URL,
  },
  {
    name: "Strauß traditionell bunt",
    description: "Klassischer Strauß in bunten Farben – traditionell gebunden mit saisonalen Blumen.",
    price: "30,00 €",
    image: "https://cdn.lokalerflorist.de/products/274be8a81b0c9d36896631921f2deec8a2c3f1f7d8f67c85e8730df93fe3c9a8/products/bouquet-trad-bunt01_500x-1.jpg",
    category: "straeusse",
    href: SHOP_URL,
  },
  {
    name: "Strauß traditionell pastell",
    description: "Traditionell gebundener Strauß in sanften Pastellfarben – zeitlos elegant.",
    price: "30,00 €",
    image: "https://cdn.lokalerflorist.de/products/default/products/bouquet-trad-pastel01_500x-1.jpg",
    category: "straeusse",
    href: SHOP_URL,
  },
  {
    name: "Tulpen Überraschung",
    description: "Frische Tulpen der Saison – bunt gemischt oder in Ihrer Wunschfarbe.",
    price: "ab 25,00 €",
    image: "https://cdn.lokalerflorist.de/products/default/products/1b-tulpen_500.jpg",
    category: "saisonal",
    href: SHOP_URL,
    badge: "Saisonal",
  },
  {
    name: "Frühlings Überraschung",
    description: "Ein bunter Mix aus den schönsten Frühlingsblumen – frisch und fröhlich.",
    price: "ab 25,00 €",
    image: "https://cdn.lokalerflorist.de/products/default/products/1a-fruehling_500.jpg",
    category: "saisonal",
    href: SHOP_URL,
    badge: "Saisonal",
  },
  {
    name: "Topfpflanzen",
    description: "Zimmerpflanzen, Grünpflanzen und blühende Topfpflanzen für Ihr Zuhause.",
    price: "ab 20,00 €",
    image: "https://cdn.lokalerflorist.de/products/default/products/topfpflanzen-wunsch-produkt1_500x-1.png",
    category: "pflanzen",
    href: SHOP_URL,
  },
  {
    name: "Wunsch-Strauß",
    description: "Ihr individueller Strauß nach Ihren Vorstellungen – Farbe, Größe und Stil frei wählbar.",
    price: "ab 25,00 €",
    image: "https://cdn.lokalerflorist.de/products/products/wunsch-produkt_500x-1.png",
    category: "individuell",
    href: SHOP_URL,
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/iece1106cffebaf36/version/1755361450/image.jpg"
            alt="Blumen Springer Shop"
            fill
            priority
            quality={95}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/80">
            Online-Shop
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Unsere Produkte
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Frische Sträuße, saisonale Kreationen und Topfpflanzen –
            bequem online bestellen oder im Laden abholen.
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Sortiment"
            title="Jetzt bestellen"
            description="Wählen Sie aus unserem Sortiment und bestellen Sie bequem online – wir liefern in die Region oder bereiten Ihre Bestellung zur Abholung vor."
          />
          <ShopCatalog products={products} />
        </div>
      </Section>

      {/* Delivery Info */}
      <Section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Service"
            title="Lieferung & Abholung"
          />
          <DeliveryInfo />
        </div>
      </Section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
