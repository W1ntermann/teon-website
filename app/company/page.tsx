"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Shield, Award, CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

const historyData: Record<string, { year: string; text: string }[]> = {
  uk: [
    { year: "1889", text: "Заснування машинобудівного заводу Теон" },
    { year: "1950", text: "Початок виробництва спеціалізованих машин для лакофарбової промисловості" },
    { year: "1970", text: "Запуск серії KREI — високоякісних диссольверів та млинів" },
    { year: "1990", text: "Розширення виробничих потужностей, вихід на міжнародний ринок" },
    { year: "2000", text: "Розробка нового покоління машин з електронним управлінням" },
    { year: "2020", text: "Впровадження Industry 4.0 — інтелектуальні технології виробництва" },
  ],
  en: [
    { year: "1889", text: "Founding of the Teon machine factory" },
    { year: "1950", text: "Start of production of specialized machines for the paint industry" },
    { year: "1970", text: "Launch of the KREI series — high-quality dissolvers and mills" },
    { year: "1990", text: "Expansion of production facilities, entry into the international market" },
    { year: "2000", text: "Development of a new generation of machines with electronic control" },
    { year: "2020", text: "Introduction of Industry 4.0 — smart manufacturing technologies" },
  ],
  pl: [
    { year: "1889", text: "Założenie fabryki maszyn Teon" },
    { year: "1950", text: "Rozpoczęcie produkcji wyspecjalizowanych maszyn dla przemysłu lakierniczego" },
    { year: "1970", text: "Uruchomienie serii KREI — wysokiej jakości dyspergatora i młynów" },
    { year: "1990", text: "Rozbudowa mocy produkcyjnych, wejście na rynek międzynarodowy" },
    { year: "2000", text: "Opracowanie nowej generacji maszyn ze sterowaniem elektronicznym" },
    { year: "2020", text: "Wdrożenie Industry 4.0 — inteligentne technologie produkcji" },
  ],
};

const statsData: Record<string, { value: string; label: string }[]> = {
  uk: [
    { value: "130+", label: "Років досвіду" },
    { value: "1,500+", label: "Машин встановлено" },
    { value: "500+", label: "Клієнтів" },
    { value: "50+", label: "Країн" },
  ],
  en: [
    { value: "130+", label: "Years Experience" },
    { value: "1,500+", label: "Machines Installed" },
    { value: "500+", label: "Clients" },
    { value: "50+", label: "Countries" },
  ],
  pl: [
    { value: "130+", label: "Lat doświadczenia" },
    { value: "1,500+", label: "Zainstalowanych maszyn" },
    { value: "500+", label: "Klientów" },
    { value: "50+", label: "Krajów" },
  ],
};

export default function Company() {
  const { lang, t } = useLanguage();
  const history = historyData[lang];
  const stats = statsData[lang];

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

      {/* ===== STATS BANNER ===== */}
      <div className="border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-around sm:py-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-[26px] font-extrabold text-[#1E3A5F]">{stat.value}</div>
              <div className="text-[12px] font-medium text-[#888]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12 xl:gap-[50px]">

          {/* ===== MAIN CONTENT ===== */}
          <div>
            {/* About */}
            <div className="mb-10">
              <h2 className="mb-5 text-[22px] font-bold text-[#1E3A5F]">{t("company.about")}</h2>
              <p className="mb-4 text-[15px] leading-[1.9] text-[#333]">{t("about.text1")}</p>
              <p className="mb-6 text-[15px] leading-[1.9] text-[#333]">{t("about.text2")}</p>
            </div>

            {/* Values */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-[#e5e5e5] bg-[#fafafa] p-5 text-center">
                <Award size={28} className="mx-auto mb-2 text-[#E8A838]" />
                <h4 className="text-[14px] font-bold text-[#1E3A5F]">{t("why.quality")}</h4>
                <p className="mt-1 text-[12px] text-[#666]">ISO 9001:2015, ATEX, CE</p>
              </div>
              <div className="rounded-lg border border-[#e5e5e5] bg-[#fafafa] p-5 text-center">
                <Clock size={28} className="mx-auto mb-2 text-[#E8A838]" />
                <h4 className="text-[14px] font-bold text-[#1E3A5F]">{t("why.since")}</h4>
                <p className="mt-1 text-[12px] text-[#666]">{t("why.since.desc")}</p>
              </div>
              <div className="rounded-lg border border-[#e5e5e5] bg-[#fafafa] p-5 text-center">
                <MapPin size={28} className="mx-auto mb-2 text-[#E8A838]" />
                <h4 className="text-[14px] font-bold text-[#1E3A5F]">{t("why.worldwide")}</h4>
                <p className="mt-1 text-[12px] text-[#666]">{t("why.worldwide.desc")}</p>
              </div>
            </div>

            {/* History */}
            <h3 className="mb-5 text-[18px] font-bold text-[#1E3A5F]">{t("company.history")}</h3>
            <div className="border-l-[3px] border-[#1E3A5F] pl-5">
              {history.map((item) => (
                <div key={item.year} className="relative mb-6 pl-4 last:mb-0">
                  <div className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-[#1E3A5F] bg-white" />
                  <div className="text-[16px] font-bold text-[#1E3A5F]">{item.year}</div>
                  <div className="mt-1.5 text-[14px] text-[#444]">{item.text}</div>
                </div>
              ))}
            </div>
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
              <div className="space-y-0 text-[13px] text-white/85">
                <div className="flex items-center gap-2 border-b border-white/15 py-2.5">
                  <CheckCircle size={16} className="text-[#E8A838]" />
                  ISO 9001:2015
                </div>
                <div className="flex items-center gap-2 border-b border-white/15 py-2.5">
                  <CheckCircle size={16} className="text-[#E8A838]" />
                  ATEX Certification
                </div>
                <div className="flex items-center gap-2 py-2.5">
                  <CheckCircle size={16} className="text-[#E8A838]" />
                  CE Marking
                </div>
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