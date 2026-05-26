"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProducts } from "@/translations/productData";

function DissolverIllustration() {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dissGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4C5154" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2d3235" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="discGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6e7377" />
          <stop offset="100%" stopColor="#3a3f42" />
        </linearGradient>
      </defs>
      {/* Machine body */}
      <rect x="85" y="22" width="70" height="140" rx="4" fill="url(#dissGrad)" />
      <rect x="90" y="28" width="60" height="8" rx="2" fill="#2d3235" />
      <rect x="90" y="40" width="60" height="4" rx="1" fill="#3a3f42" />
      {/* Motor housing top */}
      <rect x="95" y="6" width="50" height="22" rx="4" fill="#2d3235" />
      <rect x="100" y="0" width="40" height="10" rx="3" fill="#3a3f42" />
      {/* Shaft */}
      <rect x="117" y="48" width="6" height="80" rx="2" fill="#8a9095" />
      {/* Dispersion disc */}
      <ellipse cx="120" cy="135" rx="28" ry="8" fill="url(#discGrad)" />
      <ellipse cx="120" cy="133" rx="22" ry="5" fill="#6e7377" opacity="0.6" />
      {/* Base */}
      <rect x="60" y="155" width="120" height="12" rx="3" fill="#2d3235" />
      <rect x="40" y="163" width="160" height="6" rx="2" fill="#1f2427" />
      {/* Speed control panel */}
      <rect x="98" y="52" width="44" height="16" rx="2" fill="#1f2427" />
      <circle cx="108" cy="60" r="3" fill="#6e7377" />
      <circle cx="120" cy="60" r="3" fill="#6e7377" />
      <circle cx="132" cy="60" r="3" fill="#6e7377" />
      {/* Dispersion effect dots */}
      <circle cx="90" cy="130" r="2" fill="#9e9e9e" opacity="0.5" />
      <circle cx="150" cy="128" r="2.5" fill="#9e9e9e" opacity="0.4" />
      <circle cx="105" cy="145" r="1.5" fill="#9e9e9e" opacity="0.5" />
      <circle cx="135" cy="142" r="2" fill="#9e9e9e" opacity="0.4" />
      <circle cx="80" cy="118" r="1.5" fill="#9e9e9e" opacity="0.3" />
      <circle cx="160" cy="120" r="1.5" fill="#9e9e9e" opacity="0.3" />
      {/* Label */}
      <text x="120" y="182" textAnchor="middle" fill="#4C5154" fontSize="9" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="2">DISSOLVER</text>
    </svg>
  );
}

function BasketMillIllustration() {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="basketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4C5154" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2d3235" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {/* Motor housing top */}
      <rect x="95" y="2" width="50" height="26" rx="4" fill="#2d3235" />
      <rect x="100" y="0" width="40" height="6" rx="2" fill="#3a3f42" />
      {/* Main body */}
      <rect x="88" y="20" width="64" height="50" rx="3" fill="url(#basketGrad)" />
      <rect x="93" y="25" width="54" height="5" rx="1" fill="#3a3f42" />
      {/* Shaft */}
      <rect x="117" y="58" width="6" height="55" rx="2" fill="#8a9095" />
      {/* Basket mill */}
      <rect x="85" y="105" width="70" height="40" rx="4" fill="#3a3f42" />
      <rect x="90" y="110" width="60" height="30" rx="3" fill="none" stroke="#6e7377" strokeWidth="1.5" />
      {/* Perforations */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle key={`${row}-${col}`} cx={97 + col * 12} cy={116 + row * 8} r="1.5" fill="#8a9095" opacity="0.6" />
        ))
      )}
      {/* Tank */}
      <path d="M55 150 L60 193 L180 193 L185 150 Z" fill="none" stroke="#4C5154" strokeWidth="2.5" />
      <path d="M60 155 L62 190 L178 190 L180 155 Z" fill="#4C5154" opacity="0.08" />
      {/* Liquid level */}
      <path d="M62 168 L178 168 L180 190 L60 190 Z" fill="#6e7377" opacity="0.15" />
      {/* Grinding media */}
      <circle cx="100" cy="160" r="3" fill="#4C5154" opacity="0.5" />
      <circle cx="130" cy="165" r="3.5" fill="#4C5154" opacity="0.5" />
      <circle cx="155" cy="158" r="2.5" fill="#4C5154" opacity="0.5" />
      <circle cx="115" cy="172" r="2" fill="#4C5154" opacity="0.4" />
      <circle cx="145" cy="175" r="3" fill="#4C5154" opacity="0.45" />
      {/* Label */}
      <text x="120" y="194" textAnchor="middle" fill="#4C5154" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1.5">BASKET-MILL</text>
    </svg>
  );
}

function ButterflyIllustration() {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4C5154" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2d3235" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      {/* Motor top */}
      <rect x="95" y="2" width="50" height="24" rx="4" fill="#2d3235" />
      <rect x="100" y="0" width="40" height="6" rx="2" fill="#3a3f42" />
      {/* Body */}
      <rect x="88" y="18" width="64" height="35" rx="3" fill="url(#bfGrad)" />
      {/* Shaft */}
      <rect x="117" y="45" width="6" height="65" rx="2" fill="#8a9095" />
      {/* Butterfly impeller */}
      <path d="M85 105 Q100 95 120 105 Q140 95 155 105" fill="none" stroke="#4C5154" strokeWidth="4" strokeLinecap="round" />
      <path d="M85 105 Q100 115 120 105 Q140 115 155 105" fill="none" stroke="#4C5154" strokeWidth="4" strokeLinecap="round" />
      <circle cx="120" cy="105" r="5" fill="#3a3f42" />
      {/* Tank */}
      <rect x="55" y="120" width="130" height="50" rx="6" fill="none" stroke="#4C5154" strokeWidth="2.5" />
      <rect x="58" y="123" width="124" height="44" rx="5" fill="#4C5154" opacity="0.06" />
      {/* High viscosity swirls */}
      <path d="M70 135 Q90 128 110 138 Q130 148 150 132 Q160 125 170 135" fill="none" stroke="#6e7377" strokeWidth="1.8" opacity="0.5" />
      <path d="M70 148 Q90 155 110 145 Q130 135 150 152 Q160 158 170 148" fill="none" stroke="#6e7377" strokeWidth="1.8" opacity="0.4" />
      {/* Wide anchor */}
      <path d="M65 160 L95 150 L175 150 L175 160" fill="none" stroke="#4C5154" strokeWidth="1.5" opacity="0.4" />
      {/* Label */}
      <text x="120" y="185" textAnchor="middle" fill="#4C5154" fontSize="7.5" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1.2">BUTTERFLY</text>
    </svg>
  );
}

function ContinuousIllustration() {
  return (
    <svg viewBox="0 0 240 200" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="contGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4C5154" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2d3235" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4C5154" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#6e7377" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4C5154" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Main machine body - horizontal */}
      <rect x="25" y="70" width="190" height="65" rx="5" fill="url(#contGrad)" />
      <rect x="30" y="76" width="180" height="10" rx="2" fill="#2d3235" />
      {/* Chambers */}
      <rect x="40" y="90" width="50" height="30" rx="3" fill="#2d3235" />
      <rect x="100" y="90" width="50" height="30" rx="3" fill="#2d3235" />
      <rect x="160" y="90" width="40" height="30" rx="3" fill="#2d3235" />
      {/* Flow arrows between chambers */}
      <path d="M90 105 L98 105" stroke="#6e7377" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
      <path d="M150 105 L158 105" stroke="#6e7377" strokeWidth="2.5" />
      {/* Motor */}
      <rect x="195" y="48" width="30" height="24" rx="3" fill="#3a3f42" />
      {/* Pipe inlet/outlet */}
      <rect x="15" y="95" width="14" height="6" rx="2" fill="#3a3f42" />
      <rect x="215" y="95" width="14" height="6" rx="2" fill="#3a3f42" />
      <circle cx="222" cy="98" r="3" fill="#6e7377" />
      {/* Stand */}
      <rect x="55" y="130" width="10" height="35" rx="2" fill="#2d3235" />
      <rect x="115" y="130" width="10" height="35" rx="2" fill="#2d3235" />
      <rect x="165" y="130" width="10" height="35" rx="2" fill="#2d3235" />
      <rect x="40" y="160" width="160" height="5" rx="2" fill="#1f2427" />
      {/* Grinding media in chambers */}
      <circle cx="55" cy="100" r="2" fill="#6e7377" opacity="0.5" />
      <circle cx="65" cy="108" r="2.5" fill="#6e7377" opacity="0.5" />
      <circle cx="75" cy="98" r="1.8" fill="#6e7377" opacity="0.4" />
      <circle cx="115" cy="102" r="2" fill="#6e7377" opacity="0.5" />
      <circle cx="125" cy="100" r="2.2" fill="#6e7377" opacity="0.5" />
      <circle cx="135" cy="108" r="2" fill="#6e7377" opacity="0.4" />
      <circle cx="170" cy="100" r="2" fill="#6e7377" opacity="0.4" />
      <circle cx="180" cy="106" r="2.3" fill="#6e7377" opacity="0.5" />
      {/* Product flow line */}
      <path d="M18 98 L210 98" fill="url(#flowGrad)" strokeDasharray="3 4" opacity="0.5" />
      {/* Label */}
      <text x="120" y="182" textAnchor="middle" fill="#4C5154" fontSize="7.5" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1.2">CONTINUOUS-MILL</text>
    </svg>
  );
}

const productIcons: Record<string, React.ComponentType> = {
  dissolver: DissolverIllustration,
  "basket-mill": BasketMillIllustration,
  "dissolver-butterfly": ButterflyIllustration,
  "continuous-mill": ContinuousIllustration,
};

export function ProductsShowcase() {
  const { lang, t } = useLanguage();
  const products = getProducts(lang);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f8f8] via-white to-[#f5f5f5] py-14 sm:py-18 md:py-20">
      {/* Subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4C5154 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#4C5154]/25" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#4C5154]/25 bg-white">
              <span className="text-[9px] font-extrabold tracking-[2px] text-[#4C5154]">K</span>
            </div>
            <div className="h-px w-8 bg-[#4C5154]/25" />
          </div>
          <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[4px] text-[#4C5154]/50">
            KREI
          </span>
          <h2 className="text-xl font-bold tracking-[2px] text-[#2d3235] sm:text-2xl md:text-[26px]">
            {t("products.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed text-[#666] sm:text-sm">
            {lang === "uk"
              ? "Промислове дисперсійне обладнання для лакофарбової, хімічної та харчової промисловості."
              : lang === "pl"
                ? "Przemysłowe urządzenia dyspergujące dla przemysłu lakierniczego, chemicznego i spożywczego."
                : "Industrial dispersing equipment for the paint, chemical and food industries."}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {products.map((product, idx) => {
            const Icon = productIcons[product.id] || DissolverIllustration;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white transition-all duration-300 hover:border-[#4C5154]/30 hover:shadow-xl hover:shadow-[#4C5154]/5"
                >
                  {/* Illustration Area */}
                  <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#f0f0f0] to-[#e5e5e5] sm:h-[210px] md:h-[220px]">
                    {/* Background grid */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #4C5154 1px, transparent 1px)`,
                        backgroundSize: "16px 16px",
                      }}
                    />
                    {/* Illustration */}
                    <div className="relative z-10 flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <Icon />
                    </div>
                    {/* Bottom gradient overlay */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#e5e5e5] to-transparent" />

                    {/* KREI Badge */}
                    <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4C5154]">
                        <span className="text-[7px] font-bold text-white">K</span>
                      </div>
                      <span className="text-[9px] font-bold tracking-[2px] text-[#4C5154]">KREI</span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* Category tag */}
                    <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[2px] text-[#4C5154]/50">
                      {product.category}
                    </span>

                    {/* Product name */}
                    <h3 className="mb-2 text-[15px] font-bold leading-tight tracking-tight text-[#1a1a1a] sm:text-base">
                      {product.name.replace("KREI ", "")}
                    </h3>

                    {/* Tagline */}
                    <p className="mb-3 text-[12px] font-medium italic leading-relaxed text-[#4C5154]/60 sm:text-[13px]">
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="mb-4 text-[12px] leading-relaxed text-[#666] sm:text-[13px]">
                      {product.description}
                    </p>

                    {/* Key specs (3 items) */}
                    <div className="mb-4 mt-auto space-y-1.5">
                      {product.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="mt-px h-1.5 w-1.5 shrink-0 rounded-full bg-[#4C5154]/40" />
                          <span className="text-[11px] text-[#777] sm:text-[12px]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#4C5154] transition-all duration-200 group-hover:gap-2.5 sm:text-[13px]">
                      <span>{t("products.more")}</span>
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Hover border glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-[#4C5154]/10" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <div className="flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-[#2d3235] via-[#3a3f42] to-[#4C5154] p-7 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8 sm:py-7 md:px-10 md:py-8">
            <div>
              <h3 className="text-base font-bold text-white sm:text-lg md:text-xl">
                {lang === "uk"
                  ? "Потрібна консультація інженера?"
                  : lang === "pl"
                    ? "Potrzebujesz konsultacji inżyniera?"
                    : "Need an engineer consultation?"}
              </h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/60 sm:text-[13px]">
                {lang === "uk"
                  ? "Ми допоможемо підібрати оптимальне обладнання під ваше виробництво."
                  : lang === "pl"
                    ? "Pomożemy dobrać optymalne wyposażenie do Twojej produkcji."
                    : "We'll help you choose the optimal equipment for your production."}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 text-[13px] font-bold text-[#4C5154] shadow-lg shadow-black/20 transition-all duration-200 hover:bg-[#f0f0f0] hover:shadow-xl"
            >
              {t("products.request")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}