"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  source?: string;
}

export function ConsultationModal({ isOpen, onClose, productName, source }: ConsultationModalProps) {
  const { t } = useLanguage();
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPhone("");
      setSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    // Here you would typically send data to your backend
    // including the source parameter for tracking
    console.log("Consultation request:", { phone, productName, source });
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#999] transition-colors hover:bg-[#f0f0f0] hover:text-[#333]"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center py-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F]">{t("product.feedback_success")}</h3>
                <p className="mt-1 text-sm text-[#666]">{t("product.feedback_success_text")}</p>
              </div>
            ) : (
              <>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A5F]/10">
                    <Phone size={18} className="text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1E3A5F] sm:text-lg">{t("product.feedback_title")}</h3>
                    {productName && (
                      <p className="text-xs text-[#888]">{productName}</p>
                    )}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#555]">
                      {t("product.feedback_phone")}
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
                        <Phone size={16} />
                      </div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+380 __ ___ __ __"
                        className="w-full rounded-xl border border-[#d0d0d0] py-3 pl-10 pr-4 text-sm text-[#333] outline-none transition-all placeholder:text-[#bbb] focus:border-[#E8A838] focus:ring-2 focus:ring-[#E8A838]/20"
                        autoFocus
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1E3A5F] py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#152B47] hover:shadow-md active:scale-[0.98]"
                  >
                    <Send size={16} />
                    {t("product.feedback_send")}
                  </button>

                  <div className="pt-2 text-center text-xs text-[#999]">
                    {t("product.feedback_via")}{" "}
                    <a href="tel:+380685471611" className="font-semibold text-[#1E3A5F] hover:underline">
                      +380 68 547 16 11
                    </a>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}