"use client";

import { motion } from "motion/react";
import { sectionEyebrowClass, sectionSubtitleClass, sectionTitleClass } from "@/lib/section-typography";
import { ui } from "@/lib/ui-system";

const avatarSoje = new URL("../../assets/twitter-avatars/0xSoje.jpg", import.meta.url).href;
const avatarTowhid = new URL("../../assets/twitter-avatars/0xTowhid.jpg", import.meta.url).href;
const avatarWash = new URL("../../assets/twitter-avatars/0xwash.jpg", import.meta.url).href;

const studies = [
  {
    avatar: avatarSoje,
    category: "Prediction Markets",
    title: "Overlap dropped and reach quality jumped in week one",
    copy: "The team re-cut its creator mix around niche follower density and stopped paying multiple KOLs to reach the same traders.",
  },
  {
    avatar: avatarTowhid,
    category: "DeFi Launch",
    title: "Budget stayed flat, relevant impressions nearly doubled",
    copy: "Instead of buying broad crypto reach, the campaign shifted into creators whose audiences already tracked the exact product category.",
  },
  {
    avatar: avatarWash,
    category: "Exchange Growth",
    title: "The shortlist got smaller and the outcomes got better",
    copy: "After ranking creators by actual audience fit, the team focused spend on fewer names and saw a cleaner path from views to action.",
  },
];

export default function SocialProof11() {
  return (
    <section
      className={ui.layout.sectionCompact}
      id="testimonials"
    >
      <div className={ui.layout.container}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={ui.layout.headerWithCopy}
        >
          <div className={ui.layout.header}>
            <p className={sectionEyebrowClass}>Testimonials</p>
            <h2 className={`${sectionTitleClass} lg:whitespace-nowrap`}>
              What teams notice after the first campaign.
            </h2>
          </div>
          <p className={`max-w-2xl ${sectionSubtitleClass}`}>
            These are the patterns clients bring up once the creator lineup is
            optimized around audience fit instead of surface-level follower
            counts.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {studies.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className={`${ui.component.panel} relative flex flex-col gap-6`}
            >
              <div className="size-14 overflow-hidden rounded-full bg-neutral-800">
                <img src={s.avatar} alt="" className="size-full object-cover" />
              </div>

              <div className="flex flex-col gap-2">
                <span className={sectionEyebrowClass}>
                  {s.category}
                </span>
                <h3 className="text-lg font-medium leading-snug text-white sm:text-xl">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {s.copy}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
