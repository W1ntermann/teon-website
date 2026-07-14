"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Calendar, Tag, Factory, Award, Building2, Warehouse, Truck, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsData: Record<string, { date: string; title: string; text: string; category: string; icon: any }[]> = {
  uk: [
    { date: "15.04.2024", title: "Теон на виставці Hannover Messe 2024", text: "Відвідайте наш стенд на найбільшій промисловій виставці світу. Ми представимо нові моделі обладнання та проведемо живі демонстрації роботи наших диссольверів та міксерів.", category: "Виставки", icon: Factory },
    { date: "01.03.2024", title: "Нова версія DISSOLVER-Butterfly", text: "Представляємо оновлену серію диссольверів з покращеною енергоефективністю та новою системою контролю в'язкості. Нова версія забезпечує на 30% вищу продуктивність.", category: "Продукти", icon: Award },
    { date: "10.02.2024", title: "Розширення сервісного відділу", text: "Наша команда фахівців готова надати швидкий сервіс по всій Україні. Відкрили 3 нових сервісних центри у Львові, Одесі та Харкові.", category: "Компанія", icon: Building2 },
    { date: "20.01.2024", title: "Сертифікація ISO 14001", text: "Теон отримав міжнародний сертифікат ISO 14001, що підтверджує нашу відповідальність за екологію та сталий розвиток виробництва.", category: "Сертифікати", icon: Award },
    { date: "05.12.2023", title: "Відкриття нового складу", text: "Запустили сучасний складський комплекс площею 2000 м² для забезпечення швидкої доставки запчастин по всій Європі.", category: "Інфраструктура", icon: Warehouse },
  ],
  en: [
    { date: "15.04.2024", title: "Teon at Hannover Messe 2024", text: "Visit our booth at the largest industrial trade fair in the world. We will showcase new equipment models and conduct live demonstrations of our dissolvers and mixers.", category: "Exhibitions", icon: Factory },
    { date: "01.03.2024", title: "New DISSOLVER-Butterfly Version", text: "Introducing the updated dissolver series with improved energy efficiency and a new viscosity control system. The new version delivers 30% higher productivity.", category: "Products", icon: Award },
    { date: "10.02.2024", title: "Service Department Expansion", text: "Our team of experts is ready to provide fast service across Ukraine. We opened 3 new service centers in Lviv, Odesa, and Kharkiv.", category: "Company", icon: Building2 },
    { date: "20.01.2024", title: "ISO 14001 Certification", text: "Teon has obtained the international ISO 14001 certificate, confirming our commitment to environmental responsibility and sustainable manufacturing.", category: "Certificates", icon: Award },
    { date: "05.12.2023", title: "New Warehouse Opening", text: "We launched a modern warehouse complex with an area of 2000 m² to ensure fast delivery of spare parts across Europe.", category: "Infrastructure", icon: Warehouse },
  ],
  pl: [
    { date: "15.04.2024", title: "Teon na targach Hannover Messe 2024", text: "Odwiedź nasze stoisko na największych światowych targach przemysłowych. Zaprezentujemy nowe modele urządzeń i przeprowadzimy live demonstracje pracy naszych dyssolwerów i mikserów.", category: "Targi", icon: Factory },
    { date: "01.03.2024", title: "Nowa wersja DISSOLVER-Butterfly", text: "Prezentujemy zaktualizowaną serię dyssolwerów z ulepszoną efektywnością energetyczną i nowym systemem kontroli lepkości. Nowa wersja zapewnia o 30% wyższą wydajność.", category: "Produkty", icon: Award },
    { date: "10.02.2024", title: "Rozbudowa działu serwisowego", text: "Nasz zespół ekspertów gotowy do szybkiego serwisu na całej Ukrainie. Otworzyliśmy 3 nowe centra serwisowe we Lwowie, Odessie i Charkowie.", category: "Firma", icon: Building2 },
    { date: "20.01.2024", title: "Certyfikacja ISO 14001", text: "Teon otrzymał międzynarodowy certyfikat ISO 14001, potwierdzający naszą odpowiedzialność za środowisko i zrównoważony rozwój produkcji.", category: "Certyfikaty", icon: Award },
    { date: "05.12.2023", title: "Otwarcie nowego magazynu", text: "Uruchomiliśmy nowoczesny kompleks magazynowy o powierzchni 2000 m² dla zapewnienia szybkiej dostawy części zamiennych w całej Europie.", category: "Infrastruktura", icon: Warehouse },
  ],
};

const categoryColors: Record<string, { bg: string; text: string; iconBg: string }> = {
  "Виставки": { bg: "bg-blue-50", text: "text-blue-700", iconBg: "bg-blue-100" },
  "Продукти": { bg: "bg-green-50", text: "text-green-700", iconBg: "bg-green-100" },
  "Компанія": { bg: "bg-purple-50", text: "text-purple-700", iconBg: "bg-purple-100" },
  "Сертифікати": { bg: "bg-amber-50", text: "text-amber-700", iconBg: "bg-amber-100" },
  "Інфраструктура": { bg: "bg-indigo-50", text: "text-indigo-700", iconBg: "bg-indigo-100" },
  "Exhibitions": { bg: "bg-blue-50", text: "text-blue-700", iconBg: "bg-blue-100" },
  "Products": { bg: "bg-green-50", text: "text-green-700", iconBg: "bg-green-100" },
  "Company": { bg: "bg-purple-50", text: "text-purple-700", iconBg: "bg-purple-100" },
  "Certificates": { bg: "bg-amber-50", text: "text-amber-700", iconBg: "bg-amber-100" },
  "Infrastructure": { bg: "bg-indigo-50", text: "text-indigo-700", iconBg: "bg-indigo-100" },
  "Targi": { bg: "bg-blue-50", text: "text-blue-700", iconBg: "bg-blue-100" },
  "Firma": { bg: "bg-purple-50", text: "text-purple-700", iconBg: "bg-purple-100" },
  "Certyfikaty": { bg: "bg-amber-50", text: "text-amber-700", iconBg: "bg-amber-100" },
};

export default function NewsPage() {
  const { lang, t } = useLanguage();
  const news = newsData[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div
        className="relative flex min-h-[200px] items-center px-4 py-10 sm:min-h-[240px] sm:py-12 md:min-h-[260px] md:py-14"
        style={{
          backgroundImage: `url(/hero-factory.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(15,31,51,0.7)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <h1 className="text-[24px] font-bold tracking-wide text-white sm:text-[28px] md:text-[32px]">
            {t("news.title")}
          </h1>
          <div className="mt-2 text-[13px] text-white/60">
            {lang === "uk" ? "Головна" : lang === "en" ? "Home" : "Strona główna"} / {t("news.title")}
          </div>
        </div>
      </div>

      {/* News Grid with Subtle Background */}
      <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNjY2NjY2MiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="relative mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => {
              const Icon = item.icon;
              const colors = categoryColors[item.category] || { bg: "bg-gray-50", text: "text-gray-700", iconBg: "bg-gray-100" };

              return (
                <article
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Top accent line */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#E8A838] to-[#D4922E] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="p-6 sm:p-7">
                    {/* Category Icon and Badge */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colors.iconBg}`}>
                        <Icon size={20} className={colors.text} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className={`inline-flex w-fit items-center rounded-full ${colors.bg} px-3 py-1 text-xs font-semibold ${colors.text}`}>
                          {item.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                          <Calendar size={13} />
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-lg font-bold leading-tight text-[#1E3A5F] transition-colors duration-200 group-hover:text-[#E8A838]">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="mb-5 text-sm leading-relaxed text-gray-700">
                      {item.text}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A5F] no-underline transition-all duration-200 group-hover:gap-3"
                    >
                      {t("news.read_more")}
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Hover background effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#E8A838]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </article>
              );
            })}
          </div>

          {/* Back to Home Link */}
          <div className="mt-12 text-center sm:mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1E3A5F] px-6 py-3 text-sm font-bold text-white no-underline transition-all duration-200 hover:bg-[#0F1F33] hover:shadow-lg hover:-translate-y-0.5"
            >
              <ArrowRight size={16} className="rotate-180" />
              {lang === "uk" && "На головну"}
              {lang === "en" && "Back to Home"}
              {lang === "pl" && "Powrót do strony głównej"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}