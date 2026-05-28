"use client";

import { motion } from "motion/react";
import { ArrowRight, Layers } from "lucide-react";
import { AnimatedArrowIcon } from "@/components/AnimatedArrowIcon";
import { SignalPanel } from "@/components/ui/SignalPanel";
import { sectionEyebrowClass, sectionSubtitleClass, sectionTitleClass } from "@/lib/section-typography";
import { ui } from "@/lib/ui-system";

const tgContactUrl = "https://t.me/surapyk";

export default function Cta9() {
  return (
    <section className={`${ui.layout.sectionCompact} relative z-[1] flex w-full items-center justify-center overflow-visible`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 bg-[radial-gradient(ellipse_760px_260px_at_50%_5%,hsl(var(--accent)/0.18),hsl(var(--accent)/0.08)_34%,transparent_72%),radial-gradient(ellipse_at_18%_62%,rgb(255_255_255/0.08),transparent_24%),radial-gradient(ellipse_at_82%_64%,hsl(var(--accent)/0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[min(760px,72vw)] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className={`${ui.layout.container} relative overflow-visible`}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-visible"
        >
          <SignalPanel
            className="relative rounded-panel"
            innerClassName="rounded-[calc(1.75rem-1px)] bg-surface-muted/90 p-card-lg shadow-panel sm:p-12 lg:p-14"
          >
            <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center">
              <motion.p
                className={`mb-3 ${sectionEyebrowClass}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                Let&apos;s run your numbers
              </motion.p>

              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg bg-neutral-900 shadow-sm">
                  <Layers className="size-5 text-neutral-300" />
                </div>
                <ArrowRight className="size-4 text-neutral-400" />
                <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 shadow-sm">
                  <div className="size-5 rounded-full bg-accent/30" />
                </div>
              </div>

              <h2 className={`${sectionTitleClass} text-white md:whitespace-nowrap`}>
                $6.9M already paid to creators
              </h2>
              <p className={`mx-auto mt-4 max-w-readable ${sectionSubtitleClass}`}>
                Across dozens of campaigns, we&apos;ve turned budgets into right
                creator lineups. Let&apos;s do the same for your one.
              </p>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`${ui.component.ctaBase} ${ui.component.ctaPrimary} mt-6 px-6 hover:scale-[1.02]`}
                href={tgContactUrl}
                rel="noreferrer"
                target="_blank"
              >
                Set this up for me
                <AnimatedArrowIcon className="size-4" />
              </motion.a>
              <p className={`mt-6 ${sectionEyebrowClass}`}>
                15-minute call. Real campaign data on the screen.
              </p>
            </div>
          </SignalPanel>
        </motion.div>
      </div>
    </section>
  );
}
