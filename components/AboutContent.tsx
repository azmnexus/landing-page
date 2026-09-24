"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useContent } from "@/i18n/LocaleProvider";

/** Long-form corporate narrative used on the About page. */
export const AboutContent = () => {
  const { about } = useContent();

  return (
    <section className="bg-white py-section">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        {/* Position / story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[3px] text-accent">
            {about.storyLabel}
          </span>
          <div className="space-y-5">
            {about.story.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="max-w-[760px] text-[15px] leading-[1.85] text-text-secondary md:text-[16px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="my-14 h-px w-full bg-border" />

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[3px] text-accent">
            {about.missionLabel}
          </span>
          <p className="max-w-[760px] text-[20px] font-medium leading-[1.5] text-text-primary md:text-[24px]">
            {about.mission}
          </p>
        </motion.div>

        <div className="my-14 h-px w-full bg-border" />

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <span className="text-[12px] font-semibold uppercase tracking-[3px] text-accent">
            {about.valuesLabel}
          </span>
          <div className="mt-8 grid grid-cols-1 gap-[16px] sm:grid-cols-2">
            {about.values.map((value) => (
              <div
                key={value.title}
                className="rounded-[16px] border border-[#E8ECEC] bg-[#F8FAFA] p-[22px]"
              >
                <h3 className="text-[16px] font-semibold text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-[8px] text-[14px] leading-[1.65] text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="my-14 h-px w-full bg-border" />

        {/* Delivery characteristics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[3px] text-accent">
            {about.credentialsLabel}
          </span>
          <ul className="space-y-[12px]">
            {about.credentials.map((credential) => (
              <li key={credential} className="flex items-start gap-[10px]">
                <Check className="mt-[4px] shrink-0 text-accent" size={16} aria-hidden="true" />
                <span className="text-[15px] leading-[1.6] text-text-primary">
                  {credential}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
