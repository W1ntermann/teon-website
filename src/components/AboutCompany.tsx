"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Factory,
  Users,
  Award,
  Globe,
  Shield,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import heroFactory from "@/assets/hero-factory.jpg";

export default function AboutCompany() {
  const { lang, t } = useLanguage();

  const stats = [
    {
      icon: <Factory className="h-6 w-6" />,
      value: "2017",
      label: lang === "uk" ? "Засновано" : lang === "pl" ? "Założona" : "Founded",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "8+",
      label: lang === "uk" ? "Років досвіду" : lang === "pl" ? "Lat doświadczenia" : "Years Experience",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "200+",
      label: lang === "uk" ? "Клієнтів" : lang === "pl" ? "Klientów" : "Clients",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "50+",
      label: lang === "uk" ? "Країн" : lang === "pl" ? "Krajów" : "Countries",
    },
  ];

  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: lang === "uk" ? "Європейська якість" : lang === "pl" ? "Jakość europejska" : "European Quality",
      description:
        lang === "uk"
          ? "Найвищі стандарти виготовлення та контролю якості"
          : lang === "pl"
            ? "Najwyższe standardy produkcji i kontroli jakości"
            : "Highest manufacturing and quality control standards",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: lang === "uk" ? "Точність" : lang === "pl" ? "Precyzja" : "Precision",
      description:
        lang === "uk"
          ? "Високоточні машини для диспергування, змішування та подрібнення"
          : lang === "pl"
            ? "Precyzyjne maszyny do dyspergowania, mieszania i mielenia"
            : "High-precision machines for dispersing, mixing and grinding",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: lang === "uk" ? "Інновації" : lang === "pl" ? "Innowacje" : "Innovation",
      description:
        lang === "uk"
          ? "Постійний розвиток та вдосконалення технологій"
          : lang === "pl"
            ? "Ciągły rozwój i doskonalenie technologii"
            : "Continuous development and improvement of technologies",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: lang === "uk" ? "Глобальність" : lang === "pl" ? "Globalność" : "Global Reach",
      description:
        lang === "uk"
          ? "Поставки та сервіс у більш ніж 50 країнах світу"
          : lang === "pl"
            ? "Dostawa i serwis w ponad 50 krajach świata"
            : "Delivery and service in more than 50 countries worldwide",
    },
  ];

  return (
    <section className="w-full bg-[#fafafa] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-[#E8A838] text-[#E8A838]"
          >
            {t("about.title")}
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-[#1E3A5F] sm:text-4xl md:text-5xl">
            {lang === "uk"
              ? "З 2017 року на ринку України"
              : lang === "pl"
                ? "Od 2017 roku na rynku ukraińskim"
                : "Since 2017 in the Ukrainian Market"}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#555] sm:text-lg">
            {lang === "uk"
              ? "ТОВ «ТЕОН УКРАЇНА» — офіційний представник високоякісного європейського обладнання Teon в Україні. Ми надаємо високоякісні машини для диспергування, змішування та подрібнення, а також повний цикл сервісних послуг для підприємств лакофарбової та хімічної промисловості."
              : lang === "pl"
                ? "TEON UKRAINE Sp. z o.o. — oficjalny przedstawiciel wysokiej jakości europejskiego sprzętu Teon na Ukrainie. Dostarczamy wysokiej jakości maszyny do dyspergowania, mieszania i mielenia, a także pełen zakres usług serwisowych dla przemysłu lakierniczego i chemicznego."
                : "TEON UKRAINE LLC — official representative of high-quality European Teon equipment in Ukraine. We provide high-quality machines for dispersing, mixing and grinding, as well as a full range of services for the paint and chemical industries."}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-[#e0e0e0] bg-white transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-1 text-2xl font-bold text-[#1E3A5F] sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#888] sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                  <div className="text-[#E8A838]">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <Card className="border-[#e0e0e0] bg-white">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Text */}
                <div className="p-8 sm:p-10 md:p-12">
                  <h3 className="mb-4 text-2xl font-bold text-[#1E3A5F] sm:text-3xl">
                    {lang === "uk"
                      ? "Наша історія"
                      : lang === "pl"
                        ? "Nasza historia"
                        : "Our Story"}
                  </h3>
                  <p className="mb-4 leading-relaxed text-[#444]">
                    {t("about.text1")}
                  </p>
                  <p className="mb-6 leading-relaxed text-[#444]">
                    {lang === "uk"
                      ? "За 8 років роботи ми встановили понад 200 машин, побудували мережу сервісних центрів і заслужили довіру провідних підприємств України. Наша місія — забезпечити українську промисловість сучасним обладнанням з повноцінною технічною підтримкою."
                      : lang === "pl"
                        ? "W ciągu 8 lat działalności zainstalowaliśmy ponad 200 maszyn, zbudowaliśmy sieć centrów serwisowych i zyskaliśmy zaufanie wiodących przedsiębiorstw na Ukrainie. Naszą misją jest wyposażenie ukraińskiego przemysłu w nowoczesny sprzęt z pełnym wsparciem technicznym."
                        : "Over 8 years, we have installed over 200 machines, built a network of service centers, and earned the trust of leading Ukrainian enterprises. Our mission is to provide Ukrainian industry with modern equipment with full technical support."}
                  </p>
                  <Link href="/company">
                    <Button className="bg-[#1E3A5F] text-white hover:bg-[#152B47]">
                      {lang === "uk"
                        ? "Дізнатись більше"
                        : lang === "pl"
                          ? "Dowiedz się więcej"
                          : "Learn More About Us"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-full">
                  <img
                    src={heroFactory.src}
                    alt={
                      lang === "uk"
                        ? "Завод Теон"
                        : lang === "pl"
                          ? "Fabryka Teon"
                          : "Teon Factory"
                    }
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute -left-4 top-8 hidden rounded-lg bg-[#E8A838] p-4 shadow-lg md:block">
                    <div className="text-2xl font-bold text-[#1E3A5F]">2017</div>
                    <div className="text-xs font-semibold text-[#1E3A5F]/80">
                      {lang === "uk"
                        ? "Засновано"
                        : lang === "pl"
                          ? "Założona"
                          : "Founded"}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-14">
          <div className="mb-10 text-center">
            <h3 className="mb-3 text-2xl font-bold text-[#1E3A5F] sm:text-3xl">
              {lang === "uk"
                ? "Наші цінності"
                : lang === "pl"
                  ? "Nasze wartości"
                  : "Our Core Values"}
            </h3>
            <p className="mx-auto max-w-2xl text-[#666]">
              {lang === "uk"
                ? "Принципи, які керують нашою роботою та визначають нашу відданість досконалості"
                : lang === "pl"
                  ? "Zasady, które kierują naszą pracą i definiują nasze zaangażowanie w doskonałość"
                  : "The principles that guide our operations and define our commitment to excellence"}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border border-[#e5e5e5] bg-white p-6 text-center transition-colors hover:border-[#1E3A5F]/20 hover:bg-[#f5f5f5]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A5F]/10 text-[#1E3A5F]">
                  {value.icon}
                </div>
                <h4 className="mb-2 text-base font-semibold text-[#1E3A5F]">
                  {value.title}
                </h4>
                <p className="text-sm leading-relaxed text-[#666]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="border-[#E8A838]/30 bg-[#E8A838]/5">
            <CardContent className="p-8 sm:p-10 md:p-12">
              <h3 className="mb-3 text-xl font-bold text-[#1E3A5F] sm:text-2xl">
                {lang === "uk"
                  ? "Готові до співпраці?"
                  : lang === "pl"
                    ? "Gotowi do współpracy?"
                    : "Ready to Partner?"}
              </h3>
              <p className="mb-6 text-[#555]">
                {lang === "uk"
                  ? "Приєднуйтесь до сотень компаній по всьому світу, які довіряють Теон"
                  : lang === "pl"
                    ? "Dołącz do setek firm na całym świecie, które ufają Teon"
                    : "Join hundreds of companies worldwide who trust Teon"}
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/quote?source=company&type=quote">
                  <Button className="bg-[#E8A838] text-[#1E3A5F] hover:bg-[#D4922E]">
                    {lang === "uk"
                      ? "Запросити пропозицію"
                      : lang === "pl"
                        ? "Poproś o ofertę"
                        : "Request a Quote"}
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F]/5"
                  >
                    {lang === "uk"
                      ? "Переглянути продукти"
                      : lang === "pl"
                        ? "Zobacz produkty"
                        : "View Products"}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}