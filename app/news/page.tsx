"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";

const newsData: Record<string, { date: string; title: string; text: string; category?: string }[]> = {
  uk: [
    { date: "15.04.2024", title: "Теон на виставці Hannover Messe 2024", text: "Відвідайте наш стенд на найбільшій промисловій виставці світу. Ми представимо нові моделі обладнання та проведемо живі демонстрації роботи наших диссольверів та міксерів.", category: "Виставки" },
    { date: "01.03.2024", title: "Нова версія DISSOLVER-Butterfly", text: "Представляємо оновлену серію диссольверів з покращеною енергоефективністю та новою системою контролю в'язкості. Нова версія забезпечує на 30% вищу продуктивність.", category: "Продукти" },
    { date: "10.02.2024", title: "Розширення сервісного відділу", text: "Наша команда фахівців готова надати швидкий сервіс по всій Україні. Відкрили 3 нових сервісних центри у Львові, Одесі та Харкові.", category: "Компанія" },
    { date: "20.01.2024", title: "Сертифікація ISO 14001", text: "Теон отримав міжнародний сертифікат ISO 14001, що підтверджує нашу відповідальність за екологію та сталий розвиток виробництва.", category: "Сертифікати" },
    { date: "05.12.2023", title: "Відкриття нового складу", text: "Запустили сучасний складський комплекс площею 2000 м² для забезпечення швидкої доставки запчастин по всій Європі.", category: "Інфраструктура" },
  ],
  en: [
    { date: "15.04.2024", title: "Teon at Hannover Messe 2024", text: "Visit our booth at the largest industrial trade fair in the world. We will showcase new equipment models and conduct live demonstrations of our dissolvers and mixers.", category: "Exhibitions" },
    { date: "01.03.2024", title: "New DISSOLVER-Butterfly Version", text: "Introducing the updated dissolver series with improved energy efficiency and a new viscosity control system. The new version delivers 30% higher productivity.", category: "Products" },
    { date: "10.02.2024", title: "Service Department Expansion", text: "Our team of experts is ready to provide fast service across Ukraine. We opened 3 new service centers in Lviv, Odesa, and Kharkiv.", category: "Company" },
    { date: "20.01.2024", title: "ISO 14001 Certification", text: "Teon has obtained the international ISO 14001 certificate, confirming our commitment to environmental responsibility and sustainable manufacturing.", category: "Certificates" },
    { date: "05.12.2023", title: "New Warehouse Opening", text: "We launched a modern warehouse complex with an area of 2000 m² to ensure fast delivery of spare parts across Europe.", category: "Infrastructure" },
  ],
  pl: [
    { date: "15.04.2024", title: "Teon na targach Hannover Messe 2024", text: "Odwiedź nasze stoisko na największych światowych targach przemysłowych. Zaprezentujemy nowe modele urządzeń i przeprowadzimy live demonstracje pracy naszych dyssolwerów i mikserów.", category: "Targi" },
    { date: "01.03.2024", title: "Nowa wersja DISSOLVER-Butterfly", text: "Prezentujemy zaktualizowaną serię dyssolwerów z ulepszoną efektywnością energetyczną i nowym systemem kontroli lepkości. Nowa wersja zapewnia o 30% wyższą wydajność.", category: "Produkty" },
    { date: "10.02.2024", title: "Rozbudowa działu serwisowego", text: "Nasz zespół ekspertów gotowy do szybkiego serwisu na całej Ukrainie. Otworzyliśmy 3 nowe centra serwisowe we Lwowie, Odessie i Charkowie.", category: "Firma" },
    { date: "20.01.2024", title: "Certyfikacja ISO 14001", text: "Teon otrzymał międzynarodowy certyfikat ISO 14001, potwierdzający naszą odpowiedzialność za środowisko i zrównoważony rozwój produkcji.", category: "Certyfikaty" },
    { date: "05.12.2023", title: "Otwarcie nowego magazynu", text: "Uruchomiliśmy nowoczesny kompleks magazynowy o powierzchni 2000 m² dla zapewnienia szybkiej dostawy części zamiennych w całej Europie.", category: "Infrastruktura" },
  ],
};

export default function NewsPage() {
  const { lang, t } = useLanguage();
  const news = newsData[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1E3A5F] to-[#0F1F33] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4">
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t("news.title")}
          </h1>
          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            {lang === "uk" && "Слідкуйте за останніми новинами компанії Теон — нові проєкти, сертифікації та розширення можливостей"}
            {lang === "en" && "Follow the latest Teon company news — new projects, certifications, and expanded capabilities"}
            {lang === "pl" && "Śledź najnowsze wiadomości firmy Teon — nowe projekty, certyfikaty i rozszerzone możliwości"}
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top accent line */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#E8A838] to-[#D4922E] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

              <div className="p-6 sm:p-7">
                {/* Category and Date */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  {item.category && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E3A5F]/10 px-3 py-1 text-xs font-semibold text-[#1E3A5F]">
                      <Tag size={12} />
                      {item.category}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                    <Calendar size={13} />
                    {item.date}
                  </span>
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
          ))}
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
  );
}