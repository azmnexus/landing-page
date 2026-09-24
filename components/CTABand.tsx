"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContent, useHref } from "@/i18n/LocaleProvider";

/** Closing conversion band. Reused across routes. */
export const CTABand = () => {
  const { ctaBand } = useContent();
  const href = useHref();

  return (
    <section className="relative overflow-hidden bg-[#07191b]">
      <div className="absolute start-[-60px] bottom-[-60px] h-[280px] w-[280px] rounded-full bg-accent/15 blur-[110px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto flex max-w-[900px] flex-col items-center px-6 py-14 text-center lg:px-20"
      >
        <h2 className="text-[28px] font-semibold leading-tight text-white md:text-[36px]">
          {ctaBand.title}
        </h2>
        <p className="mt-4 max-w-[620px] text-[15px] leading-[1.75] text-white/70 md:text-[16px]">
          {ctaBand.subtext}
        </p>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }} className="mt-8">
          <Link
            href={href("/#contact")}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-[26px] py-[14px] text-[14px] font-semibold text-white transition hover:brightness-110"
          >
            {ctaBand.button}
            <ArrowRight size={16} className="rtl:rotate-180" aria-hidden="true" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
