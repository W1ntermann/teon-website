"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Factory,
  Cog,
  Shield,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Wrench,
  Settings,
  Package,
  Globe,
  Clock,
  MapPin,
  Phone,
  Mail,
  FileText,
  ExternalLink,
  Target,
  Zap,
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
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300 border border-[#e5e5e5]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mb-4 text-[#1E3A5F] group-hover:bg-[#1E3A5F]/20 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-bold text-[#1E3A5F] flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[#888] text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-[#E8A838] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceItem({ icon, title, description, delay }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group p-6 rounded-xl bg-white border border-[#e5e5e5] hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[#1E3A5F] bg-[#1E3A5F]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[#1E3A5F]/20"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-medium text-[#1E3A5F] group-hover:text-[#1E3A5F] transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <p className="text-sm text-[#666] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function CompanyPageContent() {
  const { lang } = useLanguage();

  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
    { icon: <Factory className="w-6 h-6" />, value: 1500, label: lang === "uk" ? "Машин встановлено" : lang === "pl" ? "Zainstalowanych maszyn" : "Machines Installed", suffix: "+" },
    { icon: <Users className="w-6 h-6" />, value: 500, label: lang === "uk" ? "Клієнтів" : lang === "pl" ? "Klientów" : "Clients Worldwide", suffix: "+" },
    { icon: <Globe className="w-6 h-6" />, value: 50, label: lang === "uk" ? "Країн" : lang === "pl" ? "Krajów" : "Countries Served", suffix: "+" },
    { icon: <Award className="w-6 h-6" />, value: 135, label: lang === "uk" ? "Років досвіду" : lang === "pl" ? "Lat doświadczenia" : "Years of Experience", suffix: "" },
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
    <section
      ref={sectionRef}
      className="w-full bg-[#fafafa] text-[#333] overflow-hidden relative"
    >
      {/* Background decorative blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#1E3A5F]/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#E8A838]/5 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative z-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* ===== INTRO ===== */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div className="inline-flex items-center gap-2 mb-4 text-[#E8A838] font-medium">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">
                {lang === "uk" ? "Промислова досконалість" : lang === "pl" ? "Doskonałość przemysłowa" : "Industrial Excellence"}
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-6">
              {lang === "uk" ? "Понад 130 років інженерної досконалості" : lang === "pl" ? "Ponad 130 lat inżynieryjnej doskonałości" : "Over 130 Years of Engineering Excellence"}
            </h2>
            <motion.div
              className="w-24 h-1 bg-[#E8A838] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              {lang === "uk"
                ? "Лідируємо в промисловому виробничому секторі з інноваційними рішеннями, передовими технологіями та непохитною відданістю якості та досконалості."
                : lang === "pl"
                  ? "Prowadzimy w sektorze produkcji przemysłowej z innowacyjnymi rozwiązaniami, najnowocześniejszą technologią i niezachwianym zaangażowaniem w jakość i doskonałość."
                  : "Leading the industrial manufacturing sector with innovative solutions, cutting-edge technology, and unwavering commitment to quality and excellence."
              }
            </p>
          </motion.div>

          {/* ===== STATS ===== */}
          <motion.div
            ref={statsRef}
            className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* ===== ABOUT + MISSION ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <motion.div variants={itemVariants} className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop"
                alt={lang === "uk" ? "Виробничий завод" : lang === "pl" ? "Zakład produkcyjny" : "Manufacturing facility"}
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa]/80 to-transparent rounded-2xl" />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col justify-center">
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
            </motion.div>
          </div>

          {/* ===== HISTORY TIMELINE ===== */}
          <motion.div variants={itemVariants} className="mb-20">
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
          </motion.div>

          {/* ===== CAPABILITIES ===== */}
          <motion.div variants={itemVariants} className="mb-20">
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
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* ===== CERTIFICATES ===== */}
          <motion.div variants={itemVariants} className="mb-20">
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
          </motion.div>

          {/* ===== PARTNERS ===== */}
          <motion.div variants={itemVariants} className="mb-20">
            <p className="text-center text-[#888] mb-8 font-medium uppercase tracking-wider text-sm">
              {lang === "uk" ? "Довіряють лідери промисловості по всьому світу" : lang === "pl" ? "Zaufane przez liderów przemysłu na całym świecie" : "Trusted by Industry Leaders Worldwide"}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== CONTACT INFO ===== */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#e5e5e5] p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#1E3A5F] text-center mb-8">
                {lang === "uk" ? "Контактна інформація" : lang === "pl" ? "Informacje kontaktowe" : "Contact Information"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mb-3 text-[#1E3A5F]">
                    <MapPin size={22} />
                  </div>
                  <div className="font-bold text-[#1E3A5F]">Теон Maschinenfabrik</div>
                  <div className="text-sm text-[#666] mt-1">
                    Lange Straße 5<br />
                    32609 Hüllhorst<br />
                    Deutschland
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mb-3 text-[#1E3A5F]">
                    <Phone size={22} />
                  </div>
                  <div className="font-bold text-[#1E3A5F]">
                    {lang === "uk" ? "Телефон" : lang === "pl" ? "Telefon" : "Phone"}
                  </div>
                  <div className="text-sm text-[#666] mt-1">+49 (0) 5744 / 508-0</div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mb-3 text-[#1E3A5F]">
                    <Mail size={22} />
                  </div>
                  <div className="font-bold text-[#1E3A5F]">Email</div>
                  <a href="mailto:info@theon.com" className="text-sm text-[#1E3A5F] font-semibold hover:underline mt-1">
                    info@theon.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== CTA ===== */}
          <motion.div
            className="bg-gradient-to-r from-[#1E3A5F] to-[#0F1F33] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}