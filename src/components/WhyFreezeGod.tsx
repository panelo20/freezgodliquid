"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const ease = [0.32, 0.72, 0, 1] as const;

const item = {
  hidden: { y: 64, opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
};

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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {features.map((feature, i) => (
            <motion.div key={feature.title} variants={item}>
              <div className="group p-[1px] rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-transparent transition-all duration-300 hover:translate-y-[-4px]">
                <div className="rounded-[calc(2rem-1px)] bg-bg-card/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] p-10 md:p-12 h-full flex flex-col">
                  <div className="relative mb-8">
                    <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full bg-glow/10 blur-2xl transition-all duration-300 group-hover:bg-glow/20 group-hover:blur-3xl" />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-glow/[0.08] group-hover:border-glow/20 group-hover:shadow-[0_0_30px_rgba(157,223,255,0.15)]">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="font-heading text-[2.25rem] md:text-[2.625rem] font-semibold tracking-wide text-white mb-4 transition-all duration-300 group-hover:text-glow">
                    {feature.title.toUpperCase()}
                  </h3>

                  <p className="text-base text-slate-300 leading-relaxed max-w-[70%] mb-6 font-light">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-glow/60 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-white/[0.06]">
                    <span className="inline-block rounded-full px-3.5 py-1 text-[11px] font-medium tracking-wide text-text-muted/80 bg-white/[0.05] border border-white/[0.08] transition-all duration-300 group-hover:text-white group-hover:bg-white/[0.08] group-hover:border-white/[0.12]">
                      {feature.tag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
