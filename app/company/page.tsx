"use client";

import { useLanguage } from "@/context/LanguageContext";
import CompanyPageContent from "@/components/CompanyPageContent";

export default function Company() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen font-sans">
      {/* ===== PAGE HEADER ===== */}
      <div className="bg-gradient-to-r from-[#1E3A5F] to-[#0F1F33] px-4 py-8 sm:py-10 md:py-[34px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-[24px] font-bold text-white sm:text-[28px] md:text-[30px]">{t("company.title")}</h1>
          <div className="mt-2 text-[13px] text-white/60">
            {t("breadcrumb.home")} / {t("company.title")}
          </div>
        </div>
      </div>

      <CompanyPageContent />
    </div>
  );
}
