import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import { GalleryGrid } from "@/components/gallery-grid";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Impressionen – Galerie unserer floralen Kreationen",
  description:
    "Entdecken Sie Bilder unserer Hochzeitsfloristik, Sträuße und Blumenkreationen. Lassen Sie sich inspirieren – Blumen Springer in Talheim bei Heilbronn.",
  alternates: {
    canonical: "https://www.blumen-springer.de/impressionen",
  },
};

const J = "https://image.jimcdn.com/app/cms/image/transf";
const P = "path/s95596f5193805018/image";

const galleryImages = [
  // Homepage & allgemeine Floristik
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i08d3f9b61bd042e3/version/1705168552/image.jpg`, alt: "Blumenstrauß – Blumen Springer" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i212be580e2f6ab06/version/1710581726/image.jpg`, alt: "Hochzeitsdekoration mit frischen Blumen", span: "tall" as const },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i0767753a671adeb2/version/1740349446/image.jpg`, alt: "Florale Tischdekoration" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/ie195bfca91f36e3a/version/1713630113/image.jpg`, alt: "Blumenarrangement in Pastelltönen", span: "tall" as const },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/ia428e1ccba590942/version/1745615467/image.jpg`, alt: "Brautstrauß mit Rosen" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/id4c380bc91e8a88f/version/1745615467/image.jpg`, alt: "Blumenschmuck für Hochzeiten", span: "tall" as const },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i50e41fa1d8bdda7e/version/1745615467/image.jpg`, alt: "Saisonaler Blumenstrauß" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i51918dbf7b8e287e/version/1745615467/image.jpg`, alt: "Eleganter Blumenschmuck" },
  // Hochzeitsfloristik – Brautstrauß, Traubogen, Tischdeko
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i1b36d12b2b7a390c/version/1736064546/brautstrau%C3%9F-heilbronn.jpg`, alt: "Brautstrauß Heilbronn" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/icf23a85c083fe9c7/version/1735844738/traubogen-dekoration-trauung-heilbronn.jpg`, alt: "Traubogen – Dekoration Trauung Heilbronn", span: "tall" as const },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i3f135d965d1f9956/version/1735844799/tischdeko-blumendeko-hochzeit-heilbronn.jpg`, alt: "Tischdeko – Blumendeko Hochzeit Heilbronn" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i68feb838346ab647/version/1755365184/image.jpg`, alt: "Hochzeitsfloristik – Foto: Melanie Metz" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i84bc8065282b2cc6/version/1745615467/image.jpg`, alt: "Kreativer Blumenstrauß", span: "tall" as const },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i9dd488d7127a7ec8/version/1745615467/image.jpg`, alt: "Hochzeitsblumen Arrangement" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/ia176d93465c35cdc/version/1745615467/image.jpg`, alt: "Festliche Blumendekoration" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i7f3e60ba4d0ea742/version/1735844614/image.jpg`, alt: "Traubogen Hochzeit" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i7c06c8d1b28abed7/version/1735844614/image.jpg`, alt: "Autoschmuck Hochzeit" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/id1551de5d4d6ede0/version/1755361337/image.jpg`, alt: "Hochzeitsdekoration Heuchelberger Warte", span: "tall" as const },
  // Trauerfloristik
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/icf88fd152553c70a/version/1739559968/image.jpg`, alt: "Trauerfloristik – Gesteck" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/ida27c5ebf3fc2cd6/version/1742144588/image.jpg`, alt: "Trauerkranz mit Blumen" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i97fd667c4ba244ea/version/1731181687/image.jpg`, alt: "Trauerfloristik Arrangement", span: "tall" as const },
  // Blumen & Pflanzen
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i3a8b463619ec4421/version/1745615467/image.jpg`, alt: "Blumengesteck für besondere Anlässe" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i5e2effaf41620f38/version/1745615467/image.jpg`, alt: "Blumen Springer Kreation" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i8916d2f42fe2abc6/version/1745615467/image.jpg`, alt: "Florale Dekoration" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/iad1eda90ebfee8ba/version/1462813837/image.jpg`, alt: "Blumenarrangement im Geschäft" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i53100a3c6ba43696/version/1462813837/image.jpg`, alt: "Frische Blumen im Laden" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/id496588bf4a3c8a1/version/1745615467/image.jpg`, alt: "Blumenschmuck Detail", span: "tall" as const },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i67f3420f8373bc97/version/1745615467/image.jpg`, alt: "Handgebundener Strauß" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i4e4cf52bdbf24a53/version/1745615467/image.jpg`, alt: "Blumenstrauß in warmen Tönen" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/if78978a39366b4c3/version/1745615467/image.jpg`, alt: "Eventfloristik Blumen Springer" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/ibbc7449d9edb6fd1/version/1745615467/image.jpg`, alt: "Üppiges Blumengesteck" },
  // Bio-Obst & Gemüse
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i7a3f9d2a2746eb62/version/1713629579/image.jpg`, alt: "Bio-Obst Auswahl" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/i34d4b4dd26fd47be/version/1713629579/image.jpg`, alt: "Frisches Bio-Gemüse" },
  // Weitere Kreationen
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/ia54506b678091972/version/1745615467/image.jpg`, alt: "Hochzeitsdekoration Tisch" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/ib2c55c9a27d5786b/version/1745615467/image.jpg`, alt: "Floristik für Events" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/if3c912ff9d9b58c9/version/1745615467/image.jpg`, alt: "Blumenarrangement Blumen Springer" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/if6b444043c331823/version/1745615467/image.jpg`, alt: "Blumenkranz" },
  { src: `${J}/dimension=2048x2048:format=jpg/${P}/ib22a5e4db88a8323/version/1745615467/image.jpg`, alt: "Blumenarrangement Hochzeit", span: "tall" as const },
];

export default function ImpressionenPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i51918dbf7b8e287e/version/1745615467/image.jpg"
            alt="Impressionen"
            fill
            priority
            quality={95}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/80">
            Galerie
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Impressionen
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Einblicke in unsere floralen Kreationen – von romantischen Hochzeitsarrangements
            bis zu alltäglichen Blumengrüßen.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
