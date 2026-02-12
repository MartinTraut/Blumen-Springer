import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { CTASection } from "@/components/cta-section";
import { ServiceDetail } from "@/components/service-detail";

export const metadata: Metadata = {
  title: "Leistungen – Hochzeitsfloristik, Trauerfloristik & mehr",
  description:
    "Entdecken Sie unsere floristischen Leistungen: Hochzeitsfloristik, Trauerfloristik, frische Sträuße, Pflanzen & Bio-Obst in Talheim bei Heilbronn.",
  alternates: {
    canonical: "https://www.blumen-springer.de/leistungen",
  },
};

const services = [
  {
    id: "hochzeit",
    title: "Hochzeitsfloristik",
    subtitle: "Für den schönsten Tag Ihres Lebens",
    description:
      "Wir nehmen uns Zeit für eine individuelle Beratung und helfen Ihnen, die perfekte Blumendekoration für Ihren besonderen Tag zu finden – ob Sie schon konkrete Vorstellungen haben oder kreative Anregungen suchen. Wir setzen auf frische, saisonale Blumen direkt von lokalen Erzeugern, um maximale Haltbarkeit und Qualität zu gewährleisten.",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/id1551de5d4d6ede0/version/1755361337/image.jpg",
    features: [
      "Brautsträuße & Anstecker",
      "Haarkränze & Armbänder",
      "Tischdekoration",
      "Kirchenschmuck",
      "Autodekoration",
      "Glasvasen zum Ausleihen",
    ],
    steps: [
      {
        step: "1",
        title: "Beratungsgespräch",
        text: "Wir lernen Ihre Wünsche, Ihren Stil und Ihre Location kennen.",
      },
      {
        step: "2",
        title: "Konzept & Moodboard",
        text: "Wir erstellen ein individuelles Blumenkonzept passend zu Ihrem Farbschema.",
      },
      {
        step: "3",
        title: "Umsetzung & Lieferung",
        text: "Am großen Tag liefern wir alles frisch und dekorieren vor Ort.",
      },
    ],
    locations: [
      "Heuchelberger Warte Leingarten",
      "Landgut Steng Lauffen",
      "Alte Reederei Heilbronn",
      "Schlossgut Lautenbach",
      "Schäfers auf dem Michaelsberg",
      "Schloss Horneck Gundelsheim",
      "Hotel Adler Asperg",
      "Flina Flein",
      "Novo Schwaigern",
      "Württemberger Hof Ludwigsburg",
    ],
  },
  {
    id: "trauer",
    title: "Trauerfloristik",
    subtitle: "Würdevoller Abschied",
    description:
      "In schweren Stunden begleiten wir Sie einfühlsam und pietätvoll. Wir fertigen individuelle Trauerkränze, Gestecke und Sargschmuck und liefern direkt an Kirchen, Friedhöfe oder Abschiedshallen in Talheim und Umgebung.",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/ia048dcf39def8d50/version/1731181687/image.jpg",
    features: [
      "Trauerkränze (klassisch & rund)",
      "Trauergestecke & Sargschmuck",
      "Kondolenz-Sträuße",
      "Grabkreuze & Herzen",
      "Grabpflege & Dauergrabpflege",
      "Lieferung an Kirchen & Friedhöfe",
    ],
    steps: [
      {
        step: "1",
        title: "Persönliche Beratung",
        text: "Einfühlsame Beratung zur passenden Gestaltung – auch telefonisch.",
      },
      {
        step: "2",
        title: "Individuelle Anfertigung",
        text: "Handwerkliche Fertigung mit ausgewählten Blumen und Materialien.",
      },
      {
        step: "3",
        title: "Pünktliche Lieferung",
        text: "Zuverlässige Lieferung direkt an den gewünschten Ort.",
      },
    ],
  },
  {
    id: "straeusse",
    title: "Sträuße & Pflanzen",
    subtitle: "Frische für jeden Tag",
    description:
      "Ob als Geschenk oder für Zuhause – unsere frischen Sträuße und Pflanzen bringen Farbe und Freude in jeden Raum. Wir bieten eine große Auswahl an saisonalen Schnittblumen, Zimmerpflanzen, Balkon- und Gartenpflanzen.",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/iad1eda90ebfee8ba/version/1462813837/image.jpg",
    features: [
      "Saisonale Blumensträuße",
      "Zimmerpflanzen & Hydrokulturen",
      "Balkon- & Gartenpflanzen",
      "Geschenkkörbe & Präsente",
      "Spezialöle, Duftöle & Honig",
      "Lieferservice in der Region",
    ],
    steps: [
      {
        step: "1",
        title: "Auswahl",
        text: "Wählen Sie im Laden oder telefonisch Ihren Wunschstrauß.",
      },
      {
        step: "2",
        title: "Handgefertigt",
        text: "Wir binden Ihren Strauß frisch und individuell.",
      },
      {
        step: "3",
        title: "Abholen oder Liefern",
        text: "Im Laden abholen oder bequem liefern lassen.",
      },
    ],
  },
  {
    id: "bio",
    title: "Bio-Obst & Gemüse",
    subtitle: "Frisch vom Erzeuger",
    description:
      "Neben unserer Floristik bieten wir Ihnen eine Auswahl an hochwertigem Bio-Obst und Gemüse – direkt von regionalen Erzeugern in Bioland- und Demeter-Qualität. Frische, die man schmeckt.",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i50165291c74bfa51/version/1713629575/image.jpg",
    features: [
      "Bioland-Qualität",
      "Demeter-Qualität",
      "Saisonales Sortiment",
      "Direkt vom Erzeuger",
      "Regionale Herkunft",
      "Täglich frisch",
    ],
    steps: [
      {
        step: "1",
        title: "Einkaufen",
        text: "Besuchen Sie uns und entdecken Sie unser aktuelles Sortiment.",
      },
      {
        step: "2",
        title: "Beraten lassen",
        text: "Wir informieren Sie über Herkunft und Saison.",
      },
      {
        step: "3",
        title: "Genießen",
        text: "Frisches Bio-Obst und Gemüse für Ihre Küche.",
      },
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i5e2effaf41620f38/version/1745615467/image.jpg"
            alt="Unsere Leistungen"
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
            Unsere Leistungen
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Für jeden Anlass die passende florale Begleitung –
            von der Hochzeit bis zum täglichen Blumengruß.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <ServiceDetail key={service.id} {...service} reversed={i % 2 !== 0} />
      ))}

      <CTASection />
    </>
  );
}
