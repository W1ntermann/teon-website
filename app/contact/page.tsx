"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, MapPin, Clock, ChevronRight, ArrowRight, Shield, Zap, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

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
            backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop)",
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
            <span className="text-white/90">{t("contact.title")}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white max-w-3xl leading-tight"
          >
            {t("contact.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            {lang === "uk"
              ? "Зв'яжіться з нами для обговорення вашого проекту. Наші фахівці готові відповісти на всі ваші запитання."
              : lang === "pl"
                ? "Skontaktuj się z nami, aby omówić Twój projekt. Nasi specjaliści są gotowi odpowiedzieć na wszystkie Twoje pytania."
                : "Contact us to discuss your project. Our specialists are ready to answer all your questions."}
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

      {/* Main Content */}
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 border-b-2 border-[#1E3A5F] pb-3">
              {t("contact.info")}
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#1E3A5F] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#1E3A5F] mb-1">ТОВ «ТЕОН УКРАЇНА»</div>
                  <div className="text-sm text-[#555] leading-relaxed">
                    вул. Боровського Миколи, 28 К<br />
                    65031 Одеса<br />
                    Україна
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#1E3A5F] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="text-sm text-[#555] leading-relaxed">
                  +380 68 547 16 11
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#1E3A5F] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <a href="mailto:box.teonmachinery@gmail.com" className="text-sm text-[#1E3A5F] font-semibold hover:underline">
                    box.teonmachinery@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#1E3A5F] flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div className="text-sm text-[#555] leading-relaxed">
                  {t("contact.hours_days")}: {t("contact.hours_time")}
                </div>
              </div>
            </div>

            {/* OpenStreetMap */}
            <div className="relative mt-8 overflow-hidden rounded-xl h-[220px] sm:h-[250px]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=30.7200%2C46.4600%2C30.7600%2C46.4800&layer=mapnik&marker=46.4700%2C30.7400"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TEON Ukraine — Odesa map"
                className="absolute inset-0"
              />
              <a
                href="https://www.openstreetmap.org/?mlat=46.4700&mlon=30.7400&zoom=15&layers=M"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-2 rounded-md bg-[#1E3A5F]/90 px-2.5 py-1.5 text-[11px] text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-[#1E3A5F]"
              >
                {lang === "uk" ? "Відкрити на OpenStreetMap" : lang === "pl" ? "Otwórz na OpenStreetMap" : "Open in OpenStreetMap"} ↗
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6 border-b-2 border-[#1E3A5F] pb-3">
              {t("contact.write")}
            </h2>

            {submitted ? (
              <div className="rounded-xl bg-green-50 border border-green-200 p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">{t("contact.success")}</h3>
                <p className="text-sm text-green-600">{t("contact.success.text")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#333] mb-1.5">{t("contact.name")}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#d0d0d0] rounded-lg px-4 py-3 text-sm text-[#333] outline-none transition-colors focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20"
                    placeholder={lang === "uk" ? "Ваше ім'я" : lang === "pl" ? "Twoje imię" : "Your name"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#333] mb-1.5">{t("contact.email")}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#d0d0d0] rounded-lg px-4 py-3 text-sm text-[#333] outline-none transition-colors focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#333] mb-1.5">{t("contact.message")}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-[#d0d0d0] rounded-lg px-4 py-3 text-sm text-[#333] outline-none transition-colors focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 resize-vertical"
                    placeholder={lang === "uk" ? "Ваше повідомлення" : lang === "pl" ? "Twoja wiadomość" : "Your message"}
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-[11px] text-[#888]">{t("contact.required")}</div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#1E3A5F] text-white hover:bg-[#152B47] gap-2 font-bold"
                  >
                    {t("contact.send")} <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}