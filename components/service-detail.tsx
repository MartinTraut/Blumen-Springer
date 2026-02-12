"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MapPin } from "lucide-react";

interface Step {
  step: string;
  title: string;
  text: string;
}

interface ServiceDetailProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  steps: Step[];
  reversed?: boolean;
  locations?: string[];
}

export function ServiceDetail({
  id,
  title,
  subtitle,
  description,
  image,
  features,
  steps,
  reversed = false,
  locations,
}: ServiceDetailProps) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20 lg:py-24 even:bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={reversed ? "lg:[direction:ltr]" : ""}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[3/4]">
              <Image
                src={image}
                alt={title}
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={reversed ? "lg:[direction:ltr]" : ""}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-botanical">
              {subtitle}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-primary sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>

            {/* Features */}
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 shrink-0 text-botanical" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Steps */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {steps.map((step) => (
                <div key={step.step} className="rounded-xl bg-secondary p-4">
                  <span className="font-serif text-2xl font-bold text-botanical/30">
                    {step.step}
                  </span>
                  <h4 className="mt-1 text-sm font-semibold text-primary">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Locations (for wedding only) */}
            {locations && (
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Beliebte Locations, die wir beliefern:
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {locations.map((loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center gap-1 rounded-full bg-botanical-light px-3 py-1 text-xs text-botanical"
                    >
                      <MapPin className="h-3 w-3" />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Button
              asChild
              className="mt-8 bg-botanical text-white hover:bg-botanical/90 rounded-full px-8"
            >
              <Link href="/kontakt">
                Unverbindlich anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
