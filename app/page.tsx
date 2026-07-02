"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";
import { QuickLinksSection } from "@/components/QuickLinks";
import { HeroSection } from "@/components/HeroSection";
import { ProductPanel } from "@/components/ProductPanel";
import { ProcessHighlight } from "@/components/ProcessHighlight";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { WhyTeon } from "@/components/WhyTeon";
import AboutCompany from "@/components/AboutCompany";
import Testimonials from "@/components/Testimonials";
import { CountUpStats } from "@/components/CountUpStats";

const newsData: Record<string, { date: string; title: string; text: string }[]> = {
  uk: [{ date: "15.04.2024", title: "Теон на виставці Hannover Messe 2024", text: "Відвідайте наш стенд на найбільшій промисловій виставці світу." }, { date: "01.03.2024", title: "Нова версія KREI DISSOLVER-Butterfly", text: "Представляємо оновлену серію диссольверів." }, { date: "10.02.2024", title: "Розширення сервісного відділу", text: "Наша команда фахівців готова надати швидкий сервіс." }],
  en: [{ date: "15.04.2024", title: "Teon at Hannover Messe 2024", text: "Visit our booth at the largest industrial trade fair." }, { date: "01.03.2024", title: "New KREI DISSOLVER-Butterfly", text: "Introducing the updated dissolver series." }, { date: "10.02.2024", title: "Expansion of Service", text: "Our team is ready for fast service worldwide." }],
  pl: [{ date: "15.04.2024", title: "Teon na targach Hannover Messe 2024", text: "Odwiedź nasze stoisko." }, { date: "01.03.2024", title: "Nowa wersja KREI DISSOLVER-Butterfly", text: "Prezentujemy zaktualizowaną serię." }, { date: "10.02.2024", title: "Rozbudowa serwisu", text: "Nasz zespół gotowy do szybkiego serwisu." }],
};

const showsData: Record<string, { date: string; name: string; city: string; hall: string }[]> = {
  uk: [{ date: "22-26 квіт 2024", name: "Hannover Messe", city: "Ганновер", hall: "Зал 6, B12" }, { date: "05-08 чер 2024", name: "ECS", city: "Нюрнберг", hall: "Зал 9, C24" }, { date: "10-14 вер 2024", name: "ACHEMA", city: "Франкфурт", hall: "Зал 4.2, A08" }],
  en: [{ date: "22-26 Apr 2024", name: "Hannover Messe", city: "Hannover", hall: "Hall 6, B12" }, { date: "05-08 Jun 2024", name: "ECS", city: "Nuremberg", hall: "Hall 9, C24" }, { date: "10-14 Sep 2024", name: "ACHEMA", city: "Frankfurt", hall: "Hall 4.2, A08" }],
  pl: [{ date: "22-26 kwi 2024", name: "Hannover Messe", city: "Hanower", hall: "Hala 6, B12" }, { date: "05-08 cze 2024", name: "ECS", city: "Norymberga", hall: "Hala 9, C24" }, { date: "10-14 wrz 2024", name: "ACHEMA", city: "Frankfurt", hall: "Hala 4.2, A08" }],
};

export default function Home() {
  const { lang, t } = useLanguage();
  const products = getProducts(lang);
  const news = newsData[lang];
  const shows = showsData[lang];

  return (
    <div className="min-h-screen font-sans bg-white text-black">
      {/* ===== HERO SECTION ===== */}
      <HeroSection />

      {/* ===== PRODUCT PANEL (below hero) ===== */}
      <ProductPanel products={products} />

      {/* ===== B2B STATS BAR ===== */}
      <CountUpStats lang={lang} t={t} />


      {/* ===== PROCESS HIGHLIGHT ===== */}
      <ProcessHighlight />

      {/* ===== ABOUT COMPANY ===== */}
      <AboutCompany />

      {/* ===== QUICK LINKS ===== */}
      <QuickLinksSection />

      {/* ===== PRODUCTS SHOWCASE ===== */}
      <ProductsShowcase />

      {/* ===== WHY TEON ===== */}
      <WhyTeon />
      
      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== NEWS SECTION ===== */}
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="mb-5 flex flex-col gap-3 sm:mb-[22px] sm:flex-row sm:items-center sm:justify-between">
          <h2 className="m-0 text-lg font-bold tracking-wide text-[#1E3A5F] sm:text-xl md:text-[22px]">{t("news.title")}</h2>
          <a href="#" className="flex w-fit shrink-0 items-center gap-1 text-sm font-bold text-[#1E3A5F] no-underline">{t("news.all")} <ArrowRight size={14} /></a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-[22px]">
          {news.map((item) => (
            <div
              key={item.title}
              className="group cursor-pointer border border-[#d0d0d0] p-5 pt-[20px] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.09)]"
              style={{ borderTop: "3px solid #1E3A5F" }}
            >
              <div className="mb-2 text-[12px] text-[#666]">{item.date}</div>
              <h3 className="mb-2.5 text-[14px] font-bold leading-[1.4] text-[#1E3A5F]">{item.title}</h3>
              <p className="mb-3.5 text-[13px] leading-[1.6] text-[#000]">{item.text}</p>
              <a href="#" className="inline-flex items-center gap-1 text-[12px] font-bold text-[#1E3A5F] no-underline">
                {t("news.read_more")} <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ===== EXHIBITIONS SECTION ===== */}
      <div className="bg-[#f5f5f5] px-4 py-8 sm:py-10 md:py-10 md:pb-11">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-5 text-lg font-bold tracking-wide text-[#1E3A5F] sm:text-xl md:mb-[22px] md:text-[22px]">{t("exhibitions.title")}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shows.map((show) => (
              <div key={show.name} className="border border-[#d0d0d0] bg-white p-4">
                <div className="mb-1.5 text-[12px] font-bold text-[#1E3A5F]">{show.date}</div>
                <div className="mb-1 text-[14px] font-bold text-[#1E3A5F]">{show.name}</div>
                <div className="text-[12px] text-[#000]">{show.city}</div>
                <div className="mt-1 text-[11px] text-[#666]">{show.hall}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}