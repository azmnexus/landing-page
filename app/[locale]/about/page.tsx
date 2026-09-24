import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutContent } from "@/components/AboutContent";
import { TeamSection } from "@/components/TeamSection";
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
    path: "/about",
    title: `${content.about.title} | ${content.common.wordmark}`,
    description: content.pages.about.subtext,
  });
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);
  const { about: aboutPage } = content.pages;

  return (
    <>
      <PageHero
        label={aboutPage.label}
        title={aboutPage.title}
        subtext={aboutPage.subtext}
      />
      <AboutContent />
      <TeamSection />
      <CTABand />
      <ContactSection />
    </>
  );
}
