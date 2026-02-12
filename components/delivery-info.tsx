"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Clock } from "lucide-react";

const infos = [
  {
    icon: Truck,
    title: "Lieferung",
    description: "Wir liefern in Talheim und die Region Heilbronn – ab 8,50 € Liefergebühr.",
  },
  {
    icon: MapPin,
    title: "Abholung im Laden",
    description: "Bestellen Sie online und holen Sie Ihre Blumen frisch im Laden ab – kostenlos.",
  },
  {
    icon: Clock,
    title: "Frisch gebunden",
    description: "Jeder Strauß wird erst nach Ihrer Bestellung von Hand gebunden.",
  },
];

export function DeliveryInfo() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {infos.map((info, i) => (
        <motion.div
          key={info.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-botanical-light">
            <info.icon className="h-6 w-6 text-botanical" />
          </div>
          <h3 className="mt-4 font-serif text-lg font-semibold text-primary">
            {info.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {info.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
