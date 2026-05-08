"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";

const SHOP_URL = "https://blumen-springer.lokalerflorist.de/";
const HERO_IMAGE =
  "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s95596f5193805018/image/iece1106cffebaf36/version/1755361450/image.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* === MOBILE / TABLET: Fullscreen image hero === */}
      <div className="relative min-h-[100svh] flex items-end lg:hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Blumendekoration – Blumen Springer Talheim"
            fill
            priority
            quality={95}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>

        <div className="relative w-full px-5 pt-32 pb-[calc(theme(spacing.28)+env(safe-area-inset-bottom,0px))] text-center sm:px-8 sm:pt-40">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90"
          >
            Ihr Florist in <span className="text-botanical">Talheim</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-3 font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl"
          >
            Blumen, die
            <br />
            <span className="italic">Geschichten</span>
            <br />
            erzählen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base"
          >
            Hochzeitsfloristik, frische Sträuße & individuelle Kreationen –
            handgefertigt in <span className="text-botanical font-medium">Talheim</span> bei Heilbronn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-botanical text-white hover:bg-botanical/90 rounded-full px-7 py-5 text-sm font-semibold"
            >
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Online-Shop
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full border-white/25 bg-white/10 px-7 py-5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href="/leistungen">
                Unsere Leistungen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <ScrollIndicator variant="light" delay={1.2} className="mt-10" />
        </div>
      </div>

      {/* === DESKTOP: Split layout === */}
      <div className="hidden lg:grid lg:min-h-[100svh] lg:grid-cols-2">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src={HERO_IMAGE}
            alt="Blumendekoration – Blumen Springer Talheim"
            fill
            priority
            quality={95}
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5" />
        </motion.div>

        {/* Right: Content */}
        <div className="flex items-center justify-center bg-background px-12 py-20 xl:px-20 2xl:px-28">
          <div className="w-full max-w-lg text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-botanical"
            >
              Ihr Florist in <span className="text-botanical font-bold">Talheim</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 font-serif text-5xl font-bold leading-[1.08] text-primary xl:text-6xl"
            >
              Blumen, die
              <br />
              <span className="italic text-botanical">Geschichten</span>
              <br />
              erzählen
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mx-auto mt-5 text-base leading-relaxed text-foreground/65 xl:text-lg"
            >
              Hochzeitsfloristik, frische Sträuße und individuelle
              Blumenkreationen – handgefertigt mit Liebe zum Detail
              in <span className="text-botanical font-medium">Talheim</span> und der Region Heilbronn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 flex justify-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-botanical text-white hover:bg-botanical/90 rounded-full px-7 py-5 text-sm font-semibold"
              >
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Online-Shop
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-full border-border bg-secondary px-7 py-5 text-sm font-semibold text-foreground hover:bg-botanical-light hover:text-botanical"
              >
                <Link href="/leistungen">
                  Unsere Leistungen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Service Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="mt-10 flex flex-wrap justify-center gap-2"
            >
              {["Hochzeitsfloristik", "Trauerfloristik", "Sträuße & Pflanzen", "Bio-Obst & Gemüse"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-botanical-light px-4 py-1.5 text-xs font-medium text-botanical"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <ScrollIndicator variant="dark" delay={1.6} className="mt-12" />
          </div>
        </div>
      </div>
    </section>
  );
}

type ScrollIndicatorProps = {
  variant: "light" | "dark";
  delay?: number;
  className?: string;
};

function ScrollIndicator({ variant, delay = 1.2, className = "" }: ScrollIndicatorProps) {
  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight * 0.92, behavior: "smooth" });
  };

  const isLight = variant === "light";
  const labelColor = isLight
    ? "text-white/70 group-hover:text-white"
    : "text-botanical/60 group-hover:text-botanical";
  const trackColor = isLight ? "bg-white/20" : "bg-botanical/15";
  const dotColor = isLight ? "bg-white" : "bg-botanical";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      aria-label="Nach unten scrollen"
      className={`group inline-flex flex-col items-center gap-3 ${className}`}
    >
      <span
        className={`text-[10px] font-semibold uppercase tracking-[0.4em] transition-colors duration-300 ${labelColor}`}
      >
        Entdecken
      </span>
      <div className={`relative h-10 w-px overflow-hidden ${trackColor}`}>
        <motion.span
          aria-hidden="true"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className={`absolute inset-x-0 top-0 block h-1/2 ${dotColor}`}
        />
      </div>
    </motion.button>
  );
}
