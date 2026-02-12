"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const hours = [
  { day: "Montag – Freitag", time: "08:00 – 12:30 & 14:30 – 18:30 Uhr" },
  { day: "Samstag", time: "08:00 – 14:00 Uhr" },
  { day: "Sonntag", time: "Geschlossen" },
];

export function OpeningHours() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-secondary p-8 sm:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Hours */}
        <div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-botanical" />
            <h3 className="font-serif text-xl font-semibold text-primary">
              Öffnungszeiten
            </h3>
          </div>
          <ul className="mt-6 space-y-3">
            {hours.map((item) => (
              <li key={item.day} className="flex justify-between text-sm">
                <span className="font-medium text-foreground">{item.day}</span>
                <span className="text-muted-foreground">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-botanical" />
            <h3 className="font-serif text-xl font-semibold text-primary">
              So finden Sie uns
            </h3>
          </div>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Blumen Springer</span>
              <br />
              Bahnhofstraße 46
              <br />
              74388 Talheim
            </p>
            <a
              href="tel:+49713315450"
              className="flex items-center gap-2 transition-colors hover:text-botanical"
            >
              <Phone className="h-4 w-4" />
              07133 / 15450
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
