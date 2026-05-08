"use client";

import { Phone, ShoppingBag, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const SHOP_URL = "https://blumen-springer.lokalerflorist.de/";

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 lg:hidden"
      aria-label="Schnellaktionen"
    >
      <div
        className="pointer-events-auto border-t border-border/60 bg-white/92 backdrop-blur-xl shadow-[0_-12px_32px_-16px_rgba(20,30,15,0.18)]"
        style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}
      >
        <div className="mx-auto flex w-full max-w-md items-stretch gap-2 px-3 pt-3 pb-3">
          {/* Primary — Anrufen */}
          <a
            href="tel:+49713315450"
            className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-botanical px-3 py-3.5 text-sm font-semibold text-white shadow-[0_6px_18px_-6px_rgba(74,103,65,0.55)] transition-transform duration-200 active:scale-[0.97]"
            aria-label="Jetzt anrufen — 07133 / 15450"
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={2.5} />
            <span className="whitespace-nowrap">Anrufen</span>
          </a>

          {/* Secondary — Anfrage */}
          <a
            href="/kontakt"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-botanical-light px-3 py-3.5 text-sm font-medium text-botanical transition-all duration-200 active:scale-[0.97] active:bg-botanical/15"
            aria-label="Kontakt-Anfrage senden"
          >
            <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={2.2} />
            <span className="whitespace-nowrap">Anfrage</span>
          </a>

          {/* Tertiary — Shop (icon only) */}
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground transition-all duration-200 active:scale-[0.94] active:bg-secondary"
            aria-label="Online-Shop öffnen"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={2} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
