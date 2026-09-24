import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { InsightsSection } from "@/components/InsightsSection";
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
    path: "/insights",
    title: `${content.pages.insights.title} | ${content.common.wordmark}`,
    description: content.pages.insights.subtext,
  });
}

export default function InsightsPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);
  const { insights: insightsPage } = content.pages;

  return (
    <>
      <PageHero
        label={insightsPage.label}
        title={insightsPage.title}
        subtext={insightsPage.subtext}
      />
      <InsightsSection />
      <CTABand />
      <ContactSection />
    </>
  );
}
