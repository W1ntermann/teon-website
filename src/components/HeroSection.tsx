"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { ConsultationModal } from "@/components/ConsultationModal";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

const heroSlides = [
  { id: 1, image: hero1.src, overlay: "rgba(0,0,0,0.45)" },
  { id: 2, image: hero2.src, overlay: "rgba(0,0,0,0.45)" },
  { id: 3, image: hero3.src, overlay: "rgba(0,0,0,0.45)" },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const trustBadges = [
    { icon: Shield, label: t("hero.trust_iso") },
    { icon: Award, label: t("hero.trust_atex") },
    { icon: Shield, label: t("hero.trust_ce") },
  ];

  return (
    <div className="relative min-h-[450px] overflow-hidden sm:min-h-[500px] md:min-h-[540px]">
      {/* Slides as <img> elements with opacity transitions */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === currentSlide ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt=""
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: s.overlay }}
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <div className="mx-auto w-full max-w-[900px] sm:max-w-[900px]">
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
            <div className="h-px w-8 bg-white/30 sm:w-10" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-white/70 sm:text-[11px] sm:tracking-[4px]">
              TEON — {t("hero.trust_text")}
            </span>
            <div className="h-px w-8 bg-white/30 sm:w-10" />
          </div>
          <h1 className="text-[22px] font-bold leading-snug tracking-[0.5px] text-white sm:text-[28px] sm:leading-tight sm:tracking-[1px] md:text-[36px] md:tracking-[1px] lg:text-[42px]">
            {t("hero.tagline1")}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[13px] font-medium leading-relaxed text-white/80 sm:mt-4 sm:text-[15px] sm:leading-relaxed md:text-[16px] md:leading-relaxed lg:text-[17px]">
            {t("hero.tagline2")}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded bg-[#E8A838] px-8 py-3.5 text-[14px] font-bold text-[#1E3A5F] shadow-lg transition-all hover:bg-[#D4922E] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              {t("hero.quote_btn")}
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded border-2 border-white/50 bg-white/10 px-8 py-3.5 text-[14px] font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t("hero.catalog_btn")}
            </Link>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2 rounded border border-white/30 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white/90 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white hover:-translate-y-0.5 active:translate-y-0"
            >
              {t("hero.consultation_btn")}
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-5 md:gap-8">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5">
                <badge.icon size={12} className="text-[#E8A838] sm:size-14" />
                <span className="text-[11px] font-semibold text-white/80 sm:text-[12px] md:text-[13px]">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero nav buttons */}
      <button
        type="button"
        onClick={() =>
          setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)
        }
        className="absolute left-4 top-1/2 z-20 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded border border-white/50 bg-white/20 text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 z-20 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded border border-white/50 bg-white/20 text-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators — unified for all screen sizes */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        <div className="flex items-center gap-1.5">
          {heroSlides.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="flex items-center justify-center p-0"
              aria-label={`Slide ${i + 1}`}
            >
              <span
                className={cn(
                  "block h-2.5 w-2.5 rounded-full border border-white/80 transition-colors sm:h-3 sm:w-3",
                  i === currentSlide ? "bg-white" : "bg-white/30"
                )}
              />
            </button>
          ))}
        </div>

        {/* Slide number indicator (desktop only) */}
        <div className="hidden sm:block">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 backdrop-blur-sm"
          >
            <span className="text-[10px] font-semibold text-white/90">
              {currentSlide + 1}
            </span>
            <span className="text-[9px] text-white/60">/ {heroSlides.length}</span>
          </motion.div>
        </div>
      </div>
      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
