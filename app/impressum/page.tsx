import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Blumen Springer, Bahnhofstraße 46, 74388 Talheim. Inhaber: Martin Springer.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <Section className="pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
          Impressum
        </h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-2">
              Blumen Springer
              <br />
              Inhaber: Martin Springer
              <br />
              Bahnhofstraße 46
              <br />
              74388 Talheim
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">Kontakt</h2>
            <p className="mt-2">
              Telefon: 07133 / 15450
              <br />
              Mobil: 0176 / 57898436
              <br />
              E-Mail: blumen-springer@web.de
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Umsatzsteuer-ID
            </h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              <br />
              [Bitte ergänzen]
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mt-2">
              Martin Springer
              <br />
              Bahnhofstraße 46
              <br />
              74388 Talheim
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Streitschlichtung
            </h2>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-botanical underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Haftung für Inhalte
            </h2>
            <p className="mt-2">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Haftung für Links
            </h2>
            <p className="mt-2">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              Urheberrecht
            </h2>
            <p className="mt-2">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
