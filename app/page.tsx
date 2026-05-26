"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";
import { QuickLinksSection } from "@/components/QuickLinks";
import { ProcessHighlight } from "@/components/ProcessHighlight";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { WhyTeon } from "@/components/WhyTeon";
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
  const { lang, t } = useLanguage();
  const products = getProducts(lang);
  const news = newsData[lang];
  const shows = showsData[lang];

  useEffect(() => {
    const timer = setInterval(() => { setCurrentSlide((prev) => (prev + 1) % heroSlides.length); }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen font-sans bg-white text-black">
      <div className="relative min-h-[300px] overflow-hidden sm:min-h-[360px] md:min-h-[420px]" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center", transition: "background-image 0.8s ease" }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: slide.overlay }} />
        <button type="button" onClick={() => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-4 top-1/2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded border border-white/50 bg-white/20 text-white"><ChevronLeft size={24} /></button>
        <button type="button" onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)} className="absolute right-4 top-1/2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded border border-white/50 bg-white/20 text-white"><ChevronRight size={24} /></button>
        <div className="absolute bottom-[150px] left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-[108px]">
          {heroSlides.map((_, i) => (<button type="button" key={i} onClick={() => setCurrentSlide(i)} className="flex min-h-9 min-w-9 items-center justify-center p-0" aria-label={`Slide ${i + 1}`}><span className={cn("block h-2.5 w-2.5 rounded-full border border-white/80 transition-colors md:h-[10px] md:w-[10px]", i === currentSlide ? "bg-white" : "bg-white/30")} /></button>))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr">
            {products.map((product, idx) => (
              <Link key={product.id} href={`/products/${product.slug}`} className={cn("group flex items-center justify-center gap-2.5 bg-[rgba(76,81,84,0.82)] px-3 py-3.5 no-underline hover:bg-[rgba(76,81,84,0.92)] transition-all duration-200 h-full w-full sm:gap-3 sm:px-4 sm:py-4 md:gap-3.5 md:px-5 md:py-4", idx % 2 === 0 && "border-r border-white/10", idx < 2 && "border-b border-white/10 md:border-b-0", idx < 3 && "md:border-r md:border-white/10", idx === products.length - 1 && idx % 2 === 1 && "md:border-r-0")}>
                <div className="flex shrink-0 items-center justify-center">
                  <div className={cn("flex items-center justify-center rounded-full border-2 border-white bg-[#4C5154] h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 transition-transform group-hover:scale-105")}>
                    <span className={cn("font-bold text-white text-[6px] sm:text-[7px] md:text-[8px]")}>KREI</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className={cn("font-bold tracking-widest text-white text-[6px] sm:text-[7px] md:text-[8px] uppercase")}>KREI</div>
                  <div className={cn("font-bold leading-tight text-white text-[9px] sm:text-[10px] md:text-[11px] line-clamp-2")}>{product.name.replace("KREI ", "")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Process + About Section */}
      <ProcessHighlight />

      <div className="bg-[#fafafa] border-b border-[#e5e5e5]">
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-14">
            {/* Text Column */}
            <div>
              <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-[4px] text-[#4C5154]/50">
                {t("about.title")}
              </span>
              <p className="text-[14px] leading-[1.9] text-[#333] sm:text-[15px]">
                {t("about.text1")}
              </p>
              <p className="mt-4 text-[14px] leading-[1.9] text-[#333] sm:text-[15px]">
                {t("about.text2")}
              </p>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-sm border border-[#d5d5d5] bg-white px-4 py-3 text-center">
                  <div className="text-xl font-bold tracking-tight text-[#4C5154] sm:text-2xl">1889</div>
                  <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#888]">
                    {lang === "uk" ? "Засновано" : lang === "pl" ? "Założona" : "Founded"}
                  </div>
                </div>
                <div className="rounded-sm border border-[#d5d5d5] bg-white px-4 py-3 text-center">
                  <div className="text-xl font-bold tracking-tight text-[#4C5154] sm:text-2xl">130+</div>
                  <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#888]">
                    {lang === "uk" ? "Років досвіду" : lang === "pl" ? "Lat doświadczenia" : "Years experience"}
                  </div>
                </div>
                <div className="rounded-sm border border-[#d5d5d5] bg-white px-4 py-3 text-center col-span-2 sm:col-span-1">
                  <div className="text-xl font-bold tracking-tight text-[#4C5154] sm:text-2xl">50+</div>
                  <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#888]">
                    {lang === "uk" ? "Країн" : lang === "pl" ? "Krajów" : "Countries"}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative overflow-hidden rounded-sm bg-[#e8e8e8] min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]">
              <svg viewBox="0 0 640 340" width="100%" height="100%" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
                <rect width="640" height="340" fill="#c8c8c8" />
                <rect x="0" y="160" width="640" height="180" fill="#a0a0a0" />
                <rect x="60" y="100" width="220" height="90" rx="2" fill="#d5d5d5" />
                <rect x="80" y="82" width="180" height="24" rx="3" fill="#b0b0b0" />
                <rect x="290" y="110" width="130" height="80" rx="2" fill="#cccccc" />
                <rect x="430" y="115" width="100" height="75" rx="2" fill="#d0d0d0" />
                <rect x="60" y="190" width="360" height="50" rx="2" fill="#999" />
                {[0, 40, 80, 120, 360, 400, 440, 520, 560, 600].map((x, i) => (
                  <ellipse key={i} cx={x + 25} cy="178" rx="14" ry="10" fill="#888" />
                ))}
                <rect x="0" y="242" width="640" height="4" fill="#aaa" />
              </svg>
              {/* Overlay badge */}
              <div className="absolute bottom-3 right-3 bg-[rgba(76,81,84,0.85)] text-white px-3 py-1.5 text-[10px] font-semibold tracking-wider rounded-sm">
                {lang === "uk" ? "Теон — Hüllhorst" : lang === "pl" ? "Teon — Hüllhorst" : "Teon — Hüllhorst"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickLinksSection />

      {/* Products Showcase */}
      <ProductsShowcase />

      {/* Why Teon */}
      <WhyTeon />

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="mb-5 flex flex-col gap-3 sm:mb-[22px] sm:flex-row sm:items-center sm:justify-between">
          <h2 className="m-0 text-lg font-bold tracking-wide text-[#4C5154] sm:text-xl md:text-[22px]">{t("news.title")}</h2>
          <a href="#" className="flex w-fit shrink-0 items-center gap-1 text-sm font-bold text-[#4C5154] no-underline">{t("news.all")} <ArrowRight size={14} /></a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-[22px]">
          {news.map((item) => (
            <div key={item.title} style={{ border: "1px solid #d0d0d0", padding: "20px", cursor: "pointer", borderTop: "3px solid #4C5154", transition: "box-shadow 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.09)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = "none")}>
              <div style={{ color: "#666", fontSize: "12px", marginBottom: "8px" }}>{item.date}</div>
              <h3 style={{ color: "#4C5154", fontSize: "14px", fontWeight: "bold", marginBottom: "10px", lineHeight: "1.4" }}>{item.title}</h3>
              <p style={{ color: "#000", fontSize: "13px", lineHeight: "1.6", margin: "0 0 14px" }}>{item.text}</p>
              <a href="#" style={{ color: "#4C5154", fontSize: "12px", textDecoration: "none", fontWeight: "bold", display: "inline-flex", alignItems: "center", gap: "4px" }}>{t("news.read_more")} <ArrowRight size={12} /></a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f5f5f5] px-4 py-8 sm:py-10 md:py-10 md:pb-11">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-5 text-lg font-bold tracking-wide text-[#4C5154] sm:text-xl md:mb-[22px] md:text-[22px]">{t("exhibitions.title")}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shows.map((show) => (
              <div key={show.name} style={{ backgroundColor: "#fff", border: "1px solid #d0d0d0", padding: "16px" }}>
                <div style={{ color: "#4C5154", fontSize: "12px", fontWeight: "bold", marginBottom: "6px" }}>{show.date}</div>
                <div style={{ color: "#4C5154", fontSize: "14px", fontWeight: "bold", marginBottom: "4px" }}>{show.name}</div>
                <div style={{ color: "#000", fontSize: "12px" }}>{show.city}</div>
                <div style={{ color: "#666", fontSize: "11px", marginTop: "4px" }}>{show.hall}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}