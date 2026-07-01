"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronRight, ArrowRight, Shield, Zap, CheckCircle, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Quote() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            backgroundImage: "url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&auto=format&fit=crop)",
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
            <span className="text-white/90">{t("quote.title")}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white max-w-3xl leading-tight"
          >
            {t("quote.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            {t("quote.subtitle")}
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

      {/* Form Section */}
      <div className="mx-auto max-w-[720px] px-4 py-12 sm:py-16">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-white border border-[#e5e5e5] p-10 md:p-16 text-center shadow-sm"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">{t("quote.success")}</h3>
            <p className="text-[#666] mb-8">{t("quote.success.text")}</p>
            <Link href="/">
              <Button
                variant="outline"
                className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F]/5"
              >
                {t("breadcrumb.home")}
              </Button>
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-[#e5e5e5] p-8 md:p-10 shadow-sm"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-[#1E3A5F]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1E3A5F]">{t("quote.title")}</h2>
              <p className="text-sm text-[#666] mt-2">{t("quote.subtitle")}</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-bold text-[#333] mb-1.5">{t("quote.name")}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#d0d0d0] rounded-lg px-4 py-3.5 text-sm text-[#333] outline-none transition-colors focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20"
                  placeholder={lang === "uk" ? "Ваше ім'я" : lang === "pl" ? "Twoje imię" : "Your name"}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#333] mb-1.5">{t("quote.email")}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#d0d0d0] rounded-lg px-4 py-3.5 text-sm text-[#333] outline-none transition-colors focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#333] mb-1.5">{t("quote.message")}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border border-[#d0d0d0] rounded-lg px-4 py-3.5 text-sm text-[#333] outline-none transition-colors focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 resize-vertical"
                  placeholder={
                    lang === "uk"
                      ? "Опишіть ваше завдання або питання"
                      : lang === "pl"
                        ? "Opisz swoje zadanie lub pytanie"
                        : "Describe your task or question"
                  }
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                <div className="text-[11px] text-[#888]">{t("quote.required")}</div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#E8A838] text-[#1E3A5F] hover:bg-[#D4922E] gap-2 font-bold text-base px-8 py-4 sm:py-3"
                >
                  {t("quote.send")} <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>

            {/* Trust indicators below form */}
            <div className="mt-8 pt-6 border-t border-[#eee]">
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#888]">
                <div className="flex items-center gap-1.5">
                  <Shield size={14} className="text-[#E8A838]" />
                  <span>{t("trust.certified")} ISO 9001</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe size={14} className="text-[#E8A838]" />
                  <span>{t("trust.global")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#E8A838]" />
                  <span>{t("trust.experience")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}