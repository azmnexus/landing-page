import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CapabilityGrid } from "@/components/CapabilitiesSection";
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
    path: "/services",
    title: `${content.pages.services.title} | ${content.common.wordmark}`,
    description: content.pages.services.subtext,
    keywords: content.capabilities.items.map((item) => item.title),
  });
}

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);
  const { services } = content.pages;

  return (
    <>
      <PageHero label={services.label} title={services.title} subtext={services.subtext} />

      <section className="bg-white py-section">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
          <SectionHeading
            label={content.capabilities.label}
            title={services.capabilitiesLabel}
            subtext={content.capabilities.subtext}
            className="mb-12"
          />
          <CapabilityGrid />
        </div>
      </section>

      <ApproachSection />
      <CTABand />
      <ContactSection />
    </>
  );
}
