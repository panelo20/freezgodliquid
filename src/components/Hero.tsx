"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { heroProduct } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < count ? "text-glow" : "text-white/20"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0, filter: "blur(12px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 }
      )
        .fromTo(
          subRef.current,
          { y: 40, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
          "-=0.6"
        )
        .fromTo(
          bottleRef.current,
          { y: 120, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1.4 },
          "-=0.8"
        )
        .fromTo(
          detailsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="aurora" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-deep" />

      <div className="mountain-silhouette" />

      <div className="absolute bottom-0 left-0 right-0 h-[30%] opacity-20"
        style={{
          clipPath:
            "polygon(0% 100%, 5% 70%, 12% 55%, 20% 65%, 28% 45%, 35% 60%, 42% 40%, 50% 55%, 58% 35%, 65% 50%, 72% 30%, 80% 45%, 88% 55%, 95% 40%, 100% 60%, 100% 100%)",
          background: "linear-gradient(to top, rgba(157,223,255,0.08), transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto pt-24 md:pt-0">
        <div ref={titleRef} className="opacity-0">
          <motion.div className="mb-4">
            <span className="inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium text-text-muted border border-white/[0.08] bg-white/[0.03]">
              Premium Ice Liquid
            </span>
          </motion.div>

          <h1 className="font-heading text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-wider">
            <span className="block text-gradient-ice">FREEZEGOD</span>
          </h1>

          <p className="mt-2 font-heading text-[clamp(1rem,3vw,1.8rem)] tracking-[0.3em] text-text-muted/70 uppercase">
            Freeze Every Puff
          </p>
        </div>

        <div ref={subRef} className="opacity-0 mt-6 max-w-md">
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
            Premium Ice Liquid dengan sensasi dingin ekstrem, rasa bersih, dan kualitas premium untuk pengalaman vaping yang maksimal.
          </p>
        </div>

        <div ref={bottleRef} className="opacity-0 my-10 md:my-14 animate-float">
          <div className="relative w-[180px] h-[340px] md:w-[220px] md:h-[420px]">
            <Image
              src={heroProduct.image}
              alt={heroProduct.name}
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(157,223,255,0.3)]"
              priority
            />
            <div className="absolute -inset-8 rounded-full bg-glow/5 blur-3xl glow-pulse" />
          </div>
        </div>

        <div ref={detailsRef} className="opacity-0 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4 text-sm">
            <span className="font-heading text-xl tracking-wider text-white">
              {heroProduct.name.toUpperCase()}
            </span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-text-muted text-xs tracking-wider">30ML</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-text-muted text-xs tracking-wider">3MG / 6MG</span>
          </div>

          <StarRating count={5} />

          <span className="font-heading text-2xl tracking-wider text-white mt-1">
            Rp {heroProduct.price.toLocaleString("id-ID")}
          </span>
        </div>

        <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-center gap-3 mt-8">
          <a
            href="#flavors"
            className="group rounded-full bg-white/[0.1] border border-white/[0.12] px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-700 hover:bg-white/[0.18] active:scale-[0.97] flex items-center gap-2.5"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            <span>Buy Now</span>
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-110 group-hover:bg-glow/20"
              style={{ transitionTimingFunction: "var(--ease-spring)" }}
            >
              ↗
            </span>
          </a>
          <a
            href="#collection"
            className="rounded-full px-8 py-3.5 text-sm font-medium tracking-wide text-text-muted transition-all duration-700 hover:text-white"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            View Flavors
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
