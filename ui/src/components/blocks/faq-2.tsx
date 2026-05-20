"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { sectionEyebrowClass, sectionTitleClass } from "@/lib/section-typography";

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
    <section className="flex w-full items-start bg-neutral-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          <div className="flex flex-col items-center space-y-6 text-center">
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

          <div className="mx-auto flex w-full max-w-[860px] flex-col space-y-7">
            {faqs.map((faq, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                key={faq.question}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <motion.button
                    className="group max-w-[85%] flex-1 cursor-pointer text-left sm:max-w-[75%]"
                    onClick={() => toggleFAQ(index)}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`rounded-full px-4 py-3 transition-all duration-200 sm:px-5 sm:py-3.5 ${
                        openIndex === index
                          ? "bg-[#F7D133]/10"
                          : "bg-neutral-800 hover:bg-neutral-700"
                      }`}
                    >
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-200 sm:text-base ${
                          openIndex === index
                            ? "text-[#F7D133]"
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
                    className={`mt-3 flex size-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 sm:size-7 ${
                      openIndex === index
                        ? "bg-[#F7D133]/10"
                        : "bg-neutral-800 hover:bg-neutral-700"
                    }`}
                    onClick={() => toggleFAQ(index)}
                    type="button"
                  >
                    {openIndex === index ? (
                      <Minus className="size-3 text-[#F7D133] sm:size-3.5" />
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
                        className="ml-auto mt-4 max-w-[85%] self-end sm:max-w-[75%]"
                        exit={{ scale: 0.5, y: -10 }}
                        initial={{ scale: 0.2, y: -10 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className="rounded-[20px] bg-[#F7D133] px-4 py-3 sm:px-5 sm:py-3.5">
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
