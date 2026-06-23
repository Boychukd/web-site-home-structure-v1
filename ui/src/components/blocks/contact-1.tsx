"use client";

import { motion } from "motion/react";
import { ChartNoAxesCombined, Sparkles } from "lucide-react";
import { AnimatedArrowIcon } from "@/components/AnimatedArrowIcon";
import { trackCtaClick } from "@/lib/clarity";
import { sectionEyebrowClass, sectionSubtitleClass, sectionTitleClass } from "@/lib/section-typography";
import { ui } from "@/lib/ui-system";

const tgContactUrl = "https://t.me/surapyk";

const cards = [
  {
    icon: ChartNoAxesCombined,
    pillText: "Ran a campaign before?",
    description: "Audit your last campaign and see where reach leaked.",
    buttonText: "Analyze my last campaign",
    eventName: "cta_contact_analyze_last_campaign",
    href: tgContactUrl,
    label: "analyze_my_last_campaign",
    featured: false,
  },
  {
    icon: Sparkles,
    pillText: "Planning your first one?",
    description: "Start with a clean plan and build from the calculator.",
    buttonText: "Launch My First Campaign",
    eventName: "cta_contact_launch_first_campaign",
    href: tgContactUrl,
    label: "launch_my_first_campaign",
    featured: true,
  },
];

export function Contact1() {
  return (
    <section className={ui.layout.sectionAlt} id="call">
      <div className={ui.layout.container}>
        <motion.p
          className={`text-center ${sectionEyebrowClass}`}
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to start?
        </motion.p>

        <motion.h2
          className={`mx-auto text-center ${sectionTitleClass} text-white lg:whitespace-nowrap`}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let's plan your campaign.
        </motion.h2>

        <motion.p
          className={`mx-auto mt-4 max-w-readable text-center ${sectionSubtitleClass}`}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Just your data. No deck. 15-min call, direct with the founder.
        </motion.p>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.a
              className={`${ui.component.panel} stripe-arrow-cta group flex min-h-64 flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              key={card.pillText}
              onClick={() =>
                trackCtaClick({
                  block: "contact_cards",
                  eventName: card.eventName,
                  label: card.label,
                })
              }
              rel="noreferrer"
              target="_blank"
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <div className={ui.component.labelPill}>
                  <card.icon className="size-4 text-accent" />
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-300">
                    {card.pillText}
                  </span>
                </div>
                <p className="mt-6 max-w-xl text-2xl font-medium leading-snug text-neutral-300 sm:text-3xl">
                  {card.description}
                </p>
              </div>

              <div
                className={`${ui.component.ctaBase} mt-8 w-full ${
                  card.featured
                    ? ui.component.ctaPrimary
                    : ui.component.ctaSecondary
                }`}
              >
                {card.buttonText}
                <AnimatedArrowIcon className="size-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
