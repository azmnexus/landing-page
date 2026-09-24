"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { CardBackdrop } from "@/components/CardBackdrop";
import { SectionHeading } from "@/components/SectionHeading";
import type { Capability } from "@/content";
import { getCapabilityImage } from "@/content/media";
import { useContent, useDir } from "@/i18n/LocaleProvider";
import { resolveIcon } from "@/lib/icons";

/**
 * Capability carousel used on the home page. Scroll-snap and active-index
 * tracking, with RTL handled by mirroring the arrow controls.
 */
export const CapabilitiesSection = () => {
  const content = useContent();
  const dir = useDir();
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { items } = content.capabilities;
  const cardCount = items.length;

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("[data-capability-card]");
    const card = cards[index];
    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });

    setActiveIndex(index);
  };

  const scrollByDirection = (direction: "prev" | "next") => {
    const step = direction === "next" ? 1 : -1;
    const nextIndex = Math.min(Math.max(activeIndex + step, 0), cardCount - 1);
    scrollToCard(nextIndex);
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-capability-card]")
    );
    if (!cards.length) return;

    const handleScroll = () => {
      const containerLeft = container.scrollLeft;
      const nearestIndex = cards.reduce((closestIndex, card, index) => {
        const cardOffset = card.offsetLeft - containerLeft;
        const closestOffset = cards[closestIndex].offsetLeft - containerLeft;
        return Math.abs(cardOffset) < Math.abs(closestOffset) ? index : closestIndex;
      }, 0);

      setActiveIndex(nearestIndex);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [cardCount]);

  const PreviousIcon = dir === "rtl" ? ChevronRight : ChevronLeft;
  const NextIcon = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <section id="capabilities" className="bg-section-alt py-section">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <SectionHeading
          label={content.capabilities.label}
          title={content.capabilities.title}
          subtext={content.capabilities.subtext}
          align="center"
          className="mb-12"
        />

        <div>
          <div ref={scrollContainerRef} className="scrollbar-none overflow-x-auto pb-3">
            <div className="flex min-w-max snap-x snap-mandatory scroll-px-2 gap-[16px] md:gap-[20px]">
              {items.map((capability, index) => (
                <CapabilityCard key={capability.slug} capability={capability} index={index} />
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 p-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <button
                type="button"
                onClick={() => scrollByDirection("prev")}
                aria-label={content.capabilities.carouselPrevLabel}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent/90"
              >
                <PreviousIcon size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollByDirection("next")}
                aria-label={content.capabilities.carouselNextLabel}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent/90"
              >
                <NextIcon size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CapabilityCard = ({
  capability,
  index,
}: {
  capability: Capability;
  index: number;
}) => {
  const Icon = resolveIcon(capability.iconName);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.15 }}
      data-capability-card
      id={capability.slug}
      className="group relative flex min-h-[280px] w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-card border border-white/10 bg-[#0B2226] p-[22px] shadow-card transition-transform duration-300 hover:-translate-y-1 sm:w-[280px] md:w-[300px]"
    >
      <CardBackdrop
        src={getCapabilityImage(capability.slug)}
        sizes="(max-width: 640px) 260px, 300px"
      />

      <div className="relative z-10 flex h-full flex-col">
        {Icon && (
          <span className="mb-[16px] flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 backdrop-blur-sm">
            <Icon
              className="text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
              size={22}
              aria-hidden="true"
            />
          </span>
        )}

        <h3 className="text-on-image text-[18px] font-semibold text-white">
          {capability.title}
        </h3>

        <p className="text-on-image mt-[8px] text-[14px] leading-[1.6] text-white/90">
          {capability.short}
        </p>

        <ul className="mt-auto space-y-[6px] pt-[18px]">
          {capability.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-[8px]">
              <Check
                className="mt-[3px] shrink-0 text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
                size={14}
                aria-hidden="true"
              />
              <span className="text-on-image text-[13px] leading-[1.5] text-white/85">
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

/**
 * Detailed capability layout used on the Services page. Renders each discipline
 * in full, including the outcomes list.
 */
export const CapabilityGrid = () => {
  const content = useContent();

  return (
    <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
      {content.capabilities.items.map((capability, index) => {
        const Icon = resolveIcon(capability.iconName);

        return (
          <motion.article
            key={capability.slug}
            id={capability.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col rounded-[16px] border border-[#E8ECEC] bg-[#F8FAFA] p-[24px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
          >
            <div className="flex items-center gap-[14px]">
              {Icon && (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="text-accent" size={22} aria-hidden="true" />
                </span>
              )}
              <h3 className="text-[18px] font-semibold text-text-primary">
                {capability.title}
              </h3>
            </div>

            <p className="mt-[16px] text-[14px] leading-[1.7] text-text-secondary">
              {capability.description}
            </p>

            <ul className="mt-[18px] space-y-[8px]">
              {capability.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-[8px]">
                  <Check className="mt-[3px] shrink-0 text-accent" size={15} aria-hidden="true" />
                  <span className="text-[13px] leading-[1.5] text-text-secondary">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </div>
  );
};
