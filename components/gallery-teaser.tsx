"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teaserImages = [
  {
    src: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i08d3f9b61bd042e3/version/1705168552/image.jpg",
    alt: "Blumenstrauß – Blumen Springer",
    span: "row-span-2",
  },
  {
    src: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i51918dbf7b8e287e/version/1745615467/image.jpg",
    alt: "Eleganter Blumenschmuck",
    span: "",
  },
  {
    src: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/ia428e1ccba590942/version/1745615467/image.jpg",
    alt: "Brautstrauß mit Rosen",
    span: "",
  },
  {
    src: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/i4e4cf52bdbf24a53/version/1745615467/image.jpg",
    alt: "Blumenstrauß in warmen Tönen",
    span: "row-span-2",
  },
  {
    src: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/ieca88bb6c278c0a7/version/1739207394/image.jpg",
    alt: "Hochzeitsfloristik",
    span: "",
  },
  {
    src: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/iece1106cffebaf36/version/1755361450/image.jpg",
    alt: "Blumenarrangement",
    span: "",
  },
];

export function GalleryTeaser() {
  return (
    <section className="overflow-hidden bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium uppercase tracking-[0.2em] text-botanical"
            >
              Impressionen
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 font-serif text-3xl font-semibold text-primary sm:text-4xl"
            >
              Einblicke in unsere Arbeit
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              asChild
              variant="outline"
              className="rounded-full border-botanical text-botanical hover:bg-botanical hover:text-white"
            >
              <Link href="/impressionen">
                Alle Impressionen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:auto-rows-[240px] lg:grid-cols-4">
          {teaserImages.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={90}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
