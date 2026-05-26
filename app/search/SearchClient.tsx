"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts, type ProductData } from "@/translations/productData";
import { ProductSlider } from "@/components/ProductSlider";
import { ChevronRight, ArrowRight, Search, ArrowUpRight } from "lucide-react";

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const { lang, t } = useLanguage();
  const allProducts = getProducts(lang);

  const results = query
    ? allProducts.filter((p: ProductData) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.fullDescription.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q)) ||
          p.applications.some((a) => a.toLowerCase().includes(q))
        );
      })
    : [];

  const countMsg = t("search.found").replace("{count}", String(results.length));

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#3a3f42] via-[#4C5154] to-[#3a3f42]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px, 40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 py-10 sm:py-14 md:py-16">
          <div className="flex items-center gap-2 text-[13px] text-white/50">
            <Link
              href="/"
              className="text-white/50 no-underline transition-colors hover:text-white/80"
            >
              {t("breadcrumb.home")}
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/90">{t("search.title")}</span>
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {t("search.title")}
          </h1>
          {query && (
            <p className="mt-3 text-[15px] leading-relaxed text-white/60 sm:text-base">
              {t("search.for").replace("{query}", query)}
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-10 md:py-12">
        {query && results.length > 0 && (
          <p className="mb-6 text-sm text-[#666]">{countMsg}</p>
        )}

        {!query ? (
          <div className="py-20 text-center">
            <Search size={48} className="mx-auto mb-4 text-[#ccc]" />
            <p className="text-[#999] text-sm">{t("search.placeholder")}</p>
          </div>
        ) : results.length === 0 ? (
          <div className="py-20 text-center">
            <Search size={48} className="mx-auto mb-4 text-[#ccc]" />
            <h2 className="mb-2 text-lg font-bold text-[#333]">{t("search.no_results")}</h2>
            <p className="mb-8 text-sm text-[#999]">{t("search.no_results_desc")}</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4C5154] px-5 py-2.5 text-[13px] font-semibold text-white no-underline shadow-sm shadow-[#4C5154]/20 transition-all duration-200 hover:bg-[#3a3f42]"
            >
              {t("search.browse_products")}
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {results.map((product: ProductData) => (
              <article
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white transition-all duration-300 hover:border-[#4C5154]/30 hover:shadow-xl hover:shadow-[#4C5154]/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] xl:grid-cols-[minmax(0,380px)_1fr]">
                  {/* Image Area */}
                  <div className="relative overflow-hidden bg-[#e8e8e8] lg:min-h-[320px]">
                    <ProductSlider
                      photos={product.photos}
                      productName={product.name}
                      className="h-full"
                    />
                    <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg bg-white/90 px-2.5 py-1.5 shadow-sm backdrop-blur-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4C5154]">
                        <span className="text-[7px] font-bold text-white">K</span>
                      </div>
                      <span className="text-[10px] font-bold tracking-[2px] text-[#4C5154]">
                        KREI
                      </span>
                    </div>
                    <div className="absolute right-3 top-3 z-10 rounded-md bg-black/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {product.category}
                    </div>
                    {/* Highlight match badge */}
                    <div className="absolute bottom-3 left-3 z-10 rounded-full bg-[#4C5154] px-3 py-1 text-[10px] font-semibold text-white shadow-md">
                      {t("products.page.title")}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col justify-between p-5 sm:p-6 md:p-7">
                    <div>
                      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="mb-1 inline-block text-[10px] font-bold uppercase tracking-[3px] text-[#4C5154]/50">
                            KREI
                          </span>
                          <h2 className="text-xl font-bold tracking-tight text-[#1a1a1a] sm:text-[22px] md:text-2xl">
                            {product.name.replace("KREI ", "")}
                          </h2>
                        </div>
                      </div>

                      <p className="mb-3 text-[13px] font-medium italic text-[#4C5154]/70">
                        {product.tagline}
                      </p>

                      <p className="mb-5 text-sm leading-relaxed text-[#555] sm:text-[14px]">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 border-t border-[#eee] pt-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#4C5154] px-5 py-2.5 text-[13px] font-semibold text-white no-underline shadow-sm shadow-[#4C5154]/20 transition-all duration-200 hover:bg-[#3a3f42] hover:shadow-md hover:shadow-[#4C5154]/30"
                      >
                        {t("products.more")}
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#d0d0d0] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#4C5154] no-underline transition-all duration-200 hover:border-[#4C5154] hover:bg-[#4C5154]/5"
                      >
                        {t("products.request")}
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
