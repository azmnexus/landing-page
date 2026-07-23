"use client";

import React from "react";
import { motion } from "framer-motion";
import { OPERATIONS_CONTENT } from "@/content/content.config";

export const OperationsSection = () => {
  return (
    <section id="operations" className="bg-white py-section">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
          className="mb-5"
        >
          <span className="text-accent text-[12px] font-semibold tracking-[3px] uppercase block mb-2">
            {OPERATIONS_CONTENT.label}
          </span>
          <h2 className="text-text-primary text-[32px] md:text-[40px] font-bold leading-tight">
            {OPERATIONS_CONTENT.title}
          </h2>
          <p className="text-text-secondary text-[14px] md:text-[15px] mt-2 max-w-2xl leading-relaxed">
            {OPERATIONS_CONTENT.subtext}
          </p>
          <p className="text-text-secondary text-[12px] md:text-[13px] mt-2 max-w-xl opacity-80">
            {OPERATIONS_CONTENT.legend}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px]">
          {OPERATIONS_CONTENT.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
              className="rounded-[16px] border border-[#E8ECEC] bg-[#F8FAFA] p-[16px] min-h-[96px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-text-primary text-[15px] font-semibold">
                  {card.title}
                </h3>
                <span
                  className={`text-[11px] font-semibold px-[10px] py-[4px] rounded-full uppercase tracking-[1.5px] ${
                    card.status === "Active" ? "bg-[#E7F5F3] text-[#1D4A52]" : "bg-[#EEF2F2] text-[#475569]"
                  }`}
                >
                  {card.status}
                </span>
              </div>
              <p className="text-text-secondary text-[13px] leading-[1.6] mt-[6px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
