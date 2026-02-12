"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

const SHOP_URL = "https://blumen-springer.lokalerflorist.de/";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/backgroundarea/i8b7eb05741c87502/version/1740680020/image.jpg"
          alt="Floristik-Atelier"
          fill
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-botanical/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Lassen Sie uns Ihre Ideen
            <br />
            <span className="italic">zum Blühen bringen</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Erzählen Sie uns von Ihrem Anlass – wir beraten Sie persönlich
            und kreieren etwas Einzigartiges für Sie.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 py-6 text-base text-botanical hover:bg-white/90"
            >
              <Link href="/kontakt">
                Jetzt anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full border-white/30 bg-white/10 px-8 py-6 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Zum Online-Shop
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
