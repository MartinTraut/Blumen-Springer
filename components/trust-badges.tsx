"use client";

import { motion } from "framer-motion";
import { Heart, Award, Leaf } from "lucide-react";

const badges = [
  {
    icon: Heart,
    title: "Mit Leidenschaft",
    description: "Jeder Strauß wird von Hand mit Liebe zum Detail gefertigt.",
  },
  {
    icon: Award,
    title: "Meisterliche Qualität",
    description: "Gärtnermeisterin & ausgebildeter Florist – Handwerk auf höchstem Niveau.",
  },
  {
    icon: Leaf,
    title: "Frisch & Regional",
    description: "Saisonale Blumen direkt von lokalen Erzeugern für maximale Haltbarkeit.",
  },
];

export function TrustBadges() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {badges.map((badge, i) => (
        <motion.div
          key={badge.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-botanical-light">
            <badge.icon className="h-6 w-6 text-botanical" />
          </div>
          <h3 className="mt-4 font-serif text-lg font-semibold text-primary">
            {badge.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {badge.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
