"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";
import { ProductSlider } from "@/components/ProductSlider";
import {
  ChevronRight,
  ArrowRight,
  Check,
  ArrowUpRight,
  SlidersHorizontal,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Products() {
  const { lang, t } = useLanguage();
  const products = getProducts(lang);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0F1F33] via-[#152B47] to-[#1E3A5F]">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px, 40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 py-10 sm:py-14 md:py-16">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-white/50">
            <Link
              href="/"
              className="text-white/50 no-underline transition-colors hover:text-white/80"
            >
              {t("breadcrumb.home")}
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/90">{t("breadcrumb.products")}</span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[38px]">
            {t("products.page.title")}
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base">
            {lang === "uk"
              ? "Промислове дисперсійне обладнання KREI — німецька якість, точність та надійність для вашого виробництва."
              : lang === "pl"
                ? "Przemysłowe urządzenia dyspergujące KREI — niemiecka jakość, precyzja i niezawodność dla Twojej produkcji."
                : "KREI industrial dispersing equipment — German quality, precision and reliability for your production."}
          </p>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="sticky top-0 z-20 border-b border-[#e5e5e5] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center gap-1 overflow-x-auto px-4 py-3 scrollbar-hide">
          <SlidersHorizontal size={14} className="mr-2 shrink-0 text-[#1E3A5F]/50" />
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-wide transition-all duration-200",
              !activeCategory
                ? "bg-[#1E3A5F] text-white shadow-md shadow-[#1E3A5F]/20"
                : "bg-transparent text-[#666] hover:bg-[#e8e8e8] hover:text-[#333]"
            )}
          >
            {lang === "uk" ? "Всі" : lang === "pl" ? "Wszystkie" : "All"}
          </button>
              {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-wide transition-all duration-200",
                cat === activeCategory
                  ? "bg-[#1E3A5F] text-white shadow-md shadow-[#1E3A5F]/20"
                  : "bg-transparent text-[#666] hover:bg-[#e8e8e8] hover:text-[#333]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-10 md:py-12">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-[#999] text-sm">
              {t("products.no_products") || "No products found"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {filtered.map((product, idx) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white transition-all duration-300 hover:border-[#1E3A5F]/30 hover:shadow-xl hover:shadow-[#1E3A5F]/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] xl:grid-cols-[minmax(0,420px)_1fr]">
                  {/* Image Area */}
                  <div className="relative overflow-hidden bg-[#e8e8e8] lg:min-h-[340px]">
                    <ProductSlider
                      photos={product.photos}
                      productName={product.name}
                      className="h-full"
                      aspectRatio="square"
                    />

                    {/* Brand Badge */}
                    <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg bg-white/90 px-2.5 py-1.5 shadow-sm backdrop-blur-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1E3A5F]">
                        <span className="text-[7px] font-bold text-white">K</span>
                      </div>
                      <span className="text-[10px] font-bold tracking-[2px] text-[#1E3A5F]">
                        KREI
                      </span>
                    </div>
                    {/* Category tag */}
                    <div className="absolute right-3 top-3 z-10 rounded-md bg-black/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {product.category}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col justify-between p-5 sm:p-6 md:p-7">
                    <div>
                      {/* Header Row */}
                      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="mb-1 inline-block text-[10px] font-bold uppercase tracking-[3px] text-[#1E3A5F]/50">
                            KREI
                          </span>
                          <h2 className="text-xl font-bold tracking-tight text-[#1a1a1a] sm:text-[22px] md:text-2xl">
                            {product.name.replace("KREI ", "")}
                          </h2>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="mb-3 text-[13px] font-medium italic text-[#1E3A5F]/70">
                        {product.tagline}
                      </p>

                      {/* Description */}
                      <p className="mb-5 text-sm leading-relaxed text-[#555] sm:text-[14px]">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                        {product.features.slice(0, 6).map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <div className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F]/10">
                              <Check
                                size={10}
                                className="text-[#1E3A5F]"
                                strokeWidth={3}
                              />
                            </div>
                            <span className="text-[12px] text-[#666] sm:text-[13px]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-3 border-t border-[#eee] pt-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#1E3A5F] px-5 py-2.5 text-[13px] font-semibold text-white no-underline shadow-sm shadow-[#1E3A5F]/20 transition-all duration-200 hover:bg-[#152B47] hover:shadow-md hover:shadow-[#1E3A5F]/30"
                      >
                        {t("products.more")}
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#d0d0d0] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1E3A5F] no-underline transition-all duration-200 hover:border-[#1E3A5F] hover:bg-[#1E3A5F]/5"
                      >
                        {t("products.request")}
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* CTA Banner */}
      <div className="border-t border-[#e5e5e5] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-14">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-[#0F1F33] via-[#152B47] to-[#1E3A5F] p-6 text-center sm:p-10 md:flex-row md:justify-between md:text-left md:px-10 md:py-10">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl md:text-[22px]">
                {lang === "uk"
                  ? "Не знайшли потрібне обладнання?"
                  : lang === "pl"
                    ? "Nie znalazłeś odpowiedniego sprzętu?"
                    : "Didn't find the right equipment?"}
              </h3>
              <p className="mt-2 text-sm text-white/60 sm:text-[15px]">
                {lang === "uk"
                  ? "Зв'яжіться з нашими інженерами — ми підберемо індивідуальне рішення під ваше виробництво."
                  : lang === "pl"
                    ? "Skontaktuj się z naszymi inżynierami — dobierzemy indywidualne rozwiązanie dla Twojej produkcji."
                    : "Contact our engineers — we'll find an individual solution for your production."}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-bold text-[#1E3A5F] no-underline shadow-lg shadow-black/20 transition-all duration-200 hover:bg-[#f0f0f0] hover:shadow-xl"
            >
              {t("products.request")}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}