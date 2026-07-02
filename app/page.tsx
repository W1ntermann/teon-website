"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";
import { QuickLinksSection } from "@/components/QuickLinks";
import { ProcessHighlight } from "@/components/ProcessHighlight";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { WhyTeon } from "@/components/WhyTeon";
import AboutCompany from "@/components/AboutCompany";
import Testimonials from "@/components/Testimonials";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

const heroSlides = [
  { id: 1, image: hero1.src, overlay: "rgba(0,0,0,0.45)" },
  { id: 2, image: hero2.src, overlay: "rgba(0,0,0,0.45)" },
  { id: 3, image: hero3.src, overlay: "rgba(0,0,0,0.45)" },
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringTrustBadges, setIsHoveringTrustBadges] = useState(false);
  const { lang, t } = useLanguage();
  const products = getProducts(lang);
  const news = newsData[lang];
  const shows = showsData[lang];

  useEffect(() => {
    const timer = setInterval(() => { setCurrentSlide((prev) => (prev + 1) % heroSlides.length); }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  const trustBadges = [
    { icon: Shield, label: t("hero.trust_iso") },
    { icon: Award, label: t("hero.trust_atex") },
    { icon: Shield, label: t("hero.trust_ce") },
  ];

  return (
    <div className="min-h-screen font-sans bg-white text-black">
      {/* ===== HERO SECTION ===== */}
      <div
        className="relative min-h-[450px] overflow-hidden sm:min-h-[500px] md:min-h-[540px]"
        style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center", transition: "background-image 0.8s ease" }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: slide.overlay }} />

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
                className="inline-flex items-center gap-2 rounded bg-[#E8A838] px-8 py-3.5 text-[14px] font-bold text-[#1E3A5F] shadow-lg transition-all hover:bg-[#D4922E] hover:shadow-xl"
              >
                {t("hero.quote_btn")}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded border-2 border-white/50 bg-white/10 px-8 py-3.5 text-[14px] font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                {t("products.more")}
              </Link>
            </div>

            {/* Trust Badges */}
            <div 
              className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-5 md:gap-8"
              onMouseEnter={() => setIsHoveringTrustBadges(true)}
              onMouseLeave={() => setIsHoveringTrustBadges(false)}
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-1.5">
                  <badge.icon size={12} className="text-[#E8A838] sm:size-14" />
                  <span className="text-[11px] font-semibold text-white/80 sm:text-[12px] md:text-[13px]">{badge.label}</span>
                </div>
              ))}
              
              {/* Desktop: Show current slide number on hover */}
              <div className="hidden md:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isHoveringTrustBadges ? 1 : 0,
                    scale: isHoveringTrustBadges ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm"
                >
                  <span className="text-[11px] font-semibold text-white/90">Слайд</span>
                  <span className="text-[13px] font-bold text-white">{currentSlide + 1}</span>
                  <span className="text-[11px] text-white/70">/ {heroSlides.length}</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero nav buttons */}
        <button
          type="button"
          onClick={() => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
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

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-[108px]">
          {heroSlides.map((_, i) => (
            <button type="button" key={i} onClick={() => setCurrentSlide(i)} className="flex min-h-9 min-w-9 items-center justify-center p-0" aria-label={`Slide ${i + 1}`}>
              <span className={cn("block h-3 w-3 rounded-full border border-white/80 transition-colors md:h-[12px] md:w-[12px]", i === currentSlide ? "bg-white" : "bg-white/30")} />
            </button>
          ))}
        </div>

        {/* Desktop: Product panel at hero bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block">
          <div className="grid grid-cols-4 auto-rows-fr">
            {products.map((product, idx) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className={cn(
                  "group flex items-center justify-center gap-3.5 bg-[rgba(30,58,95,0.82)] px-5 py-4 no-underline hover:bg-[rgba(30,58,95,0.92)] transition-all duration-200 h-full w-full",
                  idx < 3 && "border-r border-white/10"
                )}
              >
                <div className="flex shrink-0 items-center justify-center">
                  <div className="flex items-center justify-center rounded-full border-2 border-white bg-[#1E3A5F] h-11 w-11 transition-transform group-hover:scale-105">
                    <span className="font-bold text-white text-[10px]">KREI</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold tracking-widest text-white text-[9px] uppercase">KREI</div>
                  <div className="font-bold leading-tight text-white text-[12px] line-clamp-2">{product.name.replace("KREI ", "")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Product panel outside hero */}
      <div className="md:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr">
          {products.map((product, idx) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={cn(
                "group flex items-center justify-center gap-2.5 bg-[#1E3A5F] px-3 py-3.5 no-underline hover:bg-[#152B47] transition-all duration-200 h-full w-full sm:gap-3 sm:px-4 sm:py-4",
                idx % 2 === 0 && "border-r border-white/10",
                idx < 2 && "border-b border-white/10"
              )}
            >
              <div className="flex shrink-0 items-center justify-center">
                <div className="flex items-center justify-center rounded-full border-2 border-white bg-[#1E3A5F] h-9 w-9 sm:h-10 sm:w-10 transition-transform group-hover:scale-105">
                  <span className="font-bold text-white text-[9px] sm:text-[9px]">KREI</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold tracking-widest text-white text-[8px] sm:text-[8px] uppercase">KREI</div>
                <div className="font-bold leading-tight text-white text-[11px] sm:text-[11px] line-clamp-2">{product.name.replace("KREI ", "")}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== B2B STATS BAR ===== */}
      <div className="relative overflow-hidden border-b border-[#e5e5e5] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1E3A5F 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="relative mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {/* Stat 1 - Machines */}
            <div className="group flex items-center gap-4 sm:justify-center">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#2a4a7a] shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path d="M19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10" />
                  <path d="M13 11h4a2 2 0 012 2v3" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A5F] leading-none tracking-tight">200+</div>
                <div className="mt-1 text-sm sm:text-base font-semibold text-[#555]">{t("stats.machines")}</div>
              </div>
            </div>

            {/* Stat 2 - Clients */}
            <div className="group flex items-center gap-4 sm:justify-center">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E8A838] to-[#D4922E] shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A5F] leading-none tracking-tight">200+</div>
                <div className="mt-1 text-sm sm:text-base font-semibold text-[#555]">{t("stats.clients")}</div>
              </div>
            </div>

            {/* Stat 3 - Years */}
            <div className="group flex items-center gap-4 sm:justify-center">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#2a4a7a] shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A5F] leading-none tracking-tight">8+</div>
                <div className="mt-1 text-sm sm:text-base font-semibold text-[#555]">{t("stats.years")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>


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