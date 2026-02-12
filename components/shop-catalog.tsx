"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductCard } from "@/components/product-card";

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
  category: string;
  badge?: string;
}

const categories = [
  { key: "alle", label: "Alle" },
  { key: "straeusse", label: "Sträuße" },
  { key: "saisonal", label: "Saisonales" },
  { key: "pflanzen", label: "Pflanzen" },
  { key: "individuell", label: "Individuell" },
];

export function ShopCatalog({ products }: { products: Product[] }) {
  const [active, setActive] = useState("alle");

  const filtered = active === "alle"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === cat.key
                ? "bg-botanical text-white"
                : "bg-botanical-light text-botanical hover:bg-botanical/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              href={product.href}
              badge={product.badge}
              index={i}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
