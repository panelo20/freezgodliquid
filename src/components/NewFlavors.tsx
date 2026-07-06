"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/lib/data";

function StarRating({ filled, total = 5 }: { filled: number; total?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`text-[10px] ${i < filled ? "text-glow" : "text-white/15"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function NewFlavors() {
  return (
    <section id="flavors" className="relative py-32 md:py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 48, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-medium text-text-muted border border-white/[0.06] bg-white/[0.02] mb-6">
            New Collection
          </span>
          <h2 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wider text-gradient-ice">
            NEW FLAVORS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ y: 64, opacity: 0, filter: "blur(8px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: i * 0.06,
                ease: [0.32, 0.72, 0, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div
                className="group p-1.5 rounded-[1.75rem] bg-white/[0.02] border border-white/[0.05] transition-all duration-700 hover:border-white/[0.1] hover:bg-white/[0.04]"
                style={{ transitionTimingFunction: "var(--ease-spring)" }}
              >
                <div className="rounded-[calc(1.75rem-6px)] overflow-hidden bg-bg-card/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
                  <div
                    className="relative h-48 md:h-56 flex items-center justify-center overflow-hidden"
                    style={{
                      background: `radial-gradient(circle at 50% 80%, ${product.color}12, transparent 70%)`,
                    }}
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-all duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: `${product.color}15`,
                          border: `1px solid ${product.color}25`,
                          boxShadow: `0 0 40px ${product.color}10`,
                          transitionTimingFunction: "var(--ease-spring)",
                        }}
                      >
                        <span className="text-2xl">❄</span>
                      </div>
                    )}

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${product.color}08, transparent 60%)`,
                      }}
                    />
                  </div>

                  <div className="px-5 pb-5 pt-4">
                    <h3 className="font-heading text-lg tracking-wider text-white mb-0.5">
                      {product.name.toUpperCase()}
                    </h3>
                    <p className="text-[11px] text-text-muted/60 tracking-wide mb-4">
                      {product.tagline}
                    </p>

                    <div className="space-y-2.5 mb-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.15em] text-text-muted/50 uppercase">
                          Cooling
                        </span>
                        <StarRating filled={product.cooling} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.15em] text-text-muted/50 uppercase">
                          Sweet
                        </span>
                        <StarRating filled={product.sweetness} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.15em] text-text-muted/50 uppercase">
                          Fresh
                        </span>
                        <StarRating filled={product.freshness} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-heading text-base tracking-wider text-white">
                        Rp {product.price.toLocaleString("id-ID")}
                      </span>
                      <button
                        className="group/btn rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-[11px] font-medium tracking-wide text-text-muted transition-all duration-500 hover:bg-white/[0.12] hover:text-white hover:border-white/[0.15] active:scale-[0.96] flex items-center gap-1.5"
                        style={{ transitionTimingFunction: "var(--ease-spring)" }}
                      >
                        Buy
                        <span className="w-4 h-4 rounded-full bg-white/[0.08] flex items-center justify-center text-[8px] transition-transform duration-500 group-hover/btn:translate-x-0.5"
                          style={{ transitionTimingFunction: "var(--ease-spring)" }}
                        >
                          →
                        </span>
                      </button>
                    </div>
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
