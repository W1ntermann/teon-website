"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function HeritageIcon() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Building */}
      <rect x="12" y="22" width="40" height="36" rx="2" stroke="#fff" strokeWidth="1.8" />
      <rect x="14" y="24" width="36" height="32" rx="1" fill="#fff" opacity="0.06" />
      {/* Roof */}
      <path d="M8 22 L32 8 L56 22" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 22 L56 22" stroke="#fff" strokeWidth="1" opacity="0.3" />
      {/* Door */}
      <rect x="26" y="38" width="12" height="20" rx="1" stroke="#fff" strokeWidth="1.2" />
      <circle cx="35" cy="49" r="1.2" fill="#fff" />
      {/* Windows */}
      <rect x="17" y="28" width="8" height="7" rx="1" stroke="#fff" strokeWidth="1" />
      <rect x="39" y="28" width="8" height="7" rx="1" stroke="#fff" strokeWidth="1" />
      {/* Year inside */}
      <text x="32" y="60" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800" fontFamily="Arial" letterSpacing="2">1889</text>
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gear */}
      <circle cx="32" cy="32" r="12" stroke="#fff" strokeWidth="1.8" />
      <circle cx="32" cy="32" r="5" stroke="#fff" strokeWidth="1.2" />
      <circle cx="32" cy="32" r="2" fill="#fff" opacity="0.5" />
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 32 + Math.cos(rad) * 14;
        const y = 32 + Math.sin(rad) * 14;
        return (
          <rect
            key={angle}
            x={x - 3}
            y={y - 3}
            width="6"
            height="6"
            rx="1"
            fill="#fff"
            opacity="0.7"
          />
        );
      })}
      {/* Checkmark */}
      <path d="M48 18 L52 22 L56 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <path d="M48 18 L52 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  );
}

function WorldwideIcon() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Globe */}
      <circle cx="32" cy="32" r="22" stroke="#fff" strokeWidth="1.8" />
      {/* Equator */}
      <ellipse cx="32" cy="32" rx="8" ry="22" stroke="#fff" strokeWidth="1" opacity="0.4" />
      {/* Meridian */}
      <line x1="32" y1="10" x2="32" y2="54" stroke="#fff" strokeWidth="1" opacity="0.4" />
      {/* Horizontal lines */}
      <line x1="14" y1="22" x2="50" y2="22" stroke="#fff" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="42" x2="52" y2="42" stroke="#fff" strokeWidth="1" opacity="0.4" />
      {/* Dots = countries */}
      <circle cx="38" cy="20" r="2.5" fill="#fff" opacity="0.8" />
      <circle cx="22" cy="28" r="2.5" fill="#fff" opacity="0.7" />
      <circle cx="42" cy="35" r="2.5" fill="#fff" opacity="0.8" />
      <circle cx="28" cy="44" r="2" fill="#fff" opacity="0.6" />
      <circle cx="48" cy="26" r="1.8" fill="#fff" opacity="0.5" />
      <circle cx="18" cy="38" r="2.2" fill="#fff" opacity="0.7" />
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x = 32 + Math.cos(rad) * 25;
        const y = 32 + Math.sin(rad) * 25;
        return <circle key={angle} cx={x} cy={y} r="1.5" fill="#fff" opacity="0.3" />;
      })}
    </svg>
  );
}

function InnovationIcon() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lightbulb */}
      <path d="M32 12 C24 12 20 18 20 24 C20 29 23 32 25 34 L25 38 L39 38 L39 34 C41 32 44 29 44 24 C44 18 40 12 32 12 Z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Filament */}
      <path d="M28 36 L32 30 L36 36" stroke="#fff" strokeWidth="1.2" opacity="0.5" />
      {/* Base */}
      <rect x="26" y="38" width="12" height="5" rx="1.5" stroke="#fff" strokeWidth="1.5" />
      <rect x="28" y="43" width="8" height="3" rx="1" fill="#fff" opacity="0.3" />
      {/* Rays */}
      {[330, 0, 30, 60, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 32 + Math.cos(rad) * 18;
        const y1 = 32 + Math.sin(rad) * 18;
        const x2 = 32 + Math.cos(rad) * 24;
        const y2 = 32 + Math.sin(rad) * 24;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
        );
      })}
    </svg>
  );
}

const whyItems = [
  {
    icon: HeritageIcon,
    titleKey: "why.since",
    descKey: "why.since.desc",
    stat: "1889",
    statLabelKey: "stats.founded",
  },
  {
    icon: QualityIcon,
    titleKey: "why.quality",
    descKey: "why.quality.desc",
    stat: "130+",
    statLabelKey: "stats.experience",
  },
  {
    icon: WorldwideIcon,
    titleKey: "why.worldwide",
    descKey: "why.worldwide.desc",
    stat: "50+",
    statLabelKey: "stats.countries",
  },
  {
    icon: InnovationIcon,
    titleKey: "why.innovation",
    descKey: "why.innovation.desc",
    stat: "24/7",
    statLabelKey: "stats.support",
  },
];

export function WhyTeon() {
  const { lang, t } = useLanguage();

  const statLabels: Record<string, Record<string, string>> = {
    "stats.founded": {
      uk: "Засновано",
      pl: "Założona",
      en: "Founded",
    },
    "stats.experience": {
      uk: "Років досвіду",
      pl: "Lat doświadczenia",
      en: "Years experience",
    },
    "stats.countries": {
      uk: "Країн",
      pl: "Krajów",
      en: "Countries",
    },
    "stats.support": {
      uk: "Підтримка",
      pl: "Wsparcie",
      en: "Support",
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F1F33] via-[#152B47] to-[#1E3A5F] py-14 sm:py-18 md:py-20">
      {/* Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top decorative line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-white/20" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/20 bg-white/5">
              <span className="text-[9px] font-extrabold tracking-[2px] text-white">
                K
              </span>
            </div>
            <div className="h-px w-8 bg-white/20" />
          </div>
          <h2 className="text-xl font-bold tracking-[2px] text-white sm:text-2xl md:text-[26px]">
            {t("why.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[13px] leading-relaxed text-white/50 sm:text-sm">
            {lang === "uk"
              ? "Понад 130 років німецької інженерної досконалості для вашої промисловості."
              : lang === "pl"
                ? "Ponad 130 lat niemieckiej doskonałości inżynieryjnej dla Twojej branży."
                : "Over 130 years of German engineering excellence for your industry."}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {whyItems.map((item, idx) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 pt-10 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-7 sm:pt-12 md:p-7 md:pt-12">
                {/* Icon */}
                <div className="relative z-10 mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 sm:mb-5 sm:h-[76px] sm:w-[76px] md:h-[80px] md:w-[80px]">
                  <item.icon />
                </div>

                {/* Stat Number */}
                <div className="relative z-10 mb-1 text-2xl font-extrabold tracking-tight text-white sm:text-[26px] md:text-[28px]">
                  {item.stat}
                </div>
                <div className="relative z-10 mb-3 text-[9px] font-bold uppercase tracking-[3px] text-white/40 sm:mb-4">
                  {statLabels[item.statLabelKey]?.[lang] || item.statLabelKey}
                </div>

                {/* Title */}
                <h3 className="relative z-10 mb-2.5 text-[15px] font-bold tracking-wide text-white sm:text-base">
                  {t(item.titleKey)}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-[12px] leading-relaxed text-white/55 sm:text-[13px]">
                  {t(item.descKey)}
                </p>

                {/* Bottom accent */}
                <div className="mt-5 h-[2px] w-8 bg-white/10 transition-all duration-300 group-hover:w-12 group-hover:bg-white/25 sm:mt-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}