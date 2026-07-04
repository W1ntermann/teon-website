"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3.5 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.company")}
            </div>
            <ul className="m-0 list-none p-0">
              <li className="mb-2">
                <Link
                  href="/company"
                  className="text-sm text-white/75 no-underline transition-colors hover:text-white"
                >
                  {t("company.about")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3.5 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.products")}
            </div>
            <ul className="m-0 list-none p-0">
              {["KREI DISSOLVER", "KREI BASKET-MILL", "KREI DISSOLVER-BUTTERFLY", "KREI CONTINUOUS-MILL"].map((item) => (
                <li key={item} className="mb-2">
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

          <div>
            <div className="mb-3.5 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.service")}
            </div>
            <ul className="m-0 list-none p-0">
              <li className="mb-2">
                <Link
                  href="/service"
                  className="text-sm text-white/75 no-underline transition-colors hover:text-white"
                >
                  {t("service.our")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-3.5 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.contact")}
            </div>
            <div className="text-[13px] leading-relaxed text-white/85">
              <div className="font-bold">ТОВ «ТЕОН УКРАЇНА»</div>
              <div>вул. Боровського Миколи, 28 К</div>
              <div>65031 Одеса</div>
              <div>Україна</div>
              <div className="mt-2.5">+380 68 547 16 11</div>
              <div>
                <a href="mailto:box.teonmachinery@gmail.com" className="text-white/75 no-underline hover:text-white">
                  box.teonmachinery@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3.5 border-b-2 border-white/20 pb-2 text-sm font-bold text-white">
              {t("nav.info") || "Інформація"}
            </div>
            <ul className="m-0 list-none p-0">
              <li className="mb-2">
                <a href="#" className="text-sm text-white/75 no-underline transition-colors hover:text-white">
                  {t("nav.news")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm text-white/75 no-underline transition-colors hover:text-white">
                  {t("nav.exhibitions")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm text-white/75 no-underline transition-colors hover:text-white">
                  {t("nav.contact_person")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm text-white/75 no-underline transition-colors hover:text-white">
                  {t("nav.worldwide")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}