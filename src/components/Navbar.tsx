"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Flavors", href: "#flavors" },
  { label: "About", href: "#why" },
  { label: "Collection", href: "#collection" },
  { label: "Reviews", href: "#testimonials" },
];

const transition = {
  duration: 0.7,
  ease: [0.32, 0.72, 0, 1] as const,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...transition, delay: 0.5 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-max"
      >
        <div className="rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] px-2 py-2 flex items-center gap-1">
          <a
            href="#"
            className="px-5 py-2 font-heading text-lg tracking-wider text-fg-primary"
          >
            FREEZEGOD
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium tracking-wide text-text-muted transition-colors duration-500 hover:text-white rounded-full hover:bg-white/[0.05]"
                style={{ transitionTimingFunction: "var(--ease-spring)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#flavors"
            className="hidden md:flex items-center gap-2 ml-2 rounded-full bg-white/[0.08] px-5 py-2 text-[13px] font-semibold text-white transition-all duration-700 hover:bg-white/[0.14] active:scale-[0.97] group"
            style={{ transitionTimingFunction: "var(--ease-spring)" }}
          >
            <span>Buy Now</span>
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[11px] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105"
              style={{ transitionTimingFunction: "var(--ease-spring)" }}
            >
              ↗
            </span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center ml-1"
            aria-label="Toggle menu"
          >
            <div className="w-4 h-3 relative flex flex-col justify-between">
              <span
                className="w-full h-[1.5px] bg-white/80 block transition-all duration-500 origin-center"
                style={{
                  transitionTimingFunction: "var(--ease-spring)",
                  transform: isOpen ? "rotate(45deg) translateY(5.25px)" : "none",
                }}
              />
              <span
                className="w-full h-[1.5px] bg-white/80 block transition-all duration-500"
                style={{
                  transitionTimingFunction: "var(--ease-spring)",
                  opacity: isOpen ? 0 : 1,
                  transform: isOpen ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              <span
                className="w-full h-[1.5px] bg-white/80 block transition-all duration-500 origin-center"
                style={{
                  transitionTimingFunction: "var(--ease-spring)",
                  transform: isOpen ? "rotate(-45deg) translateY(-5.25px)" : "none",
                }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-35 bg-[#101A24]/90 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ y: 48, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: 24, opacity: 0, filter: "blur(4px)" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="font-heading text-5xl tracking-wider text-white/80 hover:text-white transition-colors duration-500"
                style={{ transitionTimingFunction: "var(--ease-spring)" }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#flavors"
              onClick={() => setIsOpen(false)}
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: navLinks.length * 0.08,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="mt-4 rounded-full bg-white/[0.08] border border-white/[0.1] px-8 py-3 text-sm font-semibold tracking-wide"
            >
              Buy Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
