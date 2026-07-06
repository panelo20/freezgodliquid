"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep" />

        <div className="absolute inset-0 opacity-20"
          style={{
            clipPath:
              "polygon(0% 100%, 0% 50%, 5% 42%, 12% 35%, 18% 45%, 25% 28%, 32% 38%, 38% 22%, 45% 32%, 52% 18%, 58% 28%, 65% 15%, 72% 22%, 78% 30%, 85% 20%, 92% 32%, 100% 25%, 100% 100%)",
            background: "linear-gradient(to top, rgba(157,223,255,0.06) 0%, rgba(200,220,255,0.12) 40%, rgba(157,223,255,0.04) 100%)",
          }}
        />

        <div className="absolute inset-0 opacity-10"
          style={{
            clipPath:
              "polygon(0% 100%, 0% 60%, 8% 52%, 15% 48%, 22% 55%, 30% 40%, 38% 50%, 45% 35%, 52% 45%, 58% 32%, 65% 42%, 72% 28%, 80% 38%, 88% 30%, 95% 42%, 100% 35%, 100% 100%)",
            background: "linear-gradient(to top, rgba(157,223,255,0.03), rgba(200,220,255,0.08) 50%, transparent)",
          }}
        />

        <div className="aurora" style={{ opacity: 0.5 }} />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ y: 48, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true }}
          className="font-heading text-[clamp(3rem,10vw,9rem)] leading-[0.85] tracking-wider"
        >
          <span className="block text-white/90">BUILT FOR COLD.</span>
          <span className="block text-gradient-ice mt-2">ENGINEERED FOR FLAVOR.</span>
        </motion.p>

        <motion.p
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true }}
          className="mt-8 font-heading text-xl md:text-2xl tracking-[0.4em] text-text-muted/40"
        >
          FREEZEGOD™
        </motion.p>
      </motion.div>
    </section>
  );
}
