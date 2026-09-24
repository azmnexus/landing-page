"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtext?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

/**
 * The label / title / subtext stack used by every section. Extracted because it
 * was previously duplicated inline in four separate components.
 */
export const SectionHeading = ({
  label,
  title,
  subtext,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) => {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className={cn(isCentered ? "text-center" : "text-start", className)}
    >
      <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[3px] text-accent">
        {label}
      </span>
      <h2
        className={cn(
          "text-[32px] font-bold leading-tight md:text-[40px]",
          tone === "light" ? "text-white" : "text-text-primary"
        )}
      >
        {title}
      </h2>
      {subtext ? (
        <p
          className={cn(
            "mt-4 text-[15px] leading-relaxed md:text-[16px]",
            isCentered && "mx-auto max-w-2xl",
            !isCentered && "max-w-2xl",
            tone === "light" ? "text-white/70" : "text-text-secondary"
          )}
        >
          {subtext}
        </p>
      ) : null}
    </motion.div>
  );
};
