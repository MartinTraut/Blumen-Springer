import { Hero } from "@/components/hero";
import { Section, SectionHeader } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { TrustBadges } from "@/components/trust-badges";
import { OpeningHours } from "@/components/opening-hours";
import { GalleryTeaser } from "@/components/gallery-teaser";
import { CTASection } from "@/components/cta-section";

const services = [
  {
    title: "Hochzeitsfloristik",
    description: "Brautsträuße, Tischdeko & Kirchenschmuck – individuell für Ihren großen Tag.",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/ieca88bb6c278c0a7/version/1739207394/image.jpg",
    href: "/leistungen#hochzeit",
  },
  {
    title: "Trauerfloristik",
    description: "Würdevolle Kränze und Gestecke – einfühlsam und pietätvoll.",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i8ff48623f379c613/version/1739207394/image.png",
    href: "/leistungen#trauer",
  },
  {
    title: "Sträuße & Pflanzen",
    description: "Frische Sträuße, Zimmerpflanzen & saisonale Arrangements.",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i5e2effaf41620f38/version/1745615467/image.jpg",
    href: "/leistungen#straeusse",
  },
  {
    title: "Bio-Obst & Gemüse",
    description: "Direkt vom Erzeuger in Bioland- und Demeter-Qualität.",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i23c3930614b74851/version/1739207394/image.jpg",
    href: "/leistungen#bio",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Warum Blumen Springer"
            title="Floristik aus Leidenschaft"
            description="Seit vielen Jahren stehen wir in Talheim für meisterliche Floristik, persönliche Beratung und die Liebe zu frischen, saisonalen Blumen."
          />
          <TrustBadges />
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Unsere Leistungen"
            title="Was wir für Sie tun"
            description="Von der Hochzeit bis zum täglichen Blumengruß – wir begleiten Sie mit handgefertigten Kreationen für jeden Anlass."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </Section>

      <GalleryTeaser />

      {/* Opening Hours & Location */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Besuchen Sie uns"
            title="Unser Geschäft in Talheim"
            description="Wir freuen uns auf Ihren Besuch in der Bahnhofstraße 46 – mit persönlicher Beratung und frischer Auswahl."
          />
          <OpeningHours />

          <div className="mt-8 overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary sm:aspect-[21/9]">
              <iframe
                title="Standort Blumen Springer, Bahnhofstraße 46, 74388 Talheim"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.189!3d49.084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBlumen+Springer!5e0!3m2!1sde!2sde!4v1"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
