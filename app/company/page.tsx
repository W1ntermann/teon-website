"use client";

import { useLanguage } from "@/context/LanguageContext";

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

export default function Company() {
  const { lang, t } = useLanguage();
  const history = historyData[lang];

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="bg-[#4C5154] px-4 py-6 sm:py-8 md:py-[30px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="m-0 text-xl font-bold text-white sm:text-2xl md:text-[26px]">{t("company.title")}</h1>
          <div className="mt-2 text-[13px] text-white/70">
            {t("breadcrumb.home")} / {t("company.title")}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-[50px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12 xl:gap-[50px]">
          <div>
            <h2 style={{ color: "#4C5154", fontSize: "22px", marginBottom: "20px" }}>{t("company.about")}</h2>
            <p style={{ color: "#000", lineHeight: "1.8", marginBottom: "16px" }}>{t("about.text1")}</p>
            <p style={{ color: "#000", lineHeight: "1.8", marginBottom: "24px" }}>{t("about.text2")}</p>
            <h3 style={{ color: "#4C5154", fontSize: "18px", marginBottom: "16px" }}>{t("company.history")}</h3>
            <div style={{ borderLeft: "3px solid #4C5154", paddingLeft: "20px" }}>
              {history.map((item) => (
                <div key={item.year} style={{ marginBottom: "20px" }}>
                  <div style={{ color: "#4C5154", fontWeight: "bold", fontSize: "16px" }}>{item.year}</div>
                  <div style={{ color: "#000", fontSize: "14px", marginTop: "4px" }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ backgroundColor: "#f5f5f5", border: "1px solid #d0d0d0", padding: "24px" }}>
              <h3 style={{ color: "#4C5154", fontSize: "16px", fontWeight: "bold", marginBottom: "16px", borderBottom: "2px solid #4C5154", paddingBottom: "8px" }}>{t("company.contact_info")}</h3>
              <div style={{ fontSize: "13px", color: "#000", lineHeight: "2" }}>
                <div><strong>Теон</strong></div>
                <div>Maschinenfabrik</div>
                <div>Lange Straße 5</div>
                <div>32609 Hüllhorst</div>
                <div>Deutschland</div>
                <div style={{ marginTop: "12px" }}>Tel.: +49 (0) 5744 / 508-0</div>
                <div>Fax: +49 (0) 5744 / 508-190</div>
                <div>E-Mail: <a href="mailto:info@theon.com" style={{ color: "#4C5154" }}>info@theon.com</a></div>
              </div>
            </div>
            <div style={{ backgroundColor: "#4C5154", padding: "24px", marginTop: "20px", color: "#fff" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "12px" }}>{t("company.certificates")}</h3>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)" }}>
                <div style={{ padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>✓ ISO 9001:2015</div>
                <div style={{ padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>✓ ATEX Certification</div>
                <div style={{ padding: "8px 0" }}>✓ CE Marking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}