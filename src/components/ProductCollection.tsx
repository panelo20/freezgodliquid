"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { products } from "@/lib/data";

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="group cursor-pointer w-[240px] md:w-[280px] shrink-0 p-1 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.04] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.05] hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
      style={{ transitionTimingFunction: "var(--ease-spring)" }}
    >
      <div
        className="rounded-[calc(1.5rem-4px)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] relative"
        style={{
          background: `radial-gradient(circle at 50% 100%, ${product.color}08, rgba(27,42,56,0.6) 60%)`,
        }}
      >
        <div className="relative h-40 md:h-48 flex items-center justify-center overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-3 transition-all duration-500 group-hover:scale-110"
            />
          ) : (
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
              style={{
                background: `${product.color}12`,
                border: `1px solid ${product.color}20`,
                transitionTimingFunction: "var(--ease-spring)",
              }}
            >
              <span className="text-xl">❄</span>
            </div>
          )}

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 80%, ${product.color}15, transparent 50%)`,
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-bg-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="px-5 pb-5 pt-2 text-center">
          <h3 className="font-heading text-lg tracking-wider text-white transition-colors duration-500 group-hover:text-fg-primary"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            {product.name.toUpperCase()}
          </h3>
          <p className="text-[10px] text-text-muted/40 tracking-wider mt-0.5">
            {product.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProductCollection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="collection" className="relative py-32 md:py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 48, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-medium text-text-muted border border-white/[0.06] bg-white/[0.02] mb-6">
            Full Lineup
          </span>
          <h2 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wider text-gradient-ice">
            COLLECTION
          </h2>
        </motion.div>
      </div>

      <div className="relative max-w-full">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-bg-deep to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-bg-deep to-transparent pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-3 md:gap-4 marquee-track hover:pause"
        >
          {[...products, ...products].map((product, i) => (
            <ProductCard key={`${product.id}-${i}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
