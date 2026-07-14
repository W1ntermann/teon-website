"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";

function DispersingIcon() {
  return (
    <svg viewBox="0 0 80 80" width="48" height="48" className="text-[#1E3A5F]">
      <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="40" cy="40" r="16" fill="currentColor" opacity="0.15" />
      <circle cx="40" cy="40" r="6" fill="currentColor" />
      {/* dispersion lines */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x2 = 40 + Math.cos(rad) * 26;
        const y2 = 40 + Math.sin(rad) * 26;
        return <line key={angle} x1="40" y1="40" x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" opacity="0.4" />;
      })}
      {/* small dots */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 40 + Math.cos(rad) * 22;
        const cy = 40 + Math.sin(rad) * 22;
        return <circle key={angle} cx={cx} cy={cy} r="2.5" fill="currentColor" opacity="0.7" />;
      })}
    </svg>
  );
}

function MixingIcon() {
  return (
    <svg viewBox="0 0 80 80" width="48" height="48" className="text-[#1E3A5F]">
      {/* vessel */}
      <path d="M20 70 L24 18 L56 18 L60 70 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* shaft */}
      <line x1="40" y1="18" x2="40" y2="66" stroke="currentColor" strokeWidth="2" />
      {/* mixing blades - top */}
      <path d="M28 36 Q40 46 52 36" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* mixing blades - bottom */}
      <path d="M28 52 Q40 42 52 52" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* fluid swirl lines */}
      <path d="M30 58 Q38 50 30 44" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <path d="M50 58 Q42 50 50 44" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}

function GrindingIcon() {
  return (
    <svg viewBox="0 0 80 80" width="48" height="48" className="text-[#1E3A5F]">
      {/* outer ring */}
      <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* inner ring */}
      <circle cx="40" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeDasharray="6 3" />
      {/* center bead */}
      <circle cx="40" cy="40" r="10" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      {/* grinding beads */}
      <circle cx="28" cy="32" r="3.5" fill="currentColor" opacity="0.8" />
      <circle cx="52" cy="28" r="3.5" fill="currentColor" opacity="0.7" />
      <circle cx="50" cy="50" r="3.5" fill="currentColor" opacity="0.8" />
      <circle cx="30" cy="48" r="3.5" fill="currentColor" opacity="0.7" />
      <circle cx="40" cy="24" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="56" cy="40" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="40" cy="56" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="24" cy="40" r="2.5" fill="currentColor" opacity="0.6" />
      {/* motion arrows */}
      <path d="M18 20 Q26 16 20 10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M62 20 Q54 16 60 10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

const processes = [
  { icon: DispersingIcon, titleKey: "process.dispersing", descKey: "process.dispersing.desc", number: "01" },
  { icon: MixingIcon, titleKey: "process.mixing", descKey: "process.mixing.desc", number: "02" },
  { icon: GrindingIcon, titleKey: "process.grinding", descKey: "process.grinding.desc", number: "03" },
];

export function ProcessHighlight() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E3A5F 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <SectionHeader
            eyebrow="TEON"
            title={t("hero.tagline1")}
            subtitle={t("hero.tagline2")}
            subtitleClassName="font-medium tracking-[1px] text-[#000]"
          />
        </div>

        {/* Three Process Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {processes.map((proc, idx) => (
            <motion.div
              key={proc.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative flex h-full flex-col items-center rounded-sm border border-[#e0e0e0] bg-[#fafafa] p-6 pt-10 text-center transition-all duration-300 hover:border-[#1E3A5F]/30 hover:bg-white hover:shadow-lg hover:shadow-[#1E3A5F]/5 sm:p-7 sm:pt-12 md:p-8 md:pt-14">
                {/* Number watermark */}
                <span className="pointer-events-none absolute right-4 top-3 select-none text-[52px] font-bold leading-none text-[#1E3A5F]/[0.05] sm:text-[60px] md:text-[68px]">
                  {proc.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#1E3A5F]/15 bg-white transition-all duration-300 group-hover:border-[#1E3A5F]/30 group-hover:bg-[#1E3A5F]/5 sm:mb-5 sm:h-[72px] sm:w-[72px]">
                  <proc.icon />
                </div>

                {/* Title */}
                <h3 className="relative z-10 mb-3 text-lg font-bold tracking-wide text-[#1E3A5F] sm:text-xl">
                  {t(proc.titleKey)}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-[13px] leading-relaxed text-[#555] sm:text-sm">
                  {t(proc.descKey)}
                </p>

                {/* Bottom accent line */}
                <div className="mt-5 h-[2px] w-10 bg-[#1E3A5F]/20 transition-all duration-300 group-hover:w-16 group-hover:bg-[#1E3A5F]/50 sm:mt-6" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Separator */}
        <div className="mx-auto mt-12 flex max-w-[600px] items-center gap-4 md:mt-16">
          <div className="h-px flex-1 bg-[#d0d0d0]" />
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#d0d0d0] bg-white">
            <span className="text-[8px] font-bold text-[#1E3A5F]">T</span>
          </div>
          <div className="h-px flex-1 bg-[#d0d0d0]" />
        </div>
      </div>
    </section>
  );
}