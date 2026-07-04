"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Maximize2, Play, Camera, Image as ImageIcon, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "production" | "installation" | "certificates" | "videos";

interface GalleryItem {
  id: string;
  type: "photo" | "video";
  category: Exclude<Category, "all" | "videos"> | "certificates";
  src: string;
  thumb: string;
  title: string;
  description?: string;
  span?: "wide" | "tall" | "large";
}

const placeholderItems: GalleryItem[] = [
  {
    id: "1",
    type: "photo",
    category: "production",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=60",
    title: "Виробничий цех",
    description: "Сучасне виробниче обладнання в роботі",
    span: "large",
  },
  {
    id: "2",
    type: "photo",
    category: "production",
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=60",
    title: "Процес диспергування",
    description: "Контроль якості на кожному етапі",
    span: "tall",
  },
  {
    id: "3",
    type: "photo",
    category: "installation",
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=60",
    title: "Монтаж обладнання",
    description: "Професійний монтаж на підприємстві клієнта",
  },
  {
    id: "4",
    type: "photo",
    category: "installation",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=60",
    title: "Пуско-налагодження",
    description: "Налаштування параметрів роботи машини",
    span: "wide",
  },
  {
    id: "5",
    type: "photo",
    category: "production",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=60",
    title: "Готова продукція",
    description: "Фінальний контроль якості",
  },
  {
    id: "6",
    type: "photo",
    category: "certificates",
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=60",
    title: "Сертифікація ISO",
    description: "Міжнародні сертифікати якості",
    span: "tall",
  },
  {
    id: "7",
    type: "photo",
    category: "production",
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=60",
    title: "Лабораторія",
    description: "Тестування зразків у власній лабораторії",
  },
  {
    id: "8",
    type: "video",
    category: "installation",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb: "",
    title: "Відео монтажу",
    description: "Процес монтажу диссольвера KREI",
    span: "wide",
  },
  {
    id: "9",
    type: "photo",
    category: "certificates",
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=60",
    title: "Сертифікат ATEX",
    description: "Вибухозахищене обладнання",
  },
];

const categories: { key: Category; labelKey: string; icon: typeof ImageIcon }[] = [
  { key: "all", labelKey: "gallery.all", icon: ImageIcon },
  { key: "production", labelKey: "gallery.production", icon: Camera },
  { key: "installation", labelKey: "gallery.installation", icon: Maximize2 },
  { key: "certificates", labelKey: "gallery.certificates", icon: FileCheck },
  { key: "videos", labelKey: "gallery.videos", icon: Play },
];

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState<string | null>(null);

  const filtered = activeCategory === "all"
    ? placeholderItems
    : activeCategory === "videos"
      ? placeholderItems.filter((item) => item.type === "video")
      : placeholderItems.filter((item) => item.category === activeCategory);

  const lightboxItems = filtered.filter((item) => item.type === "photo");

  const openLightbox = useCallback((index: number) => {
    const photoIndex = filtered.findIndex(
      (_, i) => i === index && filtered[i].type === "photo"
    );
    if (photoIndex !== -1) setLightboxIndex(photoIndex);
  }, [filtered]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % lightboxItems.length : null
    );
  }, [lightboxItems.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + lightboxItems.length) % lightboxItems.length : null
    );
  }, [lightboxItems.length]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    },
    [goNext, goPrev, closeLightbox]
  );

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
        <div className="relative mx-auto max-w-[1200px] px-4 py-12 sm:py-16 md:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white max-w-3xl leading-tight"
          >
            {t("gallery.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            {t("gallery.description")}
          </motion.p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="sticky top-0 z-30 border-b border-[#e0e0e0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex overflow-x-auto gap-1 py-3 [-webkit-overflow-scrolling:touch] scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const labels: Record<string, string> = {
                all: lang === "uk" ? "Усі" : lang === "pl" ? "Wszystkie" : "All",
                production: lang === "uk" ? "Виробництво" : lang === "pl" ? "Produkcja" : "Production",
                installation: lang === "uk" ? "Монтаж" : lang === "pl" ? "Montaż" : "Installation",
                certificates: lang === "uk" ? "Сертифікати" : lang === "pl" ? "Certyfikaty" : "Certificates",
                videos: lang === "uk" ? "Відео" : lang === "pl" ? "Filmy" : "Videos",
              };
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={cn(
                    "flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2 text-[12px] font-semibold transition-all",
                    activeCategory === cat.key
                      ? "bg-[#1E3A5F] text-white shadow-md"
                      : "bg-[#f0f0f0] text-[#555] hover:bg-[#e5e5e5]"
                  )}
                >
                  <Icon size={14} />
                  {labels[cat.key]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5"
          >
            {filtered.map((item, idx) => {
              const spanClass =
                item.span === "large"
                  ? "col-span-2 row-span-2"
                  : item.span === "wide"
                    ? "col-span-2"
                    : item.span === "tall"
                      ? "row-span-2"
                      : "";

              if (item.type === "video") {
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    className={cn("group relative cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-[#1E3A5F] to-[#0F1F33]", spanClass)}
                    onClick={() => setVideoOpen(videoOpen === item.src ? null : item.src)}
                  >
                    <div className="flex h-full min-h-[160px] items-center justify-center sm:min-h-[200px]">
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                          <Play size={24} className="ml-0.5 text-white" />
                        </div>
                        <span className="text-[11px] font-semibold text-white/70">{item.title}</span>
                      </div>
                    </div>
                    {videoOpen === item.src && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/90 p-4">
                        <div className="relative w-full max-w-2xl">
                          <button
                            onClick={(e) => { e.stopPropagation(); setVideoOpen(null); }}
                            className="absolute -top-8 right-0 text-white/70 hover:text-white"
                          >
                            <X size={18} />
                          </button>
                          <div className="aspect-video w-full">
                            <iframe
                              src={item.src}
                              title={item.title}
                              className="h-full w-full rounded-lg"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  className={cn("group relative cursor-pointer overflow-hidden rounded-xl bg-[#f0f0f0]", spanClass)}
                  onClick={() => openLightbox(idx)}
                >
                  <div className={cn("relative", spanClass ? "h-full" : "aspect-[4/3]")}>
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg">
                        <Maximize2 size={16} className="text-[#1E3A5F]" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
                      <span className="block text-[12px] font-semibold text-white drop-shadow-md">
                        {item.title}
                      </span>
                      {item.description && (
                        <span className="mt-0.5 block text-[10px] text-white/70 drop-shadow-md">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ImageIcon size={48} className="text-[#ccc] mb-4" />
            <p className="text-base text-[#888]">{lang === "uk" ? "Немає матеріалів у цій категорії" : lang === "pl" ? "Brak materiałów w tej kategorii" : "No materials in this category"}</p>
          </div>
        )}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95 sm:max-w-[90vw]"
          onKeyDown={handleKeyDown}
        >
          {lightboxIndex !== null && lightboxItems[lightboxIndex] && (
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white"
              >
                <X size={18} />
              </button>

              {/* Counter */}
              <div className="absolute left-4 top-4 z-20 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-sm">
                {lightboxIndex + 1} / {lightboxItems.length}
              </div>

              {/* Image */}
              <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
                <img
                  src={lightboxItems[lightboxIndex].src}
                  alt={lightboxItems[lightboxIndex].title}
                  className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-8">
                <h3 className="text-sm font-bold text-white">{lightboxItems[lightboxIndex].title}</h3>
                {lightboxItems[lightboxIndex].description && (
                  <p className="mt-0.5 text-[12px] text-white/60">{lightboxItems[lightboxIndex].description}</p>
                )}
              </div>

              {/* Navigation */}
              {lightboxItems.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white sm:left-4"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white sm:right-4"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}