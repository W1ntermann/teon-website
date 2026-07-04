"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <img 
                src="/teon-logo.png" 
                alt="TEON" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-white/75 leading-relaxed">
                {t("about.text1")}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1E3A5F] transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <div>
              <div className="mb-4 border-b-2 border-white/20 pb-2 text-sm font-semibold text-white">
                {t("nav.company")}
              </div>
              <ul className="m-0 list-none p-0 space-y-3">
                <li>
                  <Link
                    href="/company"
                    className="text-sm text-white/75 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {t("company.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company"
                    className="text-sm text-white/75 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {t("company.history")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company"
                    className="text-sm text-white/75 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {t("company.certificates")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4 border-b-2 border-white/20 pb-2 text-sm font-semibold text-white">
                {t("nav.products")}
              </div>
              <ul className="m-0 list-none p-0 space-y-3">
                {["KREI DISSOLVER", "KREI BASKET-MILL", "KREI DISSOLVER-BUTTERFLY", "KREI CONTINUOUS-MILL"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/products/krei-${item.toLowerCase().replace("krei ", "").replace(/ /g, "-")}`}
                      className="text-sm text-white/75 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Information Links */}
          <div className="space-y-6">
            <div>
              <div className="mb-4 border-b-2 border-white/20 pb-2 text-sm font-semibold text-white">
                {t("nav.service")}
              </div>
              <ul className="m-0 list-none p-0 space-y-3">
                <li>
                  <Link
                    href="/service"
                    className="text-sm text-white/75 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {t("service.our")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-4 border-b-2 border-white/20 pb-2 text-sm font-semibold text-white">
                {t("nav.info") || "Інформація"}
              </div>
              <ul className="m-0 list-none p-0 space-y-3">
                <li>
                  <a href="#" className="text-sm text-white/75 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block">
                    {t("nav.news")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/75 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block">
                    {t("nav.exhibitions")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/75 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block">
                    {t("nav.contact_person")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/75 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block">
                    {t("nav.worldwide")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-4 border-b-2 border-white/20 pb-2 text-sm font-semibold text-white">
              {t("nav.contact")}
            </div>
            <div className="text-sm leading-relaxed text-white/85 space-y-4">
              <div className="font-semibold text-white">
                ТОВ «ТЕОН УКРАЇНА»
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white/75" />
                <div>
                  <div>вул. Боровського Миколи, 28 К</div>
                  <div>65031 Одеса</div>
                  <div>Україна</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-white/75" />
                <a href="tel:+380685471611" className="text-white/75 no-underline hover:text-white transition-colors duration-200">
                  +380 68 547 16 11
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-white/75" />
                <a href="mailto:box.teonmachinery@gmail.com" className="text-white/75 no-underline hover:text-white transition-colors duration-200">
                  box.teonmachinery@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              {t("footer.rights")}
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors duration-200">
                Політика конфіденційності
              </a>
              <a href="#" className="text-sm text-white/60 no-underline hover:text-white transition-colors duration-200">
                Умови використання
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}