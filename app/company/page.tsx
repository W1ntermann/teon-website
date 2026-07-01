"use client";

import { useLanguage } from "@/context/LanguageContext";
import CompanyPageContent from "@/components/CompanyPageContent";
import heroFactory from "@/assets/hero-factory.jpg";

export default function Company() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen font-sans">
      {/* ===== PAGE HEADER ===== */}
      <div
        className="relative flex min-h-[200px] items-center px-4 py-10 sm:min-h-[240px] sm:py-12 md:min-h-[260px] md:py-14"
        style={{
          backgroundImage: `url(${heroFactory.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(15,31,51,0.7)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <h1 className="text-[24px] font-bold tracking-wide text-white sm:text-[28px] md:text-[32px]">{t("company.title")}</h1>
          <div className="mt-2 text-[13px] text-white/60">
            {t("breadcrumb.home")} / {t("company.title")}
          </div>
        </div>
      </div>

      <CompanyPageContent />
    </div>
  );
}
