"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { products } from "@/lib/data";

function CoolingBar({ product, inView }: { product: typeof products[0]; inView: boolean }) {
  const percentage = (product.cooling / 5) * 100;

  return (
    <motion.div
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: product.color }}
          />
          <span className="font-heading text-sm tracking-wider text-white/80">
            {product.name.toUpperCase()}
          </span>
        </div>
        <span className="text-[11px] text-text-muted font-medium tabular-nums">
          {percentage}%
        </span>
      </div>

      <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
        <div
          className="h-full rounded-full cooling-bar"
          style={{
            width: inView ? `${percentage}%` : "0%",
            background: `linear-gradient(90deg, ${product.color}30, ${product.color}CC)`,
            boxShadow: `0 0 20px ${product.color}40`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function CoolingMeter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-40 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ y: 48, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-medium text-text-muted border border-white/[0.06] bg-white/[0.02] mb-6">
            Freeze Index
          </span>
          <h2 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wider text-gradient-ice">
            COOLING METER
          </h2>
          <p className="mt-4 text-sm text-text-muted/60 font-light max-w-md">
            Setiap rasa memiliki level cooling yang berbeda. Temukan intensitas yang cocok untuk kamu.
          </p>
        </motion.div>

        <div className="p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/[0.05]">
          <div className="rounded-[calc(2rem-6px)] bg-bg-card/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] p-6 md:p-10 space-y-6">
            {products.map((product) => (
              <CoolingBar key={product.id} product={product} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
