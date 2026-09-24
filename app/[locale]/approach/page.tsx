import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ApproachSection } from "@/components/ApproachSection";
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
    path: "/approach",
    title: `${content.pages.approach.title} | ${content.common.wordmark}`,
    description: content.pages.approach.subtext,
  });
}

export default function ApproachPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);
  const { approach: approachPage } = content.pages;

  return (
    <>
      <PageHero
        label={approachPage.label}
        title={approachPage.title}
        subtext={approachPage.subtext}
      />
      <ApproachSection />
      <CTABand />
      <ContactSection />
    </>
  );
}
