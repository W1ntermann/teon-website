"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Download,
  Mail,
  Phone,
  ArrowLeft,
  Check,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProductBySlug } from "@/translations/productData";
import { ProductSlider } from "@/components/ProductSlider";
import { RealMediaGallery } from "@/components/RealMediaGallery";
import { ProductFeedbackForm } from "@/components/ProductFeedbackForm";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function ProductDetail() {
  const params = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const slug = params?.slug || "";
  const [modalOpen, setModalOpen] = useState(false);

  const product = getProductBySlug(slug, lang);

  if (!product) {
    return (
      <div
        className="min-h-screen font-sans"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div className="px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#1E3A5F]">
            {lang === "uk"
              ? "Продукт не знайдено"
              : lang === "pl"
                ? "Nie znaleziono produktu"
                : "Product not found"}
          </h1>
          <Link
            href="/products"
            className="mt-4 inline-block font-medium text-[#1E3A5F] hover:underline"
          >
            ← {t("product.back")}
          </Link>
        </div>
      </div>
    );
  }

  const allProducts = [
    "krei-dissolver",
    "krei-basket-mill",
    "krei-dissolver-butterfly",
    "krei-continuous-mill",
  ];
  const names = [
    "KREI DISSOLVER",
    "KREI BASKET-MILL",
    "KREI DISSOLVER-BUTTERFLY",
    "KREI CONTINUOUS-MILL",
  ];
  const currentIndex = allProducts.indexOf(slug);

  return (
    <div
      className="min-h-screen font-sans bg-[#fafafa]"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0F1F33] via-[#152B47] to-[#1E3A5F]">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 py-8 sm:py-10 md:py-10">
          {/* Breadcrumb */}
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-white/50">
            <Link
              href="/"
              className="shrink-0 text-white/50 no-underline transition-colors hover:text-white/80"
            >
              {t("breadcrumb.home")}
            </Link>
            <ChevronRight size={12} className="shrink-0" />
            <Link
              href="/products"
              className="shrink-0 text-white/50 no-underline transition-colors hover:text-white/80"
            >
              {t("breadcrumb.products")}
            </Link>
            <ChevronRight size={12} className="shrink-0" />
            <span className="min-w-0 break-words text-white/90">
              {product.name}
            </span>
          </div>

          {/* Title area */}
          <div className="flex flex-wrap items-start gap-4 sm:flex-nowrap sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10">
              <span className="text-[9px] font-extrabold text-white tracking-[2px]">
                T
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-[26px] break-words">
                {product.name}
              </h1>
              <p className="mt-1.5 text-sm text-white/60 sm:text-base">
                {product.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Nav Tabs */}
      <div className="border-b border-[#e0e0e0] bg-white">
        <div className="mx-auto flex max-w-[1200px] gap-0 overflow-x-auto px-4 [-webkit-overflow-scrolling:touch] scrollbar-hide">
          {allProducts.map((s, i) => (
            <Link
              key={s}
              href={`/products/${s}`}
              className="relative shrink-0 whitespace-nowrap px-4 py-3.5 text-[12px] font-bold no-underline transition-all duration-200 sm:px-5 sm:text-[13px]"
                style={{
                  color: i === currentIndex ? "#1E3A5F" : "#888",
                }}
              >
                {names[i]}
                {i === currentIndex && (
                  <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#1E3A5F] sm:w-12" />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-10 md:py-12">
        {/* Top: Slider + Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 grid grid-cols-1 gap-8 lg:mb-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-10 xl:grid-cols-[minmax(0,420px)_1fr] xl:gap-12"
        >
          {/* Slider Column */}
          <div>
            <div className="relative overflow-hidden rounded-xl border border-[#e0e0e0] bg-white p-2 shadow-sm">
              <ProductSlider
                photos={product.photos}
                productName={product.name}
                aspectRatio="square"
              />
            </div>

            {/* CTA Buttons under slider */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href={`/quote?source=product&type=consultation&product=${slug}`}
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#1E3A5F] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-[#1E3A5F]/20 transition-all duration-200 hover:bg-[#152B47] hover:shadow-md"
              >
                <Mail size={16} />
                {t("product.request")}
              </Link>
              <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-[#1E3A5F] bg-white px-5 py-3 text-center text-sm font-semibold text-[#1E3A5F] transition-all duration-200 hover:bg-[#1E3A5F]/5">
                <Download size={16} />
                {t("product.download")}
              </button>
            </div>
          </div>

          {/* Info Column */}
          <div>
            {/* Product header */}
            <div className="mb-5">
              <span className="mb-1 inline-block text-[10px] font-bold uppercase tracking-[3px] text-[#1E3A5F]/50">
                {product.category}
              </span>
              <h2 className="mb-3 text-[22px] font-bold tracking-tight text-[#1a1a1a] sm:text-[24px]">
                {product.name.replace("KREI ", "")}
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#444] sm:text-[15px]">
                {product.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-[#1E3A5F]">
                <span className="h-px w-6 bg-[#1E3A5F]/30" />
                {t("product.features")}
              </h3>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2.5 rounded-lg border border-[#eee] bg-white px-3.5 py-2.5"
                  >
                    <div className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F]/10">
                      <Check size={9} className="text-[#1E3A5F]" strokeWidth={3} />
                    </div>
                    <span className="text-[12px] text-[#555] sm:text-[13px] break-words">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Applications + Technical Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-10 grid grid-cols-1 gap-6 lg:mb-12 lg:grid-cols-2 lg:gap-8"
        >
          {/* Applications */}
          <div className="rounded-xl border border-[#e0e0e0] bg-white p-5 sm:p-6">
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-[#1E3A5F]">
              <span className="h-px w-6 bg-[#1E3A5F]/30" />
              {t("product.applications")}
            </h3>
            <ul className="m-0 list-none space-y-1.5 p-0">
              {product.applications.map((app) => (
                <li
                  key={app}
                  className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-[#444] transition-colors hover:bg-[#f5f5f5]"
                >
                  <ChevronRight size={13} className="shrink-0 text-[#1E3A5F]/50" />
                  <span className="break-words">{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specs */}
          <div className="rounded-xl bg-gradient-to-br from-[#0F1F33] to-[#1E3A5F] p-5 sm:p-6 text-white">
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-white">
              <span className="h-px w-6 bg-white/30" />
              {t("product.technical")}
            </h3>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <table className="w-full border-collapse">
                <tbody>
                  {product.technicalSpecs.map((spec, i) => (
                    <tr
                      key={spec.label}
                      className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}
                    >
                      <td className="px-4 py-2.5 text-[12px] text-white/70 sm:text-[13px]">
                        {spec.label}
                      </td>
                      <td className="px-4 py-2.5 text-right text-[12px] font-bold text-white sm:text-[13px]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Models Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-10 lg:mb-12"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#1E3A5F]">
            <span className="h-px w-8 bg-[#1E3A5F]/40" />
            {t("product.models")}
          </h3>
          <div className="overflow-hidden rounded-xl border border-[#e0e0e0] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse text-sm sm:min-w-0">
                <thead>
                  <tr className="bg-[#1E3A5F]/5">
                    <th className="px-4 py-3.5 text-left text-[12px] font-bold uppercase tracking-wider text-[#1E3A5F] sm:px-6 sm:text-[13px]">
                      {t("products.models")}
                    </th>
                    <th className="px-4 py-3.5 text-left text-[12px] font-bold uppercase tracking-wider text-[#1E3A5F] sm:px-6 sm:text-[13px]">
                      {lang === "uk" ? "Двигун" : lang === "pl" ? "Silnik" : "Motor"}
                    </th>
                      <th className="px-4 py-3.5 text-left text-[12px] font-bold uppercase tracking-wider text-[#1E3A5F] sm:px-6 sm:text-[13px]">
                      {lang === "uk" ? "Об'єм" : lang === "pl" ? "Objętość" : "Volume"}
                    </th>
                    <th className="px-4 py-3.5 text-center text-[12px] font-bold uppercase tracking-wider text-[#1E3A5F] sm:px-6 sm:text-[13px]" />
                  </tr>
                </thead>
                <tbody>
                  {product.models.map((model, i) => (
                    <tr
                      key={model.name}
                      className={`border-t border-[#eee] transition-colors hover:bg-[#f8f8f8] ${
                        i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                      }`}
                    >
                      <td className="px-4 py-3.5 font-bold text-[#1a1a1a] sm:px-6">
                        {model.name}
                      </td>
                      <td className="px-4 py-3.5 text-[#555] sm:px-6">{model.power}</td>
                      <td className="px-4 py-3.5 text-[#555] sm:px-6">{model.volume}</td>
                      <td className="px-4 py-3.5 text-center sm:px-6">
                          <Link
                            href={`/quote?source=product&type=quote&product=${slug}`}
                            className="inline-block cursor-pointer rounded-lg bg-[#1E3A5F] px-4 py-2 text-[11px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#152B47] hover:shadow-md sm:px-5 sm:py-2 sm:text-xs no-underline"
                          >
                            {t("product.request")}
                          </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mb-10"
        >
          <div className="flex flex-col gap-5 rounded-2xl border border-[#e0e0e0] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6 md:px-8 md:py-7">
            <div className="min-w-0 flex-1">
              <h3 className="mb-2 text-base font-bold text-[#1a1a1a] md:text-[17px]">
                {t("product.contact_expert")}
              </h3>
              <div className="flex flex-col gap-1.5 text-[13px] text-[#666] sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1.5">
                <span className="flex items-center gap-1.5">
                  <Phone size={14} className="shrink-0 text-[#1E3A5F]" />
                  <span>+380 68 547 16 11</span>
                </span>
                <span className="flex items-center gap-1.5 break-all">
                  <Mail size={14} className="shrink-0 text-[#1E3A5F]" />
                  <span className="break-all">box.teonmachinery@gmail.com</span>
                </span>
              </div>
            </div>
            <Link
              href={`/quote?source=product&type=quote&product=${slug}`}
              className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-lg bg-[#1E3A5F] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-[#1E3A5F]/20 transition-all duration-200 hover:bg-[#152B47] hover:shadow-md sm:px-7 no-underline"
            >
              {t("product.request")}
              <ChevronRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* ===== COMPARISON TABLE ===== */}
        {product.models.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="mb-10 lg:mb-12"
          >
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#1E3A5F]">
              <span className="h-px w-8 bg-[#1E3A5F]/40" />
              {t("product.comparison_title")}
            </h3>
            <div className="overflow-hidden rounded-xl border border-[#e0e0e0] bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] border-collapse text-sm sm:min-w-0">
                  <thead>
                    <tr className="bg-[#1E3A5F]">
                      <th className="px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider text-white/80 sm:px-5 sm:text-[12px]">
                        {lang === "uk" ? "Параметр" : lang === "pl" ? "Parametr" : "Parameter"}
                      </th>
                      {product.models.map((model) => (
                        <th key={model.name} className="px-4 py-3.5 text-center text-[11px] font-bold text-white sm:px-5 sm:text-[12px]">
                          {model.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: lang === "uk" ? "Потужність" : lang === "pl" ? "Moc" : "Power", key: "power" as const },
                      { label: lang === "uk" ? "Об'єм" : lang === "pl" ? "Objętość" : "Volume", key: "volume" as const },
                    ].map((row, i) => (
                      <tr
                        key={row.key}
                        className={`border-t border-[#eee] transition-colors hover:bg-[#f8f8f8] ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}
                      >
                        <td className="px-4 py-3 font-semibold text-[#1a1a1a] sm:px-5 text-[13px]">
                          {row.label}
                        </td>
                        {product.models.map((model) => (
                          <td key={model.name} className="px-4 py-3 text-center text-[#555] sm:px-5 text-[13px]">
                            {model[row.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== REAL MEDIA GALLERY ===== */}
        <div className="mb-10 lg:mb-12">
          <RealMediaGallery productName={product.name} source="product" />
        </div>

        {/* ===== FEEDBACK FORM ===== */}
        <div className="mb-10 lg:mb-12">
          <ProductFeedbackForm productName={product.name} source="product" />
        </div>

        {/* Back link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A5F] no-underline transition-colors hover:text-[#152B47]"
        >
          <ArrowLeft size={15} />
          {t("product.back")}
        </Link>
      </div>
      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} productName={product.name} source="product" />
    </div>
  );
}
