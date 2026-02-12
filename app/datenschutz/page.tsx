import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Blumen Springer, Talheim.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <Section className="pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="mt-4 text-sm font-semibold text-foreground">
              Allgemeine Hinweise
            </h3>
            <p className="mt-2">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              2. Verantwortliche Stelle
            </h2>
            <p className="mt-2">
              Blumen Springer
              <br />
              Martin Springer
              <br />
              Bahnhofstraße 46
              <br />
              74388 Talheim
              <br />
              <br />
              Telefon: 07133 / 15450
              <br />
              E-Mail: blumen-springer@web.de
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="mt-4 text-sm font-semibold text-foreground">
              Server-Log-Dateien
            </h3>
            <p className="mt-2">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL,
              Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage,
              IP-Adresse.
            </p>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>

            <h3 className="mt-4 text-sm font-semibold text-foreground">
              Kontaktformular
            </h3>
            <p className="mt-2">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              4. Google Maps
            </h2>
            <p className="mt-2">
              Diese Seite nutzt über eine Einbindung den Kartendienst Google
              Maps. Anbieter ist die Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland. Beim Laden der Karte wird eine
              Verbindung zu den Servern von Google hergestellt. Hierbei kann
              Google erfahren, dass Sie unsere Webseite besucht haben.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-foreground">
              5. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen.
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
