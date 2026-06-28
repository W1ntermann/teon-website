"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Shield, MapPin, Phone, Mail, FileText, ExternalLink } from "lucide-react";
import CompanyPageContent from "@/components/CompanyPageContent";

interface Certificate {
  name: string;
  file: string;
  lang: string;
}

const certificates: Certificate[] = [
  { name: "ISO 9001:2015", file: "/certificates/iso-9001-ua.pdf", lang: "UA" },
  { name: "ISO 9001:2015", file: "/certificates/iso-9001-en-1.pdf", lang: "EN" },
  { name: "ISO 9001:2015", file: "/certificates/iso-9001-en-2.pdf", lang: "EN" },
  { name: "ISO 45001:2018", file: "/certificates/iso-45001-ua.pdf", lang: "UA" },
  { name: "ISO 45001:2018", file: "/certificates/iso-45001-en.pdf", lang: "EN" },
];

export default function Company() {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen font-sans">
      {/* ===== PAGE HEADER ===== */}
      <div className="bg-gradient-to-r from-[#1E3A5F] to-[#0F1F33] px-4 py-8 sm:py-10 md:py-[34px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-[24px] font-bold text-white sm:text-[28px] md:text-[30px]">{t("company.title")}</h1>
          <div className="mt-2 text-[13px] text-white/60">
            {t("breadcrumb.home")} / {t("company.title")}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12 xl:gap-[50px]">

          {/* ===== MAIN CONTENT ===== */}
          <div>
            <CompanyPageContent />
          </div>

          {/* ===== SIDEBAR ===== */}
          <div>
            {/* Contact Info Card */}
            <div className="mb-5 rounded-lg border border-[#d0d0d0] bg-[#fafafa] p-6">
              <h3 className="mb-4 border-b-2 border-[#1E3A5F] pb-2 text-[16px] font-bold text-[#1E3A5F]">
                {t("company.contact_info")}
              </h3>
              <div className="space-y-3 text-[14px] text-[#333]">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#1E3A5F]" />
                  <div>
                    <div className="font-bold">Теон</div>
                    <div>Maschinenfabrik</div>
                    <div>Lange Straße 5</div>
                    <div>32609 Hüllhorst</div>
                    <div>Deutschland</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="shrink-0 text-[#1E3A5F]" />
                  <div>+49 (0) 5744 / 508-0</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="shrink-0 text-[#1E3A5F]" />
                  <a href="mailto:info@theon.com" className="font-semibold text-[#1E3A5F] no-underline hover:underline">
                    info@theon.com
                  </a>
                </div>
              </div>
            </div>

            {/* Certificates Card */}
            <div className="rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#0F1F33] p-6 text-white">
              <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold">
                <Shield size={18} />
                {t("company.certificates")}
              </h3>
              <div className="space-y-1 text-[13px] text-white/85">
                {certificates.map((cert) => (
                  <a
                    key={cert.file}
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 rounded-md px-2 py-2 transition-colors hover:bg-white/10"
                  >
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="shrink-0 text-[#E8A838]" />
                      <span>{cert.name}</span>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-medium uppercase text-white/50">
                      {cert.lang}
                      <ExternalLink size={12} />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="mt-5 rounded-lg bg-[#E8A838] p-6 text-center">
              <h3 className="text-[15px] font-bold text-[#1E3A5F]">
                {lang === "uk" ? "Готові до співпраці?" : lang === "pl" ? "Gotowi do współpracy?" : "Ready to partner?"}
              </h3>
              <p className="mt-1 text-[12px] text-[#1E3A5F]/70">
                {lang === "uk" ? "Зв'яжіться з нами для обговорення вашого проекту" : lang === "pl" ? "Skontaktuj się z nami, aby omówić Twój projekt" : "Contact us to discuss your project"}
              </p>
              <a
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 rounded bg-[#1E3A5F] px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-[#152B47]"
              >
                {t("contact.write")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}