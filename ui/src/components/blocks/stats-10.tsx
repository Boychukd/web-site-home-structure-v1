"use client";

import { useEffect, useRef } from "react";
import { animate, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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
  }, [prefix, suffix, to, duration]);

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
    <section className="w-full bg-[#020202] px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8" id={id}>
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-500"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-3 max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h2>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * index }}
              whileHover={{ y: -4 }}
              className="group flex min-h-[250px] flex-col justify-between rounded-2xl p-6 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.75)] transition-transform sm:min-h-[285px] sm:p-7"
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
          <div className="mt-6 flex flex-col items-center gap-3 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            {ctaTitle ? (
              <p className="max-w-xl text-sm font-medium leading-6 text-neutral-400 sm:text-base">
                {ctaTitle}
              </p>
            ) : null}
            <a
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-[#F7D133]/10 px-5 text-sm font-medium text-[#F7D133] transition duration-200 hover:bg-[#F7D133]/15"
              href={ctaHref}
            >
              {ctaLabel}
              <ArrowRight className="size-4" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
