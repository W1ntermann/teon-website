"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowRight,
  Shield,
  Zap,
  CheckCircle,
  Globe,
  Wrench,
  ClipboardList,
  Settings,
  Package,
  GraduationCap,
  HeadphonesIcon,
} from "lucide-react";

const serviceItems = [
  { icon: <Wrench className="w-6 h-6" />, titleKey: "service.item.install.title", textKey: "service.item.install.text" },
  { icon: <ClipboardList className="w-6 h-6" />, titleKey: "service.item.maintenance.title", textKey: "service.item.maintenance.text" },
  { icon: <Settings className="w-6 h-6" />, titleKey: "service.item.repair.title", textKey: "service.item.repair.text" },
  { icon: <Package className="w-6 h-6" />, titleKey: "service.item.spares.title", textKey: "service.item.spares.text" },
  { icon: <GraduationCap className="w-6 h-6" />, titleKey: "service.item.training.title", textKey: "service.item.training.text" },
  { icon: <HeadphonesIcon className="w-6 h-6" />, titleKey: "service.item.support.title", textKey: "service.item.support.text" },
];

export default function Service() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0F1F33] via-[#152B47] to-[#1E3A5F]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px, 40px 40px",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1600&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 py-12 sm:py-16 md:py-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-2 text-[13px] text-white/50 mb-6"
          >
            <Link href="/" className="text-white/50 no-underline transition-colors hover:text-white/80">
              {t("breadcrumb.home")}
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/90">{t("service.title")}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white max-w-3xl leading-tight"
          >
            {t("service.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            {t("service.text")}
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <Shield size={16} className="text-[#E8A838]" />
              <span className="text-xs font-semibold text-white/90">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <Zap size={16} className="text-[#E8A838]" />
              <span className="text-xs font-semibold text-white/90">ATEX</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <CheckCircle size={16} className="text-[#E8A838]" />
              <span className="text-xs font-semibold text-white/90">CE</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <Globe size={16} className="text-[#E8A838]" />
              <span className="text-xs font-semibold text-white/90">{t("trust.global")}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group rounded-xl bg-white border border-[#e5e5e5] p-6 hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                className="text-[#1E3A5F] bg-[#1E3A5F]/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-[#1E3A5F]/20 transition-colors duration-300"
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">{t(item.titleKey)}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{t(item.textKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials
        subtitle={
          lang === "uk"
            ? "Що кажуть наші клієнти про сервіс Теон"
            : lang === "pl"
              ? "Co mówią nasi klienci o serwisie Teon"
              : "What our clients say about Teon service"
        }
      />

      {/* CTA Banner */}
      <div className="border-t border-[#e5e5e5] bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12 md:py-14">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-[#0F1F33] via-[#152B47] to-[#1E3A5F] p-8 text-center sm:p-12 md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {t("service.cta")}
              </h3>
              <p className="mt-2 text-sm text-white/60 sm:text-[15px]">
                {t("service.cta.text")}
              </p>
            </div>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#E8A838] text-[#1E3A5F] hover:bg-[#D4922E] gap-2 font-bold"
              >
                {t("service.contact_us")} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}