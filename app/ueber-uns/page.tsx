import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import { TrustBadges } from "@/components/trust-badges";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Über uns – Ihre Floristen in Talheim",
  description:
    "Lernen Sie Blumen Springer kennen: Martin Springer (ausgebildeter Florist) und seine Frau (Gärtnermeisterin) – Ihr Floristik-Team in Talheim bei Heilbronn.",
  alternates: {
    canonical: "https://www.blumen-springer.de/ueber-uns",
  },
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i08d3f9b61bd042e3/version/1705168552/image.jpg"
            alt="Unser Atelier"
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
            Blumen Springer
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Über uns
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Floristik ist für uns nicht nur ein Beruf – es ist unsere Berufung.
          </p>
        </div>
      </section>

      {/* Story */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i5e2effaf41620f38/version/1745615467/image.jpg"
                alt="Floristik-Handwerk bei Blumen Springer"
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-botanical">
                Unsere Geschichte
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-primary sm:text-4xl">
                Floristik aus Berufung
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Hinter Blumen Springer steht ein eingespieltes Team: Martin Springer,
                  ausgebildeter Florist, und seine Frau, Gärtnermeisterin. Gemeinsam
                  verbinden sie fundiertes Fachwissen mit kreativer Leidenschaft.
                </p>
                <p>
                  Für uns ist Floristik mehr als ein Handwerk – es ist die Kunst, mit
                  Blumen Emotionen auszudrücken. Ob bei einer Hochzeit, einem Trauerfall
                  oder als täglicher Blumengruß: Wir möchten unseren Kunden stets nur
                  das Beste aus der Blumenwelt bieten.
                </p>
                <p>
                  In unserem Geschäft in der Bahnhofstraße in Talheim empfangen wir Sie
                  persönlich und beraten Sie individuell. Neben unserer Floristik finden
                  Sie bei uns auch ausgewähltes Bio-Obst und Gemüse in Bioland- und
                  Demeter-Qualität – direkt von regionalen Erzeugern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Unsere Philosophie"
            title="Was uns antreibt"
            description="Wir glauben, dass jeder Anlass eine individuelle florale Begleitung verdient – gefertigt mit Sorgfalt und dem Blick für das Besondere."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Qualität",
                text: "Wir verwenden nur frische, saisonale Blumen – bevorzugt von lokalen Erzeugern. So garantieren wir maximale Haltbarkeit und natürliche Schönheit.",
              },
              {
                title: "Persönlichkeit",
                text: "Keine Kreation gleicht der anderen. Wir hören zu, beraten ehrlich und gestalten individuell nach Ihren Wünschen und Vorstellungen.",
              },
              {
                title: "Nachhaltigkeit",
                text: "Von regionalen Blumen bis Bio-Obst in Demeter-Qualität – wir setzen auf kurze Wege und bewussten Umgang mit der Natur.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-8">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Trust */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Unser Versprechen"
            title="Dafür stehen wir"
          />
          <TrustBadges />
        </div>
      </Section>

      {/* Delivery Areas */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Liefergebiet"
            title="Wir sind für Sie da"
            description="Unser Lieferservice bringt Blumengrüße und mehr in die gesamte Region."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Talheim",
              "Heilbronn",
              "Flein",
              "Ilsfeld",
              "Lauffen am Neckar",
              "Untergruppenbach",
              "Abstatt",
              "Brackenheim",
              "Gemmrigheim",
              "Neckarwestheim",
              "Sontheim",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full bg-botanical-light px-5 py-2 text-sm font-medium text-botanical"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
