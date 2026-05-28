"use client";

import { motion } from "motion/react";
import { Network, Search, Users } from "lucide-react";
import { AnimatedArrowIcon } from "@/components/AnimatedArrowIcon";
import { sectionEyebrowClass, sectionSubtitleClass, sectionTitleClass } from "@/lib/section-typography";
import { ui } from "@/lib/ui-system";

const tgContactUrl = "https://t.me/surapyk";

const links = [
  {
    label: "See How Optimization Works",
    href: tgContactUrl,
    target: "_blank",
    rel: "noreferrer",
  },
  {
    label: "Follow on X",
    href: "https://x.com/wallchain",
    target: "_blank",
    rel: "noreferrer",
  },
];

export function CTA3() {
  return (
    <section className={`${ui.layout.sectionAlt} relative flex w-full items-center justify-center overflow-hidden`}>
      <div className={ui.layout.container}>
        <div className="mx-auto w-full text-center">
          {/* Icon Cards */}
          <div className="relative mb-6 flex items-center justify-center sm:h-40">
            {/* Background SVG Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -top-24">
              <div className="relative w-[260px] h-[260px] sm:w-[310px] sm:h-[310px]">
                <svg
                  width="586"
                  height="586"
                  viewBox="0 0 586 586"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-30"
                >
                  <motion.circle
                    cx="293"
                    cy="293"
                    r="290.5"
                    className="stroke-white"
                    strokeOpacity="0.5"
                    strokeWidth="5"
                    strokeDasharray="25 25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 360,
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.1 },
                      scale: { duration: 0.6, delay: 0.1 },
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.circle
                    cx="293"
                    cy="293"
                    r="236.5"
                    className="stroke-white"
                    strokeOpacity="0.8"
                    strokeWidth="5"
                    strokeDasharray="25 25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: -360,
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.2 },
                      scale: { duration: 0.6, delay: 0.2 },
                      rotate: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                  />
                  <motion.circle
                    cx="293"
                    cy="293"
                    r="182.5"
                    className="stroke-white"
                    strokeWidth="5"
                    strokeDasharray="25 25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 360,
                    }}
                    transition={{
                      opacity: { duration: 0.6, delay: 0.3 },
                      scale: { duration: 0.6, delay: 0.3 },
                      rotate: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                  />
                </svg>
                {/* Gradient overlay to fade bottom half */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-30% via-neutral-950/50 via-60% to-neutral-950" />
              </div>
            </div>

            <motion.div
              className="relative right-[-220px] sm:right-[-250px] top-4 w-28 h-28 rounded-3xl bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center z-0"
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Search
                strokeWidth={1}
                className="w-12 h-12 text-neutral-500"
              />
            </motion.div>

            <motion.div
              className="relative z-10 w-40 h-40 rounded-3xl bg-accent/10 backdrop-blur-sm flex flex-col items-center justify-center shadow-[0_18px_70px_-48px_rgba(247,209,51,0.9)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Network
                strokeWidth={1}
                className="w-16 h-16 text-accent"
              />
            </motion.div>

            <motion.div
              className="relative right-[220px] sm:right-[250px] top-4 w-28 h-28 rounded-3xl bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center z-0"
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Users
                strokeWidth={1}
                className="w-12 h-12 text-neutral-500"
              />
            </motion.div>
          </div>

          <motion.p
            className={`mb-3 ${sectionEyebrowClass}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            &gt; Built by Wallchain
          </motion.p>

          <motion.h1
            className={`mb-4 ${sectionTitleClass} text-white lg:whitespace-nowrap`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Wallchain runs creator{" "}
            <span className="text-accent">marketing on data.</span>
          </motion.h1>

          <motion.p
            className={`mx-auto mb-8 max-w-readable text-center ${sectionSubtitleClass}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We map every Crypto Twitter account and use proprietary ML to pick
            creators whose audience matches your brand. Then we run the
            campaign end-to-end — no ops on your side.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {links.map((link) => (
              <a
                className={`${ui.component.ctaBase} bg-surface-muted px-6 py-3 text-white hover:scale-[1.02] hover:bg-accent/10 hover:text-accent`}
                href={link.href}
                key={link.label}
                rel={link.rel}
                target={link.target}
              >
                {link.label}
                <AnimatedArrowIcon className="size-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
