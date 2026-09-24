"use client";

import Image from "next/image";
import Link from "next/link";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { useContent, useHref } from "@/i18n/LocaleProvider";

export const Footer = () => {
  const content = useContent();
  const href = useHref();

  return (
    <footer className="border-t border-border bg-white py-[32px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left: Logo */}
          <Link href={href("/")} className="flex items-center">
            <Image
              src="/images/azm-logo.png"
              alt={content.common.wordmark}
              width={90}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Center: Copyright */}
          <div className="text-center text-[14px] text-text-secondary">
            {content.common.copyright}
          </div>

          {/* Right: Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {content.footer.links.map((link) => (
              <Link
                key={link.label}
                href={href(link.href)}
                className="text-[14px] text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <LocaleSwitcher />
          </div>
        </div>

        <p className="mt-6 text-center text-[12px] uppercase tracking-[2px] text-text-secondary/70">
          {content.footer.note}
        </p>
      </div>
    </footer>
  );
};
