import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { OpeningHours } from "@/components/opening-hours";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt – Anfrage, Adresse & Öffnungszeiten",
  description:
    "Kontaktieren Sie Blumen Springer in Talheim: ☎ 07133/15450, blumen-springer@web.de. Bahnhofstraße 46, 74388 Talheim. Mo-Fr 08:00-18:30, Sa 08:00-14:00.",
  alternates: {
    canonical: "https://www.blumen-springer.de/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i4e4cf52bdbf24a53/version/1745615467/image.jpg"
            alt="Kontakt"
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
            Kontakt
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Sprechen Sie uns an
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Ob Frage, Wunsch oder Terminvereinbarung – wir sind gerne für Sie da.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Details */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-primary">
                Kontaktdaten
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Besuchen Sie uns in unserem Geschäft oder kontaktieren Sie uns
                telefonisch, per E-Mail oder über das Kontaktformular.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-botanical-light">
                    <MapPin className="h-5 w-5 text-botanical" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Adresse</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Blumen Springer
                      <br />
                      Bahnhofstraße 46
                      <br />
                      74388 Talheim
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-botanical-light">
                    <Phone className="h-5 w-5 text-botanical" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Telefon</p>
                    <a
                      href="tel:+49713315450"
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-botanical"
                    >
                      07133 / 15450
                    </a>
                    <a
                      href="tel:+4917657898436"
                      className="mt-0.5 block text-sm text-muted-foreground transition-colors hover:text-botanical"
                    >
                      0176 / 57898436 (Mobil)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-botanical-light">
                    <Mail className="h-5 w-5 text-botanical" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">E-Mail</p>
                    <a
                      href="mailto:blumen-springer@web.de"
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-botanical"
                    >
                      blumen-springer@web.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-botanical-light">
                    <Instagram className="h-5 w-5 text-botanical" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Instagram</p>
                    <a
                      href="https://www.instagram.com/blumen_springer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-botanical"
                    >
                      @blumen_springer
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-semibold text-primary">
                Anfrage senden
              </h2>
              <p className="mt-3 mb-8 text-sm leading-relaxed text-muted-foreground">
                Beschreiben Sie uns Ihren Wunsch und wir melden uns schnellstmöglich bei Ihnen.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Opening Hours */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Besuchen Sie uns"
            title="Öffnungszeiten & Anfahrt"
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
    </>
  );
}
