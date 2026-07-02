"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wrench, Users, Image } from "lucide-react";
import serviceImg from "@/assets/service.jpg";
import contactImg from "@/assets/contact-person.jpg";
import galleryImg from "@/assets/hero-factory.jpg";
import { useLanguage } from "@/context/LanguageContext";

export function QuickLinksSection() {
  const { t } = useLanguage();

  const cards = [
    { 
      title: t("quick.service.title"), 
      image: serviceImg, 
      desc: t("quick.service.desc"), 
      href: "/service",
      icon: Wrench
    },
    { 
      title: t("quick.contact.title"), 
      image: contactImg, 
      desc: t("quick.contact.desc"), 
      href: "/contact",
      icon: Users
    },
    { 
      title: t("quick.gallery.title"), 
      image: galleryImg, 
      desc: t("quick.gallery.desc"), 
      href: "/gallery",
      icon: Image
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link 
                  href={card.href} 
                  className="quick-link-card group relative block h-64 sm:h-72 lg:h-80 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Background Image */}
                  <img
                    src={card.image.src}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/50" />
                  
                  {/* Border Accent */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/10 transition-colors duration-300 group-hover:border-[#E8A838]/50" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6 lg:p-8">
                    {/* Icon Badge */}
                    <div className="mb-3 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-[#E8A838] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#1E3A5F]" strokeWidth={2.5} />
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wide text-white">
                      {card.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-white/90 leading-relaxed">
                      {card.desc}
                    </p>
                    
                    {/* CTA Link */}
                    <div className="mt-3 sm:mt-4 flex items-center gap-2 text-sm sm:text-base font-semibold text-[#E8A838] transition-all duration-300 group-hover:gap-3">
                      <span>{t("products.more")}</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
