"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useContent } from "@/i18n/LocaleProvider";

/**
 * The engagement sequence. Numbered stages rendered as a connected sequence on
 * desktop and a simple stack on mobile.
 */
export const ApproachSection = () => {
  const { approach } = useContent();

  return (
    <section id="approach" className="bg-white py-section">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <SectionHeading
          label={approach.label}
          title={approach.title}
          subtext={approach.subtext}
          className="mb-12"
        />

        <ol className="grid grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3">
          {approach.stages.map((stage, index) => (
            <motion.li
              key={stage.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-col rounded-[16px] border border-[#E8ECEC] bg-[#F8FAFA] p-[22px]"
            >
              <span className="text-[13px] font-semibold tracking-[2px] text-accent">
                {stage.step}
              </span>
              <h3 className="mt-[10px] text-[17px] font-semibold text-text-primary">
                {stage.title}
              </h3>
              <p className="mt-[8px] text-[14px] leading-[1.65] text-text-secondary">
                {stage.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
