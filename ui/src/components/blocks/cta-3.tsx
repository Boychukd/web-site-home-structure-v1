"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Network, Search, Users } from "lucide-react";

const links = [
  {
    label: "Read our research",
    href: "#prediction-markets-research",
  },
  {
    label: "Follow on X",
    href: "#x-placeholder",
  },
  {
    label: "Join Telegram",
    href: "#telegram-placeholder",
  },
];

export function CTA3() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-neutral-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon Cards */}
          <div className="flex items-center justify-center mb-4 relative sm:h-40">
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
                <div className="absolute inset-0 bg-linear-to-b from-transparent from-30% via-neutral-950/50 via-60% to-neutral-950 pointer-events-none" />
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
              className="relative z-10 w-40 h-40 rounded-3xl bg-[#F7D133]/10 backdrop-blur-sm flex flex-col items-center justify-center shadow-[0_18px_70px_-48px_rgba(247,209,51,0.9)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Network
                strokeWidth={1}
                className="w-16 h-16 text-[#F7D133]"
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
            className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            &gt; Built by Wallchain
          </motion.p>

          <motion.h1
            className="mb-6 text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Wallchain is the audience graph for Web3 marketing.
          </motion.h1>

          <motion.p
            className="text-base text-neutral-400 leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We map every account on Crypto Twitter — and use proprietary ML to
            find which creators actually reach the audience your brand needs.
            Then we run the campaign end-to-end. No catalog to browse. No ops
            to staff. Just the right creators and the right audience.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {links.map((link) => (
              <a
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-base font-medium text-white duration-200 hover:scale-105 hover:bg-[#F7D133]/10 hover:text-[#F7D133]"
                href={link.href}
                key={link.label}
              >
                {link.label}
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
