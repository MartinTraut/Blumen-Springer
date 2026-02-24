"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Shop", href: "/shop" },
  { name: "Impressionen", href: "/impressionen" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
];

const SHOP_URL = "https://blumen-springer.lokalerflorist.de/";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : ""
      }`}
      style={!scrolled ? { background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)" } : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20" style={!scrolled ? { textShadow: "0 1px 4px rgba(0,0,0,0.7)" } : { textShadow: "none" }}>
          {/* Logo */}
          <Link href="/" className="group">
            <span className={`font-serif text-xl font-semibold tracking-tight transition-colors sm:text-2xl ${
              scrolled
                ? "text-primary group-hover:text-botanical"
                : "text-white drop-shadow-md group-hover:text-white/80"
            }`}>
              Blumen Springer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical/50 ${
                  scrolled
                    ? isActive(item.href)
                      ? "text-botanical"
                      : "text-foreground/70 hover:text-foreground"
                    : isActive(item.href)
                      ? "text-white font-semibold drop-shadow-md"
                      : "text-white/85 hover:text-white drop-shadow-md"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="active-nav"
                    className={`absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full ${scrolled ? "bg-botanical" : "bg-white"}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+49713315450"
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical/50 ${
                scrolled
                  ? "text-foreground/70 hover:text-botanical"
                  : "text-white/85 hover:text-white drop-shadow-md"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">07133 / 15450</span>
            </a>
            <Button
              asChild
              size="sm"
              className={`rounded-full px-4 text-sm font-medium transition-colors ${
                scrolled
                  ? "border border-botanical/20 bg-botanical-light text-botanical hover:bg-botanical hover:text-white"
                  : "border border-botanical bg-botanical/20 text-white hover:bg-botanical/40 backdrop-blur-sm"
              }`}
            >
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="mr-1.5 h-3.5 w-3.5" />
                Online-Shop
              </a>
            </Button>
            <Button
              asChild
              className={`rounded-full px-5 ${
                scrolled
                  ? "bg-botanical text-white hover:bg-botanical/90"
                  : "bg-white text-botanical hover:bg-white/90"
              }`}
            >
              <Link href="/kontakt">Jetzt anfragen</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical/50 ${
                scrolled
                  ? "hover:bg-secondary text-foreground"
                  : "hover:bg-white/15 text-white drop-shadow-md"
              }`}
                aria-label="Menü öffnen"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-background p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border px-6 py-4">
                  <span className="font-serif text-xl font-semibold text-primary">
                    Blumen Springer
                  </span>
                  <SheetClose asChild>
                    <button
                      className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical/50"
                      aria-label="Menü schließen"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </SheetClose>
                </div>

                <nav className="flex-1 px-6 py-6">
                  <ul className="space-y-1">
                    {navigation.map((item, i) => (
                      <li key={item.name}>
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                                isActive(item.href)
                                  ? "bg-botanical-light text-botanical"
                                  : "text-foreground hover:bg-secondary"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        </AnimatePresence>
                      </li>
                    ))}
                    {/* Shop Link im Mobile Menu */}
                    <li>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navigation.length * 0.05 }}
                      >
                        <a
                          href={SHOP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                        >
                          <ShoppingBag className="h-4 w-4 text-botanical" />
                          Online-Shop
                        </a>
                      </motion.div>
                    </li>
                  </ul>
                </nav>

                <div className="border-t border-border p-6 space-y-3">
                  <a
                    href="tel:+49713315450"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-botanical py-3.5 text-sm font-medium text-botanical transition-colors active:bg-botanical-light"
                  >
                    <Phone className="h-4 w-4" />
                    07133 / 15450
                  </a>
                  <Button
                    asChild
                    className="w-full bg-botanical text-white hover:bg-botanical/90 rounded-full py-3.5"
                  >
                    <Link href="/kontakt" onClick={() => setOpen(false)}>
                      Jetzt anfragen
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
