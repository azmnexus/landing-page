"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import type { TeamMember } from "@/content";
import { useContent } from "@/i18n/LocaleProvider";

export const TeamSection = () => {
  const { team } = useContent();

  return (
    <section id="team" className="bg-section-alt py-section">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <SectionHeading
          label={team.label}
          title={team.title}
          subtext={team.subtext}
          className="mb-12"
        />

        <div className="flex flex-wrap justify-center gap-[24px]">
          {team.members.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [imgError, setImgError] = React.useState(false);
  const [flipped, setFlipped] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.15 }}
      className="h-[360px] w-full max-w-[320px] sm:w-[320px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onClick={() => setFlipped((previous) => !previous)}
      tabIndex={0}
      role="button"
      aria-label={member.name}
    >
      <div className="h-full" style={{ perspective: "1000px" }}>
        <div
          className="relative h-full w-full transition-transform duration-700 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-card bg-white p-[24px] text-center shadow-card"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              zIndex: flipped ? 0 : 1,
            }}
          >
            <div className="relative mx-auto mb-4 flex h-[96px] w-[96px] items-center justify-center overflow-hidden rounded-full bg-border">
              {member.imageUrl && !imgError ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : member.imageUrl && imgError ? (
                <div className="h-full w-full bg-[#1D4A52]" />
              ) : (
                <User size={40} className="text-text-secondary" aria-hidden="true" />
              )}
            </div>
            <h3 className="mt-[16px] text-[16px] font-semibold text-text-primary">
              {member.name}
            </h3>
            <p className="mt-[4px] text-[13px] font-medium text-accent">{member.role}</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-card p-[20px] text-center text-white shadow-card"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              background: "linear-gradient(135deg, #1D4A52 0%, #2EB8A6 100%)",
              zIndex: flipped ? 1 : 0,
            }}
          >
            <div className="flex h-full flex-col items-center justify-start gap-3">
              <h3 className="text-[15px] font-bold text-white">{member.name}</h3>
              <p className="mb-[12px] mt-[4px] text-[11px] uppercase tracking-widest text-white/70">
                {member.role}
              </p>
              <p className="max-w-[220px] text-[12px] leading-snug text-white/90">
                {member.bio}
              </p>
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="mt-[12px] inline-block rounded-full border border-white/30 px-4 py-2 text-[11px] font-medium text-white transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
