"use client";

import { motion } from "motion/react";
import { ArrowRight, Copy, Layers, Send } from "lucide-react";

export default function Cta9() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-neutral-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(247,209,51,0.16),transparent_28%),radial-gradient(ellipse_at_18%_62%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(ellipse_at_82%_64%,rgba(247,209,51,0.08),transparent_24%)]" />
      <div className="relative mx-auto w-full max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/90 p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] sm:p-16 lg:p-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block absolute left-0 top-1/2 w-44 -translate-x-[30%] -translate-y-1/2 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-2 shadow-xl lg:w-52 xl:w-56"
          >
            <div className="aspect-4/3 overflow-hidden rounded-lg bg-neutral-800">
              <img
                alt="Campaign performance snapshot"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 px-1 pb-1">
              <p className="text-xs font-semibold text-white">$6.9M paid to creators</p>
              <p className="text-xs text-neutral-400">Across hundreds of campaigns</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block absolute right-0 top-1/2 w-56 translate-x-[30%] -translate-y-1/2 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 shadow-xl lg:w-64 xl:w-72"
          >
            <div className="mb-3 flex items-center justify-between text-xs text-neutral-400">
              <span>Real campaign data</span>
              <div className="flex items-center gap-2">
                <Copy className="size-3.5" />
                <Send className="size-3.5" />
              </div>
            </div>
            <h4 className="mb-1 text-sm font-semibold text-white">Right creator lineups</h4>
            <p className="text-xs leading-relaxed text-neutral-400">
              We turn budgets into creator mixes that match the niche, the
              frequency, and the campaign goal.
            </p>
          </motion.div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
            <motion.p
              className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-400"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Let&apos;s run your numbers
            </motion.p>

            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900 shadow-sm">
                <Layers className="size-5 text-neutral-300" />
              </div>
              <ArrowRight className="size-4 text-neutral-400" />
              <div className="flex size-12 items-center justify-center rounded-lg border border-[#F7D133]/40 bg-[#F7D133]/10 shadow-sm">
                <div className="size-5 rounded-full border border-[#F7D133] bg-[#F7D133]/20" />
              </div>
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
              $6.9M already paid to creators
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-400 sm:text-base">
              Across hundreds of campaigns, we&apos;ve turned budgets into right
              creator lineups. We&apos;ll do the same for yours.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="yellow-cta mt-6 inline-flex min-h-11 items-center justify-center gap-2 px-6 text-sm font-medium transition duration-200 hover:scale-[1.02]"
              href="#call"
            >
              Set this up for me
              <ArrowRight className="size-4" />
            </motion.a>
            <p className="mt-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
              15-minute call. Real campaign data on the screen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
