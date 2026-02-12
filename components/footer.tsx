import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, ShoppingBag, ExternalLink } from "lucide-react";

const SHOP_URL = "https://blumen-springer.lokalerflorist.de/";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="https://image.jimcdn.com/app/cms/image/transf/none/path/s95596f5193805018/image/id76e4651394f74fd/version/1740680020/image.png"
                alt="Blumen Springer Logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <h3 className="font-serif text-2xl font-semibold">
                Blumen Springer
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Frische Blumen, Hochzeitsfloristik &amp; Bio-Obst und Gemüse
              in Talheim und der Region Heilbronn.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/blumen_springer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/20 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/20 hover:text-white"
                aria-label="Online-Shop"
              >
                <ShoppingBag className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { name: "Startseite", href: "/" },
                { name: "Leistungen", href: "/leistungen" },
                { name: "Impressionen", href: "/impressionen" },
                { name: "Über uns", href: "/ueber-uns" },
                { name: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                >
                  Online-Shop
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Bahnhofstraße 46
                  <br />
                  74388 Talheim
                </span>
              </li>
              <li>
                <a
                  href="tel:+49713315450"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  07133 / 15450
                </a>
              </li>
              <li>
                <a
                  href="mailto:blumen-springer@web.de"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  blumen-springer@web.de
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Öffnungszeiten
            </h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-medium text-primary-foreground/90">Mo – Fr</p>
                  <p>08:00 – 12:30 Uhr</p>
                  <p>14:30 – 18:30 Uhr</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 opacity-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-primary-foreground/90">Samstag</p>
                  <p>08:00 – 14:00 Uhr</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 opacity-0" aria-hidden="true" />
                <div>
                  <p className="font-medium text-primary-foreground/90">Sonntag</p>
                  <p>Geschlossen</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-primary-foreground/50">
              &copy; {new Date().getFullYear()} Blumen Springer – Martin Springer. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground/70"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground/70"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
