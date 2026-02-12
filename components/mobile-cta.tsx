"use client";

import { Phone, ShoppingBag, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const SHOP_URL = "https://blumen-springer.lokalerflorist.de/";

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 backdrop-blur-md px-3 pb-[env(safe-area-inset-bottom,8px)] pt-3 lg:hidden"
    >
      <div className="flex gap-2">
        <a
          href="tel:+49713315450"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-botanical py-3.5 text-sm font-medium text-white transition-colors active:bg-botanical/90"
        >
          <Phone className="h-4 w-4" />
          Anrufen
        </a>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-botanical-light py-3.5 text-sm font-medium text-botanical transition-colors active:bg-botanical/20"
        >
          <ShoppingBag className="h-4 w-4" />
          Shop
        </a>
        <a
          href="/kontakt"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border py-3.5 text-sm font-medium text-foreground transition-colors active:bg-secondary"
        >
          <MessageCircle className="h-4 w-4" />
          Anfrage
        </a>
      </div>
    </motion.div>
  );
}
