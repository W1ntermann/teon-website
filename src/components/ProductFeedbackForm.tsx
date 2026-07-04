"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductFeedbackFormProps {
  productName?: string;
  source?: string;
}

export function ProductFeedbackForm({ productName, source }: ProductFeedbackFormProps) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: productName ? `Мене цікавить модель: ${productName}` : "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    // In a real app, send to API with tracking data
    console.log("Product feedback form submission:", { ...formData, productName, source });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center"
      >
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle size={28} className="text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-green-800">{t("product.feedback_success")}</h3>
        <p className="mt-1 text-sm text-green-600">{t("product.feedback_success_text")}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-[#e0e0e0] bg-white p-6 sm:p-8"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-[#1E3A5F]">{t("product.feedback_title")}</h3>
        <p className="mt-1 text-sm text-[#666]">{t("product.feedback_desc")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="group relative">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t("product.feedback_name")}
              className="w-full rounded-lg border border-[#d0d0d0] px-4 py-3 text-sm text-[#333] outline-none transition-all placeholder:text-[#999] focus:border-[#E8A838] focus:ring-2 focus:ring-[#E8A838]/20"
            />
          </div>
          <div className="group relative">
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t("product.feedback_phone")}
              className="w-full rounded-lg border border-[#d0d0d0] px-4 py-3 text-sm text-[#333] outline-none transition-all placeholder:text-[#999] focus:border-[#E8A838] focus:ring-2 focus:ring-[#E8A838]/20"
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t("product.feedback_email")}
            className="w-full rounded-lg border border-[#d0d0d0] px-4 py-3 text-sm text-[#333] outline-none transition-all placeholder:text-[#999] focus:border-[#E8A838] focus:ring-2 focus:ring-[#E8A838]/20"
          />
        </div>

        <div>
          <textarea
            rows={3}
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            placeholder={t("product.feedback_comment")}
            className="w-full resize-none rounded-lg border border-[#d0d0d0] px-4 py-3 text-sm text-[#333] outline-none transition-all placeholder:text-[#999] focus:border-[#E8A838] focus:ring-2 focus:ring-[#E8A838]/20"
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1E3A5F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#152B47] hover:shadow-md"
          >
            <Send size={16} />
            {t("product.feedback_send")}
          </button>

          <div className="flex items-center gap-3 text-xs text-[#888]">
            <span className="text-[#999]">{t("product.feedback_via")}</span>
            <a href="tel:+380685471611" className="flex items-center gap-1 text-[#1E3A5F] hover:underline">
              <Phone size={12} />
              +380 68 547 16 11
            </a>
            <a href="mailto:box.teonmachinery@gmail.com" className="flex items-center gap-1 text-[#1E3A5F] hover:underline">
              <Mail size={12} />
              Email
            </a>
          </div>
        </div>
      </form>
    </motion.div>
  );
}