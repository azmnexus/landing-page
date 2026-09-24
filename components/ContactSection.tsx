"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useContent, useLocale } from "@/i18n/LocaleProvider";
import { resolveIcon } from "@/lib/icons";

/**
 * Formspree endpoint. The form ID is read from the environment so the endpoint
 * is configurable per deployment; the previous public ID remains the fallback
 * so existing behaviour is preserved.
 */
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "mgobkzgy";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

export const ContactSection = () => {
  const content = useContent();
  const locale = useLocale();
  const { form } = content.contact;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    inquiryType: form.inquiryTypeOptions[0],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = form.fullNameLabel;
    if (!formData.email.trim()) {
      nextErrors.email = form.emailLabel;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = form.emailLabel;
    }
    if (!formData.company.trim()) nextErrors.company = form.companyLabel;
    if (!formData.inquiryType.trim()) nextErrors.inquiryType = form.inquiryTypeLabel;
    if (!formData.message.trim()) nextErrors.message = form.messageLabel;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setSubmitError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // `locale` and `_subject` give the recipient context the previous
        // payload did not carry now that the site serves four languages.
        body: JSON.stringify({
          ...formData,
          locale,
          _subject: `${form.inquiryTypeLabel}: ${formData.company}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data?.errors?.[0]?.message || form.errorMessage);
      }
    } catch {
      setSubmitError(form.errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      inquiryType: form.inquiryTypeOptions[0],
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError("");
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-btn border ${
      hasError ? "border-[#FF4444]" : "border-border"
    } px-[16px] py-[12px] text-[14px] text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none`;

  return (
    <section id="contact" className="bg-primary py-section">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[55%_45%]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
            className="text-white"
          >
            <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[3px] text-accent">
              {content.contact.label}
            </span>
            <h2 className="text-[32px] font-bold leading-tight md:text-[40px]">
              {content.contact.title}
            </h2>
            <p className="mt-[20px] max-w-md text-[16px] text-white/70">
              {content.contact.subtext}
            </p>

            <div className="mt-[32px] space-y-[16px]">
              {content.contact.details.map((detail) => {
                const Icon = resolveIcon(detail.icon);

                return (
                  <div key={detail.label} className="flex items-center gap-[12px]">
                    <div className="flex h-[24px] w-[24px] items-center justify-center">
                      {Icon && (
                        <Icon className="text-accent" size={24} aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <p className="text-[14px] text-white">
                        <span className="block text-[12px] font-semibold uppercase tracking-wider text-white/70">
                          {detail.label}
                        </span>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-white transition-colors hover:text-accent"
                            target={detail.href.startsWith("http") ? "_blank" : undefined}
                            rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-card bg-white p-[32px] shadow-contact"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="text-accent" aria-hidden="true" />
                <h3 className="mt-[16px] text-[20px] font-semibold text-text-primary">
                  {form.successTitle}
                </h3>
                <p className="mt-[8px] text-[14px] text-text-secondary">
                  {form.successMessage}
                </p>
                <button
                  onClick={handleReset}
                  className="mt-8 text-[14px] text-accent focus:outline-none"
                >
                  {form.resetButton}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-text-primary">
                    {form.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={form.fullNamePlaceholder}
                    className={inputClass(Boolean(errors.fullName))}
                    value={formData.fullName}
                    onChange={(event) => {
                      setFormData({ ...formData, fullName: event.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[13px] text-[#FF4444]">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-text-primary">
                    {form.emailLabel}
                  </label>
                  <input
                    type="email"
                    placeholder={form.emailPlaceholder}
                    className={inputClass(Boolean(errors.email))}
                    value={formData.email}
                    onChange={(event) => {
                      setFormData({ ...formData, email: event.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[13px] text-[#FF4444]">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-text-primary">
                    {form.companyLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={form.companyPlaceholder}
                    className={inputClass(Boolean(errors.company))}
                    value={formData.company}
                    onChange={(event) => {
                      setFormData({ ...formData, company: event.target.value });
                      if (errors.company) setErrors({ ...errors, company: "" });
                    }}
                  />
                  {errors.company && (
                    <p className="mt-1 text-[13px] text-[#FF4444]">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-text-primary">
                    {form.inquiryTypeLabel}
                  </label>
                  <select
                    className={inputClass(Boolean(errors.inquiryType))}
                    value={formData.inquiryType}
                    onChange={(event) => {
                      setFormData({ ...formData, inquiryType: event.target.value });
                      if (errors.inquiryType) setErrors({ ...errors, inquiryType: "" });
                    }}
                  >
                    {form.inquiryTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.inquiryType && (
                    <p className="mt-1 text-[13px] text-[#FF4444]">{errors.inquiryType}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-text-primary">
                    {form.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={form.messagePlaceholder}
                    className={inputClass(Boolean(errors.message))}
                    value={formData.message}
                    onChange={(event) => {
                      setFormData({ ...formData, message: event.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[13px] text-[#FF4444]">{errors.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-[13px] text-[#FF4444]" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-btn bg-accent px-6 py-3 text-[14px] font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
                >
                  {form.submitButton}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
