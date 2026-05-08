"use client";

import { motion } from "motion/react";
import { ArrowRight, ChartNoAxesCombined, Sparkles } from "lucide-react";

const cards = [
  {
    icon: ChartNoAxesCombined,
    pillText: "Ran a campaign before?",
    description: "Audit your last campaign and see where reach leaked.",
    buttonText: "Analyze my last campaign",
    href: "#audit",
    featured: false,
  },
  {
    icon: Sparkles,
    pillText: "Planning your first one?",
    description: "Start with a clean plan and build from the calculator.",
    buttonText: "Plan my first campaign",
    href: "#call",
    featured: true,
  },
];

export function Contact1() {
  return (
    <section className="w-full bg-neutral-950 py-12 text-white sm:py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.p
          className="mb-4 text-center font-mono text-xs font-medium uppercase tracking-[0.28em] text-neutral-500 sm:text-sm"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to start?
        </motion.p>

        <motion.h2
          className="mx-auto max-w-5xl text-center text-5xl font-medium leading-tight tracking-tighter text-white"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let's plan your campaign.
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-3xl text-center text-xl leading-8 text-neutral-400 sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Just your data. No deck. 30-min call, direct with the founder.
        </motion.p>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.a
              className="group flex min-h-64 flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-900 sm:p-7"
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              key={card.pillText}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-950 px-4 py-2">
                  <card.icon className="size-4 text-[#F7D133]" />
                  <span className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-200">
                    {card.pillText}
                  </span>
                </div>
                <p className="mt-6 max-w-xl text-2xl font-medium leading-snug text-neutral-300 sm:text-3xl">
                  {card.description}
                </p>
              </div>

              <div
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-medium transition-all duration-300 group-hover:scale-[1.01] ${
                  card.featured
                    ? "bg-[#F7D133] text-neutral-950"
                    : "border border-neutral-700 text-white group-hover:bg-neutral-800"
                }`}
              >
                {card.buttonText}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
