"use client";

import type { ComponentType, CSSProperties, SVGProps } from "react";
import { motion } from "motion/react";

import {
  sectionEyebrowClass,
  sectionSubtitleClass,
  sectionTitleClass,
} from "@/lib/section-typography";
import { ui } from "@/lib/ui-system";

type ObjectiveIcon = ComponentType<SVGProps<SVGSVGElement>>;

type CampaignObjective = {
  description: string;
  Icon: ObjectiveIcon;
  signal: string;
  title: string;
};

const campaignObjectives: CampaignObjective[] = [
  {
    description: "Maximize unique niche reach",
    Icon: AwarenessIcon,
    signal: "Low overlap • Broad coverage",
    title: "Awareness",
  },
  {
    description: "Reach people most likely to try your product",
    Icon: AcquisitionIcon,
    signal: "High intent audiences • Controlled frequency",
    title: "User Acquisition",
  },
  {
    description: "Concentrate attention during launch window",
    Icon: TgeIcon,
    signal: "Trust creators • Layered exposure",
    title: "TGE",
  },
  {
    description: "Find users who already care about the category",
    Icon: FeatureLaunchIcon,
    signal: "Niche-first creator selection",
    title: "Feature Launch",
  },
  {
    description: "Target specific regions without wasting global reach",
    Icon: GeoCampaignIcon,
    signal: "Country-level creator mix",
    title: "Geo Campaign",
  },
];

export function Features1() {
  return (
    <section
      className={`${ui.layout.sectionCompact} relative overflow-hidden text-text-primary`}
      id="campaign-objectives"
    >
      <div className={ui.layout.container}>
        <motion.div
          className={ui.layout.headerWithCopy}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className={sectionEyebrowClass}>Campaign objective</p>
          <h2 className={`${sectionTitleClass} max-w-content-wide`}>
            <span className="text-accent">Different goals</span> need different
            creator mixes
          </h2>
          <p className={`${sectionSubtitleClass} max-w-readable`}>
            Choose the objective first. The right creator mix depends on what the
            campaign needs to achieve.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {campaignObjectives.map((objective, index) => {
            const Icon = objective.Icon;

            return (
              <motion.article
                className="min-w-0"
                data-testid={`objective-feature-${objective.title.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 18 }}
                key={objective.title}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span
                  className="signal-gray-panel-frame grid size-11 place-items-center text-accent"
                  style={
                    {
                      "--signal-panel-radius": "16px",
                    } as CSSProperties
                  }
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 min-w-0 text-card-title font-medium leading-tight text-text-primary">
                  {objective.title}
                </h3>
                <p className="mt-4 max-w-[34ch] text-body leading-body text-text-secondary">
                  {objective.description}
                </p>
                <p className="mt-2 max-w-[34ch] text-caption leading-body text-text-muted">
                  {objective.signal}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AwarenessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M4.4 12.1C6.6 9.8 9.1 8.6 12 8.6s5.4 1.2 7.6 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M7.2 15.1c1.4-1.5 3-2.2 4.8-2.2s3.4.7 4.8 2.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M2.9 8.8C5.6 6.1 8.6 4.8 12 4.8s6.4 1.3 9.1 4"
        opacity="0.42"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="18.1" fill="currentColor" r="1.55" />
    </svg>
  );
}

function AcquisitionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="8.9" cy="8.2" r="2.8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.4 19c.9-3.1 2.4-4.7 4.5-4.7s3.7 1.6 4.6 4.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M15 8.5h4.6m-2-2 2 2-2 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M15.4 14.4h3.8"
        opacity="0.42"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function TgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <rect
        height="14.4"
        rx="3.1"
        stroke="currentColor"
        strokeWidth="1.8"
        width="12.6"
        x="5.7"
        y="5"
      />
      <path
        d="M8.8 9.2h6.4M8.8 14.9h3.2"
        opacity="0.42"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 16.8V9.5m0 0-2.3 2.3M12 9.5l2.3 2.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function FeatureLaunchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="m6.1 8 5.9-3.3L17.9 8 12 11.4 6.1 8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M6.1 8v7.1l5.9 3.4 5.9-3.4V8M12 11.4v7.1"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M16.4 4.8 19 3.3M18.8 6.8l2.9-.2"
        opacity="0.42"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GeoCampaignIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 21s5.2-4.6 5.2-10a5.2 5.2 0 0 0-10.4 0C6.8 16.4 12 21 12 21Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="11" fill="currentColor" r="1.65" />
      <path
        d="M4.2 6.4h3.2M16.6 6.4h3.2M4.2 15.8h3.1M16.7 15.8h3.1"
        opacity="0.42"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
