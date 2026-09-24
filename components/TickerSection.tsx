"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useContent, useDir } from "@/i18n/LocaleProvider";

/**
 * Capability marquee. Direction is inverted for RTL so the text travels the
 * same way the reader's eye does.
 */
export const TickerSection = () => {
  const content = useContent();
  const dir = useDir();
  const reduceMotion = useReducedMotion();

  // Duplicated so the loop is seamless.
  const items = [...content.ticker, ...content.ticker];
  const from = dir === "rtl" ? "-50%" : "0%";
  const to = dir === "rtl" ? "0%" : "-50%";

  return (
    <section className="flex h-[52px] w-full items-center overflow-hidden bg-primary">
      <motion.div
        animate={reduceMotion ? undefined : { x: [from, to] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center whitespace-nowrap"
      >
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-4 text-[14px] font-medium text-white">{item}</span>
            <span className="text-accent" aria-hidden="true">
              ◆
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
