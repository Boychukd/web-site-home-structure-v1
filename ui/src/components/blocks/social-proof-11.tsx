"use client";

import { motion } from "motion/react";

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
      className="w-full bg-[#020202] px-4 py-10 text-white sm:px-6 lg:px-8"
      id="testimonials"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Testimonials
            </p>
            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              What teams notice after the first campaign.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            These are the patterns clients bring up once the creator lineup is
            optimized around audience fit instead of surface-level follower
            counts.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 sm:mt-14 sm:gap-6">
          {studies.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="relative flex flex-col gap-6 rounded-3xl bg-neutral-900/60 p-6 sm:p-7"
            >
              <div className="size-14 overflow-hidden rounded-full bg-neutral-800">
                <img src={s.avatar} alt="" className="size-full object-cover" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.18em] text-neutral-500">
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
