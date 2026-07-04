"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  SlidersHorizontal,
  Image as ImageIcon,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero1.jpg";

export default function Products() {
  const { lang, t } = useLanguage();
  const products = getProducts(lang);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      {/* Hero Header */}
      <div
        className="relative overflow-hidden bg-gradient-to-br from-[#0F1F33] via-[#152B47] to-[#1E3A5F]"
        style={{
          backgroundImage: `url(${hero1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px, 40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1F33]/85 via-[#152B47]/80 to-[#1E3A5F]/75" />
        <div className="relative mx-auto max-w-[1200px] px-4 py-10 sm:py-14 md:py-16">
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
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[38px]">
            {t("products.page.title")}
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base">
            {lang === "uk"
              ? "Промислове дисперсійне обладнання KREI — високоякісні машини для диспергування, змішування та подрібнення від провідного європейського виробника."
              : lang === "pl"
                ? "Przemysłowe urządzenia dyspergujące KREI — wysokiej jakości maszyny do dyspergowania, mieszania i mielenia od wiodącego europejskiego producenta."
                : "KREI industrial dispersing equipment — high-quality machines for dispersing, mixing and grinding from a leading European manufacturer."}
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
            <ImageIcon size={48} className="mx-auto mb-4 text-[#ccc]" />
            <p className="text-sm text-[#999]">
              {t("products.no_products") || "No products found"}
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory || "all"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8"
            >
              {filtered.map((product, idx) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white transition-all duration-300 hover:border-[#1E3A5F]/30 hover:shadow-xl hover:shadow-[#1E3A5F]/5"
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="block no-underline"
                  >
                    {/* Image Area */}
                    <div className="relative h-[200px] overflow-hidden bg-[#e8e8e8] sm:h-[220px] md:h-[240px]">
                      <img
                        src={product.photos[0]}
                        alt={product.name}
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

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

                      {/* Product name overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h2 className="text-lg font-bold text-white drop-shadow-lg sm:text-xl">
                          {product.name.replace("KREI ", "")}
                        </h2>
                        <p className="mt-0.5 text-[12px] font-medium text-white/80 drop-shadow-md sm:text-[13px]">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5 sm:p-6">
                      {/* Description */}
                      <p className="mb-4 text-[13px] leading-relaxed text-[#555] sm:text-[14px]">
                        {product.description}
                      </p>

                      {/* Features (short list) */}
                      <div className="mb-5 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
                        {product.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <div className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F]/10">
                              <Check
                                size={10}
                                className="text-[#1E3A5F]"
                                strokeWidth={3}
                              />
                            </div>
                            <span className="text-[11px] text-[#666] sm:text-[12px]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Photo count + CTA */}
                      <div className="flex items-center justify-between border-t border-[#eee] pt-4">
                        <div className="flex items-center gap-1.5 text-[11px] text-[#999]">
                          <ImageIcon size={12} />
                          <span>{product.photos.length} {lang === "uk" ? "фото" : lang === "pl" ? "zdjęć" : "photos"}</span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#1E3A5F] transition-all duration-200 group-hover:gap-2.5 sm:text-[13px]">
                          {t("products.more")}
                          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
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