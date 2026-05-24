"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight, Download, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProductBySlug } from "@/translations/productData";
import { ProductSlider } from "@/components/ProductSlider";

export default function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const slug = params?.slug || "";

  const product = getProductBySlug(slug, lang);

  if (!product) {
    return (
      <div className="min-h-screen font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
        <div className="text-center px-4 py-20">
          <h1 className="text-2xl text-[#4C5154] font-bold">Product not found</h1>
          <Link href="/products" className="inline-block mt-4 text-[#4C5154] hover:underline">← {t("product.back")}</Link>
        </div>
      </div>
    );
  }

  const allProducts = ["krei-dissolver", "krei-basket-mill", "krei-dissolver-butterfly", "krei-continuous-mill"];
  const currentIndex = allProducts.indexOf(slug);
  const names = ["KREI DISSOLVER", "KREI BASKET-MILL", "KREI DISSOLVER-BUTTERFLY", "KREI CONTINUOUS-MILL"];

  const THEON_GRAY = "#4C5154";

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="bg-[#4C5154] px-4 py-6 sm:py-7 md:py-7 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/70">
            <Link href="/" className="shrink-0 text-white/70 no-underline hover:text-white">{t("breadcrumb.home")}</Link>
            <ChevronRight size={14} className="shrink-0" />
            <Link href="/products" className="shrink-0 text-white/70 no-underline hover:text-white">{t("breadcrumb.products")}</Link>
            <ChevronRight size={14} className="shrink-0" />
            <span className="min-w-0 break-words text-white">{product.name}</span>
          </div>
          <h1 className="m-0 text-xl font-bold tracking-wide text-white sm:text-2xl md:text-[26px] break-words">{product.name}</h1>
          <p className="mt-2 text-sm text-white/80">{product.tagline}</p>
        </div>
      </div>

      <div className="overflow-x-auto border-b border-[#d0d0d0] bg-[#f5f5f5] [-webkit-overflow-scrolling:touch]">
        <div className="mx-auto flex max-w-[1200px] gap-0 min-w-max">
          {allProducts.map((s, i) => (
            <Link key={s} href={`/products/${s}`} className="whitespace-nowrap px-3 py-3 text-xs font-bold no-underline transition-all duration-200 sm:px-4 md:px-[18px]"
              style={{ color: i === currentIndex ? THEON_GRAY : "#000", borderBottom: i === currentIndex ? `3px solid ${THEON_GRAY}` : "3px solid transparent" }}>
              {names[i]}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-10 md:py-10">
        <div className="mb-10 grid grid-cols-1 gap-8 lg:mb-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12 xl:gap-[50px]">
          <div className="w-full">
            <div className="relative overflow-hidden border border-[#d0d0d0] bg-[#e8e8e8]">
              <ProductSlider photos={product.photos} productName={product.name} />
              <div style={{ position: "absolute", top: "12px", left: "12px", zIndex: 10, backgroundColor: THEON_GRAY, border: "2px solid #fff", borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontSize: "8px", fontWeight: "bold", letterSpacing: "0.5px" }}>KREI</span>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/contact" className="flex flex-1 items-center justify-center gap-2 bg-[#4C5154] px-5 py-3 text-center text-sm font-bold text-white no-underline transition-colors hover:bg-[#3a3f42]"><Mail size={16} /> {t("product.request")}</Link>
              <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 border-2 border-[#4C5154] bg-white px-5 py-3 text-center text-sm font-bold text-[#4C5154] transition-all duration-200 hover:bg-[#4C5154] hover:text-white"><Download size={16} /> {t("product.download")}</button>
            </div>
          </div>

          <div className="w-full">
            <div className="mb-5 flex flex-wrap items-center gap-3 sm:flex-nowrap sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#4C5154]"><span className="text-[9px] font-bold text-white">KREI</span></div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold tracking-[3px] text-[#4C5154]">KREI</div>
                <h2 className="m-0 break-words text-xl font-bold text-[#4C5154] sm:text-[22px]">{product.name.replace("KREI ", "")}</h2>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-[#000] sm:text-[15px] sm:leading-[1.8]">{product.fullDescription}</p>
            <h3 className="mb-4 border-b-2 border-[#d0d0d0] pb-2 text-base font-bold text-[#4C5154]">{t("product.features")}</h3>
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-[#000]"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4C5154]" /><span className="break-words">{feature}</span></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-6 lg:mb-12 lg:grid-cols-2 lg:gap-8 xl:gap-[30px]">
          <div className="border border-[#d0d0d0] border-t-[3px] border-t-[#4C5154] bg-[#f5f5f5] p-5 sm:p-6">
            <h3 className="mb-4 text-base font-bold text-[#4C5154]">{t("product.applications")}</h3>
            <ul className="m-0 list-none p-0">
              {product.applications.map((app) => (<li key={app} className="flex items-center gap-2 border-b border-[#d0d0d0] py-2 text-sm text-[#000]"><ChevronRight size={14} className="shrink-0 text-[#4C5154]" /><span className="break-words">{app}</span></li>))}
            </ul>
          </div>
          <div className="overflow-x-auto bg-[#4C5154] p-5 sm:p-6">
            <h3 className="mb-4 text-base font-bold text-white">{t("product.technical")}</h3>
            <table className="w-full min-w-[240px] border-collapse">
              <tbody>
                {product.technicalSpecs.map((spec) => (<tr key={spec.label} className="border-b border-white/15"><td className="py-2 pr-3 text-xs text-white/80 sm:py-2 sm:pr-4 sm:text-[13px]">{spec.label}</td><td className="py-2 text-right text-xs font-bold text-white sm:py-2 sm:text-[13px]">{spec.value}</td></tr>))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10 lg:mb-12">
          <h3 className="mb-4 border-b-2 border-[#4C5154] pb-2 text-lg font-bold text-[#4C5154]">{t("product.models")}</h3>
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse text-sm sm:min-w-0">
              <thead><tr className="bg-[#4C5154] text-white"><th className="px-4 py-3 text-left text-sm font-bold sm:px-6">{t("products.models")}</th><th className="px-4 py-3 text-left text-sm font-bold sm:px-6">Motor</th><th className="px-4 py-3 text-left text-sm font-bold sm:px-6">Volume</th><th className="px-4 py-3 text-center text-sm font-bold sm:px-6"></th></tr></thead>
              <tbody>
                {product.models.map((model, i) => (<tr key={model.name} className={i % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"} style={{ borderBottom: "1px solid #d0d0d0" }}><td className="px-4 py-3 font-bold text-[#4C5154] sm:px-6">{model.name}</td><td className="px-4 py-3 text-[#000] sm:px-6">{model.power}</td><td className="px-4 py-3 text-[#000] sm:px-6">{model.volume}</td><td className="px-4 py-3 text-center sm:px-6"><Link href="/contact" className="inline-block bg-[#4C5154] px-4 py-1.5 text-xs font-bold text-white no-underline transition-colors hover:bg-[#3a3f42] sm:px-5 sm:py-2">{t("product.request")}</Link></td></tr>))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 border border-[#d0d0d0] border-l-[5px] border-l-[#4C5154] bg-[#f5f5f5] p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-6 md:mb-10 md:px-[30px] md:py-6">
          <div className="min-w-0 flex-1">
            <h3 className="mb-2 text-base font-bold text-[#4C5154] md:text-[17px]">{t("product.contact_expert")}</h3>
            <div className="flex flex-col gap-2 text-sm text-[#000] sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
              <span className="flex items-center gap-1.5"><Phone size={14} className="shrink-0 text-[#4C5154]" /><span className="break-words">+49 (0) 5744 / 508-0</span></span>
              <span className="flex items-center gap-1.5 break-all"><Mail size={14} className="shrink-0 text-[#4C5154]" /><span className="break-all">info@theon.com</span></span>
            </div>
          </div>
          <Link href="/contact" className="inline-block bg-[#4C5154] px-6 py-3 text-center text-sm font-bold text-white no-underline transition-colors hover:bg-[#3a3f42] sm:shrink-0 md:px-7">{t("product.request")} →</Link>
        </div>

        <div><Link href="/products" className="inline-flex items-center gap-1 text-sm font-bold text-[#4C5154] no-underline hover:underline">← {t("product.back")}</Link></div>
      </div>
    </div>
  );
}