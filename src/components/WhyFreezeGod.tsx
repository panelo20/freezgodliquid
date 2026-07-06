"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";

export default function WhyFreezeGod() {
  return (
    <section id="why" className="relative py-32 md:py-40 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-glow/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ y: 48, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-medium text-text-muted border border-white/[0.06] bg-white/[0.02] mb-6">
            The Difference
          </span>
          <h2 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wider text-gradient-ice">
            WHY FREEZEGOD?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ y: 64, opacity: 0, filter: "blur(8px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.32, 0.72, 0, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div
                className="group p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] transition-all duration-700 hover:border-white/[0.1] hover:bg-white/[0.04]"
                style={{ transitionTimingFunction: "var(--ease-spring)" }}
              >
                <div className="rounded-[calc(2rem-6px)] bg-bg-card/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] p-8 md:p-10 min-h-[200px] flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 text-2xl transition-all duration-700 group-hover:scale-110 group-hover:bg-glow/[0.08] group-hover:border-glow/20 group-hover:shadow-[0_0_30px_rgba(157,223,255,0.1)]"
                      style={{ transitionTimingFunction: "var(--ease-spring)" }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl tracking-wider text-white mb-3">
                      {feature.title.toUpperCase()}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted/70 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
