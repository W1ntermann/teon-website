"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";
import { ChevronRight, ArrowRight } from "lucide-react";

function MachineryIllustration({ type }: { type: string }) {
  const mainGray = "#4C5154";
  const darkGray = "#3a3f42";
  const lightGray = "#6e7377";
  const midGray = "#9e9e9e";

  return (
    <svg viewBox="0 0 200 200" width="100%" height="160" className="max-w-[130px] sm:max-w-[160px]">
      {type === "dissolver" && (<><rect x="30" y="50" width="140" height="110" rx="4" fill={mainGray}/><rect x="50" y="30" width="100" height="26" rx="4" fill={darkGray}/><rect x="90" y="10" width="20" height="26" fill={midGray}/><circle cx="100" cy="110" r="30" fill={lightGray} opacity="0.85"/><circle cx="100" cy="110" r="18" fill={mainGray}/><text x="100" y="116" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">KD</text></>)}
      {type === "basket" && (<><rect x="40" y="45" width="120" height="105" rx="4" fill={mainGray}/><rect x="60" y="22" width="80" height="28" rx="4" fill={darkGray}/><rect x="85" y="5" width="30" height="24" fill={midGray}/><rect x="55" y="150" width="90" height="35" rx="2" fill={darkGray}/><circle cx="100" cy="98" r="28" fill={lightGray} opacity="0.85"/><text x="100" y="104" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">KB</text></>)}
      {type === "butterfly" && (<><rect x="35" y="55" width="130" height="100" rx="4" fill={mainGray}/><rect x="55" y="32" width="90" height="28" rx="4" fill={darkGray}/><rect x="88" y="10" width="24" height="28" fill={midGray}/><rect x="50" y="155" width="100" height="30" rx="2" fill={darkGray}/><path d="M 75 100 Q 100 80 125 100 Q 100 120 75 100 Z" fill={lightGray} opacity="0.9"/><circle cx="100" cy="100" r="10" fill={mainGray}/><text x="100" y="104" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial">DBF</text></>)}
      {type === "continuous" && (<><rect x="22" y="60" width="156" height="90" rx="4" fill={mainGray}/><rect x="42" y="38" width="116" height="27" rx="4" fill={darkGray}/><rect x="90" y="15" width="20" height="28" fill={midGray}/><rect x="22" y="150" width="156" height="30" rx="2" fill={darkGray}/><rect x="32" y="72" width="136" height="60" rx="2" fill={lightGray} opacity="0.55"/><text x="100" y="106" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">KC</text></>)}
    </svg>
  );
}

export default function Products() {
  const { lang, t } = useLanguage();
  const products = getProducts(lang);

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="bg-[#4C5154] px-4 py-6 sm:py-8 md:py-[30px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="m-0 text-xl font-bold text-white sm:text-2xl md:text-[26px]">{t("products.page.title")}</h1>
          <div className="mt-2 text-[13px] text-white/70">{t("breadcrumb.home")} / {t("breadcrumb.products")}</div>
        </div>
      </div>

      <div className="overflow-x-auto border-b border-[#d0d0d0] bg-[#f5f5f5] [-webkit-overflow-scrolling:touch]">
        <div className="mx-auto flex max-w-[1200px] px-4 min-w-max">
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`}
              style={{ padding: "12px 18px", fontSize: "12px", fontWeight: "bold", textDecoration: "none", color: "#000", borderBottom: "3px solid transparent", whiteSpace: "nowrap", transition: "all 0.2s", display: "block" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#4C5154"; e.currentTarget.style.borderBottomColor = "#4C5154"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#000"; e.currentTarget.style.borderBottomColor = "transparent"; }}>
              {p.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-10 md:py-10">
        {products.map((product) => (
          <div key={product.id} className="mb-8 border border-[#d0d0d0] border-t-4 border-t-[#4C5154] bg-white transition-shadow last:mb-0 hover:shadow-[0_4px_20px_rgba(76,81,84,0.1)] sm:mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,240px)_1fr]">
              <div className="flex items-center justify-center border-b border-[#d0d0d0] bg-[#e8e8e8] px-5 py-8 lg:border-b-0 lg:border-r">
                <MachineryIllustration type={product.svgType} />
              </div>
              <div className="p-5 sm:p-7">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <div style={{ width: "38px", height: "38px", borderRadius: "50%", border: "2px solid #4C5154", backgroundColor: "#4C5154", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontSize: "8px", fontWeight: "bold" }}>KREI</span>
                    </div>
                    <div>
                      <div style={{ color: "#4C5154", fontSize: "10px", fontWeight: "bold", letterSpacing: "2px" }}>KREI</div>
                      <h2 style={{ color: "#4C5154", fontSize: "20px", fontWeight: "bold", margin: 0 }}>{product.name.replace("KREI ", "")}</h2>
                    </div>
                  </div>
                  <span className="w-fit shrink-0 border border-[#d0d0d0] bg-[#f5f5f5] px-2.5 py-1 text-[11px] font-bold text-[#4C5154]">{product.category}</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#000] sm:text-[14px]">{product.description}</p>
                <div className="mb-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-1.5">
                  {product.features.slice(0, 4).map((feature) => (
                    <div key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "7px", fontSize: "13px", color: "#000" }}>
                      <ChevronRight size={13} style={{ color: "#4C5154", flexShrink: 0, marginTop: "2px" }} />{feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-1.5 bg-[#4C5154] px-5 py-2.5 text-[13px] font-bold text-white no-underline transition-colors hover:bg-[#3a3f42]">
                    {t("products.more")} <ArrowRight size={14} />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-1 border-b border-[#4C5154] pb-0.5 text-[13px] font-bold text-[#4C5154] no-underline">{t("products.request")}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}