"use client";

import { motion } from "framer-motion";
import { useContent } from "@/i18n/LocaleProvider";

/**
 * The central repositioning statement. Given deliberate visual weight because
 * it is the single line that distinguishes AZM Nexus from an agency.
 */
export const PropositionSection = () => {
  const { proposition } = useContent();

  return (
    <section id="proposition" className="relative overflow-hidden bg-primary py-section">
      <div className="absolute end-[-60px] top-[-60px] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1000px] px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <span className="mb-6 block text-[12px] font-semibold uppercase tracking-[3px] text-accent">
            {proposition.label}
          </span>

          <p className="text-[20px] font-medium leading-[1.5] text-white/60 md:text-[24px]">
            {proposition.statement}
          </p>

          <p className="mt-6 text-[24px] font-semibold leading-[1.35] text-white md:text-[34px]">
            {proposition.emphasis}
          </p>

          <div className="mt-10 h-px w-full bg-white/15" />

          <p className="mt-8 max-w-[720px] text-[15px] leading-[1.8] text-white/70 md:text-[16px]">
            {proposition.supporting}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
