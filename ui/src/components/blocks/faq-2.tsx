"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { sectionEyebrowClass, sectionTitleClass } from "@/lib/section-typography";
import { ui } from "@/lib/ui-system";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQ2Props = {
  eyebrow?: string;
  title?: string;
  faqs: FAQItem[];
};

export function FAQ2({
  eyebrow = "FAQ",
  title = "Common questions before booking",
  faqs,
}: FAQ2Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${ui.layout.sectionAlt} flex w-full items-start`}>
      <div className={ui.layout.container}>
        <div className="grid grid-cols-1 gap-10 lg:gap-12">
          <div className={ui.layout.header}>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className={sectionEyebrowClass}
              initial={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.45 }}
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className={`${sectionTitleClass} text-white lg:whitespace-nowrap`}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>

          </div>

          <div className="mx-auto flex w-full max-w-readable flex-col gap-5">
            {faqs.map((faq, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                key={faq.question}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_1.75rem] items-start gap-3">
                  <motion.button
                    className="group min-w-0 cursor-pointer text-left"
                    onClick={() => toggleFAQ(index)}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`rounded-full px-4 py-3 transition-all duration-200 sm:px-5 sm:py-3.5 ${
                        openIndex === index
                          ? "bg-accent/10"
                          : "signal-gray-panel hover:bg-neutral-700"
                      }`}
                    >
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-200 sm:text-base ${
                          openIndex === index
                            ? "text-accent"
                            : "text-white"
                        }`}
                      >
                        {faq.question}
                      </p>
                    </div>
                  </motion.button>

                  <button
                    aria-label={
                      openIndex === index
                        ? `Close ${faq.question}`
                        : `Open ${faq.question}`
                    }
                    className={`mt-3 flex size-7 items-center justify-center rounded-full transition-colors duration-200 ${
                      openIndex === index
                        ? "bg-accent/10"
                        : "signal-gray-panel hover:bg-neutral-700"
                    }`}
                    onClick={() => toggleFAQ(index)}
                    type="button"
                  >
                    {openIndex === index ? (
                      <Minus className="size-3 text-accent sm:size-3.5" />
                    ) : (
                      <Plus className="size-3 text-neutral-400 sm:size-3.5" />
                    )}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3, ease: "easeInOut" },
                      }}
                    >
                      <motion.div
                        animate={{ scale: 1, y: 0 }}
                        className="mt-4 grid grid-cols-[minmax(0,1fr)_1.75rem] gap-3"
                        exit={{ scale: 0.5, y: -10 }}
                        initial={{ scale: 0.2, y: -10 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className="min-w-0 rounded-card bg-accent px-4 py-3 sm:px-5 sm:py-3.5">
                          <p className="text-sm leading-relaxed text-neutral-950 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
