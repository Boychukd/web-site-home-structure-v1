"use client";

import { useEffect, useRef } from "react";
import { animate, motion } from "motion/react";
import { AnimatedArrowIcon } from "@/components/AnimatedArrowIcon";
import { sectionEyebrowClass, sectionTitleClass } from "@/lib/section-typography";
import { ui } from "@/lib/ui-system";

type StatItem = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  bg: string;
  fg: string;
};

function CountUp({
  to,
  prefix,
  suffix,
  decimals = 0,
  duration = 2.4,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const controls = animate(0, to, {
      duration,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (value) => {
        const rounded = value.toLocaleString("en-US", {
          maximumFractionDigits: decimals,
          minimumFractionDigits: decimals,
        });
        el.textContent = `${prefix ?? ""}${rounded}${suffix ?? ""}`;
      },
    });

    return () => controls.stop();
  }, [decimals, duration, prefix, suffix, to]);

  const initial = (0).toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
  return <span ref={ref}>{`${prefix ?? ""}${initial}${suffix ?? ""}`}</span>;
}

export default function Stats10({
  id,
  eyebrow,
  title,
  stats,
  ctaHref,
  ctaLabel,
  ctaTitle,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  stats: StatItem[];
  ctaHref?: string;
  ctaLabel?: string;
  ctaTitle?: string;
}) {
  return (
    <section className={ui.layout.sectionCompact} id={id}>
      <div className={ui.layout.container}>
        <div className={ui.layout.header}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={sectionEyebrowClass}
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className={`${sectionTitleClass} lg:whitespace-nowrap`}
          >
            {title}
          </motion.h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * index }}
              whileHover={{ y: -4 }}
              className="group flex min-h-64 flex-col justify-between rounded-card p-card shadow-card transition-transform sm:min-h-72"
              style={{ backgroundColor: stat.bg, color: stat.fg }}
            >
              <p className="text-4xl font-medium leading-none tracking-tight tabular-nums sm:text-5xl lg:text-6xl">
                <CountUp
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="max-w-[14rem] text-sm leading-6 text-current/80 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <div className="mt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:flex-wrap sm:justify-center">
            {ctaTitle ? (
              <p className="max-w-xl text-sm font-medium leading-6 text-neutral-400 sm:text-base">
                {ctaTitle}
              </p>
            ) : null}
            <a
              className={`${ui.component.ctaBase} shrink-0 bg-accent/10 text-accent hover:bg-accent/15`}
              href={ctaHref}
            >
              {ctaLabel}
              <AnimatedArrowIcon className="size-4" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
