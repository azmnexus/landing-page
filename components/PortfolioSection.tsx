"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_CONTENT, PortfolioCard } from "@/content/content.config";
import * as LucideIcons from "lucide-react";

export const PortfolioSection = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const cardCount = PORTFOLIO_CONTENT.cards.length;

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>('[data-portfolio-card]');
    const card = cards[index];
    if (!card) return;

    card.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });

    setActiveIndex(index);
  };

  const scrollByDirection = (direction: 'prev' | 'next') => {
    const nextIndex = direction === 'next'
      ? Math.min(activeIndex + 1, cardCount - 1)
      : Math.max(activeIndex - 1, 0);

    scrollToCard(nextIndex);
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-portfolio-card]'));
    if (!cards.length) return;

    const handleScroll = () => {
      const containerLeft = container.scrollLeft;
      const nearestIndex = cards.reduce((closestIndex, card, index) => {
        const cardOffset = card.offsetLeft - containerLeft;
        return Math.abs(cardOffset) < Math.abs(cards[closestIndex].offsetLeft - containerLeft)
          ? index
          : closestIndex;
      }, 0);

      setActiveIndex(nearestIndex);
    };

    handleScroll();
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => container.removeEventListener('scroll', handleScroll);
  }, [cardCount]);

  return (
    <section id="services" className="bg-section-alt py-section">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-[12px] font-semibold tracking-[3px] uppercase block mb-2">
            {PORTFOLIO_CONTENT.label}
          </span>
          <h2 className="text-text-primary text-[40px] font-bold">
            {PORTFOLIO_CONTENT.title}
          </h2>
          <p className="text-text-secondary text-[16px] mt-4 max-w-2xl mx-auto">
            {PORTFOLIO_CONTENT.subtext}
          </p>
        </motion.div>

        <div>
          <div ref={scrollContainerRef} className="overflow-x-auto pb-3 scrollbar-none">
            <div className="flex gap-[16px] md:gap-[20px] min-w-max snap-x snap-mandatory scroll-px-2">
              {PORTFOLIO_CONTENT.cards.map((card, index) => {
                return <PortfolioCardComponent key={index} card={card} index={index} />;
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 p-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <button
                type="button"
                onClick={() => scrollByDirection('prev')}
                aria-label="Show previous portfolio cards"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent/90"
              >
                <LucideIcons.ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollByDirection('next')}
                aria-label="Show next portfolio cards"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent/90"
              >
                <LucideIcons.ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioCardComponent = ({ card, index }: { card: PortfolioCard; index: number }) => {
  const [imgError, setImgError] = React.useState(false);
  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[card.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.15 }}
      className="relative rounded-card overflow-hidden min-h-[220px] w-[240px] sm:w-[260px] md:w-[280px] shrink-0 snap-start shadow-card group"
      data-portfolio-card
    >
      {/* Background Image */}
      {!imgError ? (
        <Image
          src={card.imageUrl}
          alt={card.title}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-[#1D4A52]" />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-[72%] transition-opacity group-hover:opacity-[80%]" />

      {/* Content */}
      <div className="relative z-10 p-[20px] sm:p-[22px] h-full flex flex-col">
        {IconComponent && (
          <IconComponent className="text-white mb-[12px]" size={24} />
        )}
        <h3 className="text-white text-[18px] font-semibold">
          {card.title}
        </h3>
        <p className="text-white text-opacity-80 text-[14px] font-normal leading-[1.6] mt-[8px]">
          {card.description}
        </p>
        <div className="mt-auto pt-[16px]">
          <span className="inline-block border border-accent text-accent text-[12px] px-[10px] py-[4px] rounded-[10px] transparent">
            {card.badge}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
