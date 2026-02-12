"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  align = "center",
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {label && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-botanical">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
