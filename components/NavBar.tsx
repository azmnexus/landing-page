"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { useContent, useHref } from "@/i18n/LocaleProvider";

export const NavBar = () => {
  const content = useContent();
  const href = useHref();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Prevent the page behind the drawer from scrolling while it is open.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 lg:px-20">
        {/* Logo */}
        <Link href={href("/")} className="flex items-center">
          <Image
            src="/images/azm-logo.png"
            alt={content.common.wordmark}
            width={100}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {content.nav.links.map((link) => (
            <Link
              key={link.label}
              href={href(link.href)}
              className="group relative text-[14px] font-medium text-text-primary transition-colors hover:text-accent"
            >
              {link.label}
              <span className="absolute -bottom-1 start-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher />
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
            <Link
              href={href("/#contact")}
              className="inline-block rounded-btn bg-primary px-6 py-[12px] text-[14px] font-medium text-white"
            >
              {content.nav.ctaText}
            </Link>
          </motion.div>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <button
            className="text-primary"
            onClick={() => setIsMenuOpen(true)}
            aria-label={content.nav.openMenuLabel}
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={content.nav.openMenuLabel}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-primary"
              aria-label={content.nav.closeMenuLabel}
            >
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 pt-8">
            {content.nav.links.map((link) => (
              <Link
                key={link.label}
                href={href(link.href)}
                className="text-2xl font-medium text-text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
              className="mt-4"
            >
              <Link
                href={href("/#contact")}
                className="inline-block rounded-btn bg-primary px-8 py-4 text-[16px] font-medium text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.nav.ctaText}
              </Link>
            </motion.div>
          </div>
        </div>
      )}
    </nav>
  );
};
