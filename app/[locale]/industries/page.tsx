import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { IndustriesSection } from "@/components/IndustriesSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { CTABand } from "@/components/CTABand";
import { ContactSection } from "@/components/ContactSection";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const content = getContent(params.locale);

  return buildPageMetadata({
    locale: params.locale,
    path: "/industries",
    title: `${content.pages.industries.title} | ${content.common.wordmark}`,
    description: content.pages.industries.subtext,
    keywords: content.industries.items.map((item) => item.title),
  });
}

export default function IndustriesPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);
  const { industries: industriesPage } = content.pages;

  return (
    <>
      <PageHero
        label={industriesPage.label}
        title={industriesPage.title}
        subtext={industriesPage.subtext}
      />
      <IndustriesSection />
      <CapabilitiesSection />
      <CTABand />
      <ContactSection />
    </>
  );
}
