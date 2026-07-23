"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/content/content.config";

export const HeroSection = () => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <section id="hero" className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#07191b]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <Image
            src={HERO_CONTENT.backgroundImage}
            alt="Nigerian corporate boardroom"
            fill
            className="object-cover object-top"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#1D4A52]" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,25,27,0.95)_0%,rgba(7,25,27,0.8)_45%,rgba(7,25,27,0.45)_100%)]" />
        <div className="absolute right-[-40px] top-[-40px] h-[260px] w-[260px] rounded-full bg-accent/20 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[680px] text-center lg:mx-0 lg:text-left">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
            className="mb-[16px] block text-[12px] font-semibold uppercase tracking-[4px] text-accent"
          >
            {HERO_CONTENT.label}
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mb-[20px] text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[46px] lg:text-[56px]"
          >
            {HERO_CONTENT.headline}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="mx-auto mb-[28px] max-w-[600px] text-[16px] leading-[1.75] text-white/80 sm:text-[17px] lg:mx-0"
          >
            {HERO_CONTENT.subtext}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="mb-[32px] flex flex-wrap justify-center gap-[12px] lg:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
              href="#portfolio"
              className="inline-flex items-center rounded-full bg-accent px-[24px] py-[13px] text-[14px] font-semibold text-white transition hover:brightness-110"
            >
              {HERO_CONTENT.ctaPrimary}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-[24px] py-[13px] text-[14px] font-medium text-white transition hover:bg-white/20"
            >
              {HERO_CONTENT.ctaSecondary}
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-[20px] lg:justify-start"
          >
            {HERO_CONTENT.stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex min-w-[110px] flex-col rounded-2xl border border-white/10 bg-white/10 px-[14px] py-[12px] text-center">
                  <span className="text-[20px] font-semibold text-accent">
                    {stat.value}
                  </span>
                  <span className="mt-[2px] text-[11px] uppercase tracking-[2px] text-white/60">
                    {stat.label}
                  </span>
                </div>
                {index < HERO_CONTENT.stats.length - 1 && (
                  <div className="hidden h-[40px] w-[1px] bg-white/20 sm:block" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
