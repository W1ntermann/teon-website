"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Factory,
  Cog,
  Shield,
  Award,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Wrench,
  Settings,
  Package,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
}

function StatCounter({ icon, value, label, suffix }: StatCounterProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300 border border-[#e5e5e5]">
      <div className="w-14 h-14 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mb-4 text-[#1E3A5F] group-hover:bg-[#1E3A5F]/20 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold text-[#1E3A5F] flex items-center">
        <span>{value}</span>
        <span>{suffix}</span>
      </div>
      <p className="text-[#888] text-sm mt-1">{label}</p>
      <div className="w-10 h-0.5 bg-[#E8A838] mt-3 group-hover:w-16 transition-all duration-300" />
    </div>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className="flex flex-col group p-6 rounded-xl bg-white border border-[#e5e5e5] hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-[#1E3A5F] bg-[#1E3A5F]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[#1E3A5F]/20">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-[#1E3A5F] group-hover:text-[#1E3A5F] transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-sm text-[#666] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function CompanyPageContent() {
  const { lang } = useLanguage();

  const historyData: Record<string, { year: string; text: string }[]> = {
    uk: [
      { year: "2017", text: "Заснування ТОВ «ТЕОН УКРАЇНА». Початок представництва високоякісного обладнання Teon на українському ринку." },
      { year: "2018", text: "Перші поставки машин серії KREI для провідних підприємств лакофарбової промисловості." },
      { year: "2019", text: "Розширення команди фахівців. Відкриття сервісного центру в Одесі." },
      { year: "2020", text: "Запуск повноцінного технічного обслуговування, ремонту та пуско-налагодження." },
      { year: "2021", text: "Партнерство з 50+ підприємствами України. Розширення географії обслуговування." },
      { year: "2022", text: "Продовження роботи в умовах воєнного стану. Забезпечення клієнтів запчастинами та технічною підтримкою." },
      { year: "2023", text: "Створення власного складу оригінальних запчастин. Досягнення показника 200+ клієнтів." },
      { year: "2024", text: "Запуск онлайн-платформи підтримки клієнтів. Цифровізація сервісних послуг." },
    ],
    en: [
      { year: "2017", text: "Founding of TEON UKRAINE LLC. Start of representing high-quality Teon equipment in the Ukrainian market." },
      { year: "2018", text: "First deliveries of KREI series machines to leading paint industry enterprises." },
      { year: "2019", text: "Expansion of the team of specialists. Opening of a service center in Odesa." },
      { year: "2020", text: "Launch of full-scale maintenance, repair, and commissioning services." },
      { year: "2021", text: "Partnership with 50+ enterprises in Ukraine. Expansion of service geography." },
      { year: "2022", text: "Continued operations under martial law. Ensuring customers with spare parts and technical support." },
      { year: "2023", text: "Establishment of an in-house warehouse of original spare parts. Reaching 200+ customers." },
      { year: "2024", text: "Launch of an online customer support platform. Digitalization of services." },
    ],
    pl: [
      { year: "2017", text: "Założenie TEON UKRAINE Sp. z o.o. Rozpoczęcie reprezentacji wysokiej jakości sprzętu Teon na rynku ukraińskim." },
      { year: "2018", text: "Pierwsze dostawy maszyn serii KREI dla wiodących przedsiębiorstw przemysłu lakierniczego." },
      { year: "2019", text: "Rozbudowa zespołu specjalistów. Otwarcie centrum serwisowego w Odessie." },
      { year: "2020", text: "Uruchomienie pełnej obsługi technicznej, napraw i uruchomień." },
      { year: "2021", text: "Partnerstwo z 50+ przedsiębiorstwami na Ukrainie. Rozszerzenie geografii obsługi." },
      { year: "2022", text: "Kontynuacja działalności w warunkach stanu wojennego. Zapewnienie klientom części zamiennych i wsparcia technicznego." },
      { year: "2023", text: "Powstanie własnego magazynu oryginalnych części zamiennych. Osiągnięcie 200+ klientów." },
      { year: "2024", text: "Uruchomienie online platformy wsparcia klientów. Cyfryzacja usług serwisowych." },
    ],
  };

  const servicesData: Record<string, { icon: React.ReactNode; title: string; description: string }[]> = {
    uk: [
      { icon: <Factory className="w-6 h-6" />, title: "Передове виробництво", description: "Сучасні виробничі потужності, оснащені передовими технологіями для прецизійного виготовлення та контролю якості." },
      { icon: <Cog className="w-6 h-6" />, title: "Індивідуальна інженерія", description: "Індивідуальні інженерні рішення, розроблені для задоволення конкретних промислових вимог." },
      { icon: <Shield className="w-6 h-6" />, title: "Контроль якості", description: "Суворі процеси контролю якості, що гарантують відповідність кожного продукту міжнародним стандартам." },
      { icon: <Wrench className="w-6 h-6" />, title: "Сервісне обслуговування", description: "Комплексне технічне обслуговування для забезпечення оптимальної продуктивності промислового обладнання." },
      { icon: <Package className="w-6 h-6" />, title: "Управління ланцюгами поставок", description: "Ефективні логістичні рішення, що забезпечують своєчасну доставку та безперебійну роботу." },
      { icon: <Settings className="w-6 h-6" />, title: "Оптимізація процесів", description: "Передові інженерні процеси для максимізації ефективності та зниження витрат." },
    ],
    en: [
      { icon: <Factory className="w-6 h-6" />, title: "Advanced Manufacturing", description: "State-of-the-art production facilities equipped with cutting-edge technology for precision manufacturing and quality assurance." },
      { icon: <Cog className="w-6 h-6" />, title: "Custom Engineering", description: "Tailored engineering solutions designed to meet specific industrial requirements with innovative approaches." },
      { icon: <Shield className="w-6 h-6" />, title: "Quality Assurance", description: "Rigorous quality control processes ensuring every product meets international standards and exceeds client expectations." },
      { icon: <Wrench className="w-6 h-6" />, title: "Maintenance Services", description: "Comprehensive maintenance and support services to ensure optimal performance and longevity of industrial equipment." },
      { icon: <Package className="w-6 h-6" />, title: "Supply Chain Management", description: "Efficient logistics and supply chain solutions ensuring timely delivery and seamless operations." },
      { icon: <Settings className="w-6 h-6" />, title: "Process Optimization", description: "Advanced process engineering to maximize efficiency, reduce costs, and improve overall operational performance." },
    ],
    pl: [
      { icon: <Factory className="w-6 h-6" />, title: "Zaawansowana produkcja", description: "Nowoczesne zakłady produkcyjne wyposażone w najnowocześniejsze technologie do precyzyjnej produkcji." },
      { icon: <Cog className="w-6 h-6" />, title: "Inżynieria na zamówienie", description: "Dostosowane rozwiązania inżynieryjne zaprojektowane do spełnienia określonych wymagań przemysłowych." },
      { icon: <Shield className="w-6 h-6" />, title: "Zapewnienie jakości", description: "Rygorystyczne procesy kontroli jakości zapewniające zgodność każdego produktu z międzynarodowymi standardami." },
      { icon: <Wrench className="w-6 h-6" />, title: "Usługi konserwacyjne", description: "Kompleksowe usługi konserwacji i wsparcia dla optymalnej wydajności sprzętu przemysłowego." },
      { icon: <Package className="w-6 h-6" />, title: "Zarządzanie łańcuchem dostaw", description: "Efektywne rozwiązania logistyczne zapewniające terminową dostawę i płynne operacje." },
      { icon: <Settings className="w-6 h-6" />, title: "Optymalizacja procesów", description: "Zaawansowana inżynieria procesów w celu maksymalizacji wydajności i redukcji kosztów." },
    ],
  };

  const stats = [
    { icon: <Factory className="w-6 h-6" />, value: 200, label: lang === "uk" ? "Машин встановлено" : lang === "pl" ? "Zainstalowanych maszyn" : "Machines Installed", suffix: "+" },
    { icon: <Users className="w-6 h-6" />, value: 200, label: lang === "uk" ? "Клієнтів" : lang === "pl" ? "Klientów" : "Clients", suffix: "+" },
    { icon: <Globe className="w-6 h-6" />, value: 50, label: lang === "uk" ? "Країн" : lang === "pl" ? "Krajów" : "Countries Served", suffix: "+" },
    { icon: <Award className="w-6 h-6" />, value: 8, label: lang === "uk" ? "Років досвіду" : lang === "pl" ? "Lat doświadczenia" : "Years of Experience", suffix: "" },
  ];

  const partners = [
    { name: "Partner 1", logo: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg" },
    { name: "Partner 2", logo: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg" },
    { name: "Partner 3", logo: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg" },
    { name: "Partner 4", logo: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg" },
    { name: "Partner 5", logo: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg" },
    { name: "Partner 6", logo: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg" },
  ];

  const history = historyData[lang] || historyData.en;
  const services = servicesData[lang] || servicesData.en;

  return (
    <section className="w-full bg-[#fafafa] text-[#333] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative z-10">
          {/* ===== INTRO ===== */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-[#E8A838] font-medium">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">
                {lang === "uk" ? "Промислова досконалість" : lang === "pl" ? "Doskonałość przemysłowa" : "Industrial Excellence"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-6">
              {lang === "uk" ? "З 2017 року на ринку України" : lang === "pl" ? "Od 2017 roku na rynku ukraińskim" : "Since 2017 in the Ukrainian Market"}
            </h2>
            <div className="w-24 h-1 bg-[#E8A838] mx-auto mb-6" />
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              {lang === "uk"
                ? "Лідируємо в промисловому виробничому секторі з інноваційними рішеннями, передовими технологіями та непохитною відданістю якості та досконалості."
                : lang === "pl"
                  ? "Prowadzimy w sektorze produkcji przemysłowej z innowacyjnymi rozwiązaniami, najnowocześniejszą technologią i niezachwianym zaangażowaniem w jakość i doskonałość."
                  : "Leading the industrial manufacturing sector with innovative solutions, cutting-edge technology, and unwavering commitment to quality and excellence."
              }
            </p>
          </div>

          {/* ===== STATS ===== */}
          <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>

          {/* ===== ABOUT + MISSION ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                alt={lang === "uk" ? "Виробничий завод" : lang === "pl" ? "Zakład produkcyjny" : "Manufacturing facility"}
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa]/80 to-transparent rounded-2xl" />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                {lang === "uk" ? "Наша місія" : lang === "pl" ? "Nasza misja" : "Our Mission"}
              </h2>
              <p className="text-[#555] leading-relaxed mb-4">
                {lang === "uk"
                  ? "У Teon ми присвячені трансформації промислового виробничого ландшафту через інновації, точність та сталі практики. Наша команда досвідчених інженерів та техніків невтомно працює, щоб забезпечити рішення, які сприяють прогресу та ефективності."
                  : lang === "pl"
                    ? "W Teon jesteśmy oddani transformacji krajobrazu produkcji przemysłowej poprzez innowacje, precyzję i zrównoważone praktyki. Nasz zespół doświadczonych inżynierów i techników niestrudzenie pracuje, aby dostarczać rozwiązania napędzające postęp i wydajność."
                    : "At Teon, we are dedicated to transforming the industrial manufacturing landscape through innovation, precision, and sustainable practices. Our team of expert engineers and technicians work tirelessly to deliver solutions that drive progress and efficiency."
                }
              </p>
              <p className="text-[#555] leading-relaxed mb-6">
                {lang === "uk"
                  ? "З понад столітнім досвідом ми зарекомендували себе як надійний партнер для бізнесу, що шукає надійні, високоякісні виробничі рішення, які відповідають вимогам сучасної промисловості."
                  : lang === "pl"
                    ? "Z ponad stuletnim doświadczeniem ugruntowaliśmy naszą pozycję jako zaufany partner dla firm poszukujących niezawodnych, wysokiej jakości rozwiązań produkcyjnych, które spełniają wymagania nowoczesnego przemysłu."
                    : "With over a century of experience, we have established ourselves as a trusted partner for businesses seeking reliable, high-quality manufacturing solutions that meet the demands of modern industry."
                }
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#E8A838]" />
                  <span className="text-sm font-medium text-[#1E3A5F]">
                    {lang === "uk" ? "Сертифіковано ISO" : lang === "pl" ? "Certyfikat ISO" : "ISO Certified"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#E8A838]" />
                  <span className="text-sm font-medium text-[#1E3A5F]">
                    {lang === "uk" ? "Глобальне охоплення" : lang === "pl" ? "Globalny zasięg" : "Global Reach"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#E8A838]" />
                  <span className="text-sm font-medium text-[#1E3A5F]">
                    {lang === "uk" ? "Підтримка 24/7" : lang === "pl" ? "Wsparcie 24/7" : "24/7 Support"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== HISTORY TIMELINE ===== */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">
              {lang === "uk" ? "Наша історія" : lang === "pl" ? "Nasza historia" : "Our History"}
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="border-l-[3px] border-[#1E3A5F] pl-5">
                {history.map((item) => (
                  <div key={item.year} className="relative mb-8 pl-4 last:mb-0">
                    <div className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-[#1E3A5F] bg-white" />
                    <div className="text-lg font-bold text-[#1E3A5F]">{item.year}</div>
                    <div className="mt-1.5 text-[15px] text-[#555]">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== CAPABILITIES ===== */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-4">
              {lang === "uk" ? "Наші можливості" : lang === "pl" ? "Nasze możliwości" : "Our Capabilities"}
            </h2>
            <p className="text-center text-[#666] mb-10 max-w-2xl mx-auto">
              {lang === "uk"
                ? "Комплексні промислові рішення, що охоплюють усі аспекти виробництва"
                : lang === "pl"
                  ? "Kompleksowe rozwiązania przemysłowe obejmujące wszystkie aspekty produkcji"
                  : "Comprehensive industrial solutions covering all aspects of manufacturing"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>

          {/* ===== CERTIFICATES ===== */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-4">
              {lang === "uk" ? "Сертифікати" : lang === "pl" ? "Certyfikaty" : "Certificates"}
            </h2>
            <p className="text-center text-[#666] mb-10 max-w-2xl mx-auto">
              {lang === "uk"
                ? "Наші сертифікати підтверджують відповідність найвищим міжнародним стандартам якості та безпеки"
                : lang === "pl"
                  ? "Nasze certyfikaty potwierdzają zgodność z najwyższymi międzynarodowymi standardami jakości i bezpieczeństwa"
                  : "Our certificates confirm compliance with the highest international quality and safety standards"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {certificates.map((cert) => (
                <a
                  key={cert.file}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl bg-white border border-[#e5e5e5] p-5 transition-all hover:shadow-md hover:border-[#1E3A5F]/30 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1E3A5F]/10 flex items-center justify-center text-[#1E3A5F] group-hover:bg-[#1E3A5F]/20 transition-colors">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1E3A5F]">{cert.name}</div>
                      <div className="text-xs text-[#888]">
                        {lang === "uk" ? "Переглянути сертифікат" : lang === "pl" ? "Zobacz certyfikat" : "View certificate"}
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-medium uppercase text-[#E8A838]">
                    {cert.lang}
                    <ExternalLink size={12} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ===== PARTNERS ===== */}
          <div className="mb-20">
            <p className="text-center text-[#888] mb-8 font-medium uppercase tracking-wider text-sm">
              {lang === "uk" ? "Довіряють лідери промисловості по всьому світу" : lang === "pl" ? "Zaufane przez liderów przemysłu na całym świecie" : "Trusted by Industry Leaders Worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner, idx) => (
                <div key={idx}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== CONTACT INFO ===== */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#e5e5e5] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#1E3A5F] text-center mb-8">
                {lang === "uk" ? "Контактна інформація" : lang === "pl" ? "Informacje kontaktowe" : "Contact Information"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mb-3 text-[#1E3A5F]">
                    <MapPin size={22} />
                  </div>
                  <div className="font-bold text-[#1E3A5F]">ТОВ «ТЕОН УКРАЇНА»</div>
                  <div className="text-sm text-[#666] mt-1">
                    вул. Боровського Миколи, 28 К<br />
                    65031 Одеса<br />
                    Україна
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mb-3 text-[#1E3A5F]">
                    <Phone size={22} />
                  </div>
                  <div className="font-bold text-[#1E3A5F]">
                    {lang === "uk" ? "Телефон" : lang === "pl" ? "Telefon" : "Phone"}
                  </div>
                  <div className="text-sm text-[#666] mt-1">+380 68 547 16 11</div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mb-3 text-[#1E3A5F]">
                    <Mail size={22} />
                  </div>
                  <div className="font-bold text-[#1E3A5F]">Email</div>
                  <a href="mailto:box.teonmachinery@gmail.com" className="text-sm text-[#1E3A5F] font-semibold hover:underline mt-1">
                    box.teonmachinery@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ===== CTA ===== */}
          <div className="bg-gradient-to-r from-[#1E3A5F] to-[#0F1F33] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {lang === "uk" ? "Готові до співпраці?" : lang === "pl" ? "Gotowi do współpracy?" : "Ready to Partner?"}
              </h3>
              <p className="text-white/80">
                {lang === "uk"
                  ? "Зв'яжіться з нами для обговорення вашого проекту"
                  : lang === "pl"
                    ? "Skontaktuj się z nami, aby omówić Twój projekt"
                    : "Contact us to discuss your project and discover how Teon can elevate your manufacturing capabilities."}
              </p>
            </div>
            <a href="/contact">
              <Button
                size="lg"
                className="bg-[#E8A838] text-[#1E3A5F] hover:bg-[#D4922E] gap-2 font-bold"
              >
                {lang === "uk" ? "Зв'язатися з нами" : lang === "pl" ? "Skontaktuj się z nami" : "Contact Us"} <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}