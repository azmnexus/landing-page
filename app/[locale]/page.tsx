import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { TickerSection } from "@/components/TickerSection";
import { PropositionSection } from "@/components/PropositionSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ApproachSection } from "@/components/ApproachSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { InsightsSection } from "@/components/InsightsSection";
import { TeamSection } from "@/components/TeamSection";
import { CTABand } from "@/components/CTABand";
import { ContactSection } from "@/components/ContactSection";
import type { Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  return buildPageMetadata({ locale: params.locale });
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerSection />
      <PropositionSection />
      <CapabilitiesSection />
      <ApproachSection />
      <IndustriesSection />
      <InsightsSection />
      <TeamSection />
      <CTABand />
      <ContactSection />
    </>
  );
}
