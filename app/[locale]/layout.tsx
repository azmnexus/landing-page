import type { Metadata } from "next";
import { Noto_Kufi_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { getContent } from "@/content";
import { isLocale, localeDirections, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { buildOrganizationJsonLd } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getContent(locale);
  const dir = localeDirections[locale];
  const jsonLd = buildOrganizationJsonLd(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${plusJakartaSans.variable} ${notoKufiArabic.variable}`}
    >
      <body className="font-sans bg-white text-text-primary antialiased">
        <LocaleProvider locale={locale} content={content}>
          <ErrorBoundary>
            <NavBar />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
          </ErrorBoundary>
        </LocaleProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
