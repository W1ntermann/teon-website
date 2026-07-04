"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/teon-logo.png" 
                alt="TEON" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-white/75 leading-relaxed">
                {t("about.text1")}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="mb-4 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.company")}
            </div>
            <ul className="m-0 list-none p-0 space-y-2">
              <li>
                <Link
                  href="/company"
                  className="text-sm text-white/75 no-underline transition-colors hover:text-white"
                >
                  {t("company.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-sm text-white/75 no-underline transition-colors hover:text-white"
                >
                  {t("company.history")}
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-sm text-white/75 no-underline transition-colors hover:text-white"
                >
                  {t("company.certificates")}
                </Link>
              </li>
            </ul>

            <div className="mt-6 mb-4 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.products")}
            </div>
            <ul className="m-0 list-none p-0 space-y-2">
              {["KREI DISSOLVER", "KREI BASKET-MILL", "KREI DISSOLVER-BUTTERFLY", "KREI CONTINUOUS-MILL"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/products/krei-${item.toLowerCase().replace("krei ", "").replace(/ /g, "-")}`}
                    className="text-sm text-white/75 no-underline transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <div className="mb-4 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.service")}
            </div>
            <ul className="m-0 list-none p-0 space-y-2">
              <li>
                <Link
                  href="/service"
                  className="text-sm text-white/75 no-underline transition-colors hover:text-white"
                >
                  {t("service.our")}
                </Link>
              </li>
            </ul>

            <div className="mt-6 mb-4 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.info") || "Інформація"}
            </div>
            <ul className="m-0 list-none p-0 space-y-2">
              <li>
                <a href="#" className="text-sm text-white/75 no-underline transition-colors hover:text-white">
                  {t("nav.news")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/75 no-underline transition-colors hover:text-white">
                  {t("nav.exhibitions")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/75 no-underline transition-colors hover:text-white">
                  {t("nav.contact_person")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/75 no-underline transition-colors hover:text-white">
                  {t("nav.worldwide")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-4 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.contact")}
            </div>
            <div className="text-sm leading-relaxed text-white/85 space-y-3">
              <div className="font-bold text-white">
                ТОВ «ТЕОН УКРАЇНА»
              </div>
              
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div>вул. Боровського Миколи, 28 К</div>
                  <div>65031 Одеса</div>
                  <div>Україна</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-white/75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+380685471611" className="text-white/75 no-underline hover:text-white transition-colors">
                  +380 68 547 16 11
                </a>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-white/75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:box.teonmachinery@gmail.com" className="text-white/75 no-underline hover:text-white transition-colors">
                  box.teonmachinery@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              {t("footer.rights")}
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">
                Політика конфіденційності
              </a>
              <a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors">
                Умови використання
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}