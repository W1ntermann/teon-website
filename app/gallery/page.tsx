"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      <main className="flex-1 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-2xl font-bold text-[#4C5154] sm:text-3xl">{t("gallery.title")}</h1>
          <p className="mb-6 text-base text-black sm:text-lg">{t("gallery.description")}</p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-200 text-base font-semibold text-gray-500 sm:h-48 sm:text-lg">
                {t("gallery.photo")}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}