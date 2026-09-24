"use client";

import Link from "next/link";
import { useContent, useHref } from "@/i18n/LocaleProvider";

export default function LocaleNotFound() {
  const content = useContent();
  const href = useHref();

  return (
    <section className="bg-section-alt py-section">
      <div className="mx-auto flex max-w-[720px] flex-col items-center px-6 text-center lg:px-20">
        <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[3px] text-accent">
          404
        </span>
        <h1 className="text-[32px] font-bold text-text-primary md:text-[40px]">
          {content.common.wordmark}
        </h1>
        <p className="mt-4 max-w-md text-[16px] text-text-secondary">
          {content.pages.insights.subtext}
        </p>
        <Link
          href={href("/")}
          className="mt-8 inline-flex items-center rounded-btn bg-primary px-6 py-3 text-[14px] font-medium text-white transition hover:bg-primary/90"
        >
          {content.nav.ctaText}
        </Link>
      </div>
    </section>
  );
}
