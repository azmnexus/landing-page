"use client";

import { motion } from "framer-motion";
import { CardBackdrop } from "@/components/CardBackdrop";
import { SectionHeading } from "@/components/SectionHeading";
import { getIndustryImage } from "@/content/media";
import { useContent } from "@/i18n/LocaleProvider";
import { resolveIcon } from "@/lib/icons";

/**
 * Sectors we serve. These are the industries our technology capability is
 * applied within — deliberately distinct from the operating verticals the
 * previous positioning described.
 */
export const IndustriesSection = () => {
  const { industries } = useContent();

  return (
    <section id="industries" className="bg-section-alt py-section">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <SectionHeading
          label={industries.label}
          title={industries.title}
          subtext={industries.subtext}
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          {industries.items.map((industry, index) => {
            const Icon = resolveIcon(industry.iconName);

            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.15 }}
                className="group relative flex min-h-[210px] flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#0B2226] p-[20px] transition-transform duration-300 hover:-translate-y-1"
              >
                <CardBackdrop
                  src={getIndustryImage(index)}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 280px"
                />

                <div className="relative z-10 flex h-full flex-col">
                  {Icon && (
                    <Icon
                      className="mb-[14px] text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
                      size={22}
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="text-on-image text-[15px] font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="text-on-image mt-[8px] text-[13px] leading-[1.6] text-white/90">
                    {industry.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
