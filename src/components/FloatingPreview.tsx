"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/lib/data";

const previewProducts = products.slice(0, 3);

export default function FloatingPreview() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
      {previewProducts.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2 + i * 0.15,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          <div
            className="group cursor-pointer transition-all duration-700 active:scale-[0.97]"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            <div className="p-1 rounded-[1.25rem] bg-white/[0.03] border border-white/[0.06] transition-all duration-700 group-hover:border-glow/20 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_40px_rgba(157,223,255,0.1)]"
              style={{ transitionTimingFunction: "var(--ease-spring)" }}
            >
              <div
                className="w-[72px] h-[96px] rounded-[calc(1.25rem-4px)] relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-[2deg]"
                style={{
                  background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)`,
                  transitionTimingFunction: "var(--ease-spring)",
                }}
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-1.5"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: `${product.color}20`,
                        border: `1px solid ${product.color}30`,
                        transitionTimingFunction: "var(--ease-spring)",
                      }}
                    >
                      ❄
                    </div>
                  </div>
                )}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.15em] text-white/70 uppercase font-medium drop-shadow-lg">
                  {product.name.split(" ")[0]}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
