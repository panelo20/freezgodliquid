"use client";

import { motion } from "framer-motion";

const socials = [
  { name: "Instagram", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative py-20 md:py-28 px-4 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12"
        >
          <div>
            <h3 className="font-heading text-[clamp(3rem,6vw,5rem)] leading-[0.85] tracking-wider text-gradient-ice">
              FREEZEGOD™
            </h3>
            <p className="mt-3 text-sm text-text-muted/50 font-light max-w-sm">
              Premium Ice Liquid. Freeze Every Puff.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-[13px] text-text-muted/50 tracking-wide transition-all duration-500 hover:text-white"
                  style={{ transitionTimingFunction: "var(--ease-spring)" }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-text-muted/30 tracking-wider">
            © {new Date().getFullYear()} FREEZEGOD™. All rights reserved.
          </p>
          <p className="text-[11px] text-text-muted/20 tracking-wider">
            Premium Ice Liquid Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
