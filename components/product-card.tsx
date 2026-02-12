"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
  badge?: string;
  index?: number;
}

export function ProductCard({ name, description, price, image, href, badge, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-400 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {badge && (
            <div className="absolute top-4 left-4">
              <span className="rounded-full bg-warm px-3 py-1 text-xs font-semibold text-white">
                {badge}
              </span>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="text-sm font-medium text-white/80">{price}</p>
            <h3 className="mt-1 font-serif text-lg font-semibold text-white sm:text-xl">
              {name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/75 line-clamp-2">
              {description}
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all group-hover:bg-botanical group-hover:text-white">
              <ShoppingBag className="h-3.5 w-3.5" />
              Bestellen
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
