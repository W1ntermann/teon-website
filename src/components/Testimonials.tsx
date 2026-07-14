"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TestimonialsProps {
  subtitle?: string;
}

export default function Testimonials({ subtitle }: TestimonialsProps) {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const testimonials = [
    {
      text: t("testimonial.1.text"),
      name: t("testimonial.1.name"),
      company: t("testimonial.1.company"),
    },
    {
      text: t("testimonial.2.text"),
      name: t("testimonial.2.name"),
      company: t("testimonial.2.company"),
    },
    {
      text: t("testimonial.3.text"),
      name: t("testimonial.3.name"),
      company: t("testimonial.3.company"),
    },
  ];

  return (
    <section ref={sectionRef} className="border-b border-[#e5e5e5] bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Stars */}
          <div className="mb-3 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-[#E8A838] text-[#E8A838]" />
            ))}
          </div>

          {/* Title */}
          <h2 className="mb-2 text-center text-[20px] font-bold tracking-[3px] text-[#1E3A5F] sm:text-[24px] md:text-[26px]">
            {t("testimonials.title")}
          </h2>

          {/* Optional subtitle */}
          {subtitle && (
            <p className="mb-8 text-center text-[14px] text-[#666] sm:text-[15px]">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Cards */}
        <div className={subtitle ? "mt-2" : "mt-8 md:mt-10"}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative rounded-lg border border-[#e5e5e5] bg-[#fafafa] p-6 transition-all hover:border-[#1E3A5F]/20 hover:shadow-md"
              >
                {/* Quote icon */}
                <div className="mb-3 text-[#1E3A5F]/10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stars row */}
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#E8A838] text-[#E8A838]" />
                  ))}
                </div>

                <p className="mb-4 text-[14px] leading-relaxed text-[#444] italic">
                  &ldquo;{item.text}&rdquo;
                </p>

                <div className="border-t border-[#e5e5e5] pt-3">
                  <div className="text-[14px] font-bold text-[#1E3A5F]">{item.name}</div>
                  <div className="text-[12px] text-[#888]">{item.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}