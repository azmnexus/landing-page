"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

interface PageHeroProps {
  label: string;
  title: string;
  subtext: string;
  children?: React.ReactNode;
}

/** Inner-page hero. Keeps every route visually consistent with the home hero. */
export const PageHero = ({ label, title, subtext, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[#07191b]">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,25,27,0.98)_0%,rgba(7,25,27,0.88)_45%,rgba(7,25,27,0.7)_100%)] rtl:bg-[linear-gradient(250deg,rgba(7,25,27,0.98)_0%,rgba(7,25,27,0.88)_45%,rgba(7,25,27,0.7)_100%)]" />
      <div className="absolute end-[-40px] top-[-40px] h-[260px] w-[260px] rounded-full bg-accent/20 blur-[100px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-20 lg:py-20"
      >
        <SectionHeading label={label} title={title} subtext={subtext} tone="light" />
        {children}
      </motion.div>
    </section>
  );
};
