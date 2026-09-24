"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useContent, useHref } from "@/i18n/LocaleProvider";

/**
 * Insights is intentionally a placeholder listing: the positioning is live but
 * no articles have been published yet. Copy states this explicitly rather than
 * implying existing content.
 */
export const InsightsSection = () => {
  const { insights } = useContent();
  const href = useHref();

  return (
    <section id="insights" className="bg-white py-section">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <SectionHeading
          label={insights.label}
          title={insights.title}
          subtext={insights.subtext}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
          {insights.items.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-col rounded-[16px] border border-[#E8ECEC] bg-[#F8FAFA] p-[22px]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-accent">
                  {insight.category}
                </span>
                <span className="text-[11px] text-text-secondary">{insight.date}</span>
              </div>

              <h3 className="mt-[14px] text-[17px] font-semibold leading-snug text-text-primary">
                {insight.title}
              </h3>

              <p className="mt-[10px] text-[14px] leading-[1.65] text-text-secondary">
                {insight.summary}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={href("/#contact")}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent transition hover:gap-3"
          >
            {insights.ctaText}
            <ArrowRight size={16} className="rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
