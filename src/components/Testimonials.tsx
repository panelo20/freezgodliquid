"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-xs ${i < count ? "text-glow" : "text-white/15"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 md:py-40 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 48, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-medium text-text-muted border border-white/[0.06] bg-white/[0.02] mb-6">
            Reviews
          </span>
          <h2 className="font-heading text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-wider text-gradient-ice">
            TESTIMONIALS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 48, opacity: 0, filter: "blur(8px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.32, 0.72, 0, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <div
                className="group p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] transition-all duration-700 hover:border-white/[0.1] hover:bg-white/[0.04]"
                style={{ transitionTimingFunction: "var(--ease-spring)" }}
              >
                <div className="rounded-[calc(2rem-6px)] bg-bg-card/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] p-7 md:p-8">
                  <StarRating count={testimonial.rating} />

                  <blockquote className="mt-5 text-base md:text-lg text-white/80 leading-relaxed font-light italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-glow/20 to-fg-secondary/20 border border-white/[0.08] flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-white/70">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/70">
                        {testimonial.name}
                      </p>
                      <p className="text-[10px] text-text-muted/40 tracking-wider">
                        Verified Buyer
                      </p>
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
