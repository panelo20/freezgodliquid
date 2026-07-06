"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/data";

export default function ProductCollection() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ y: 48, opacity: 0, filter: "blur(8px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.32, 0.72, 0, 1],
              }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div
                className="group cursor-pointer p-1 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.04] transition-all duration-700 hover:border-white/[0.12] hover:bg-white/[0.05] hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
                style={{ transitionTimingFunction: "var(--ease-spring)" }}
              >
                <div
                  className="rounded-[calc(1.5rem-4px)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] relative"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, ${product.color}08, rgba(27,42,56,0.6) 60%)`,
                  }}
                >
                  <div className="relative h-40 md:h-48 flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-6"
                      style={{
                        background: `${product.color}12`,
                        border: `1px solid ${product.color}20`,
                        transitionTimingFunction: "var(--ease-spring)",
                      }}
                    >
                      <span className="text-xl">❄</span>
                    </div>

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 80%, ${product.color}15, transparent 50%)`,
                      }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-bg-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
