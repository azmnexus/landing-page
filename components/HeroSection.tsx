"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContent, useHref } from "@/i18n/LocaleProvider";

export const HeroSection = () => {
  const content = useContent();
  const href = useHref();
  const [imgError, setImgError] = React.useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#07191b]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <Image
            src={content.hero.backgroundImage}
            alt={content.hero.backgroundAlt}
            fill
            className="object-cover object-top"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="h-full w-full bg-[#1D4A52]" />
        )}
        {/* Overlay — mirrored for RTL so the text side stays the light side. */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,25,27,0.95)_0%,rgba(7,25,27,0.8)_45%,rgba(7,25,27,0.45)_100%)] rtl:bg-[linear-gradient(250deg,rgba(7,25,27,0.95)_0%,rgba(7,25,27,0.8)_45%,rgba(7,25,27,0.45)_100%)]" />
        <div className="absolute end-[-40px] top-[-40px] h-[260px] w-[260px] rounded-full bg-accent/20 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full justify-center px-6 py-20 lg:px-20 lg:py-24">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
            className="mb-[16px] block text-[12px] font-semibold uppercase tracking-[4px] text-accent"
          >
            {content.hero.label}
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mb-[20px] text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[46px] lg:text-[56px]"
          >
            {content.hero.headline}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="mx-auto mb-[28px] max-w-[640px] text-[16px] leading-[1.75] text-white/80 sm:text-[17px]"
          >
            {content.hero.subtext}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap justify-center gap-[12px]"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
              <Link
                href={href("/services")}
                className="inline-flex items-center rounded-full bg-accent px-[24px] py-[13px] text-[14px] font-semibold text-white transition hover:brightness-110"
              >
                {content.hero.ctaPrimary}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
              <Link
                href={href("/#contact")}
                className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-[24px] py-[13px] text-[14px] font-medium text-white transition hover:bg-white/20"
              >
                {content.hero.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
