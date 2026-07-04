"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Camera, Image as ImageIcon, ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";

interface MediaItem {
  type: "photo" | "video";
  src: string;
  title: string;
}

interface RealMediaGalleryProps {
  productName: string;
}

export function RealMediaGallery({ productName }: RealMediaGalleryProps) {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const mediaItems: MediaItem[] = [
    { type: "photo", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", title: `${productName} — виробничий майданчик` },
    { type: "photo", src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80", title: `${productName} — процес роботи` },
    { type: "photo", src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", title: `${productName} — монтаж` },
    { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: `${productName} — відео роботи` },
  ];

  const photoItems = mediaItems.filter((item) => item.type === "photo");

  const openLightbox = useCallback((idx: number) => {
    const photoIdx = mediaItems.slice(0, idx + 1).filter((item) => item.type === "photo").length - 1;
    setLightboxIndex(photoIdx >= 0 ? photoIdx : null);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photoItems.length : null));
  }, [photoItems.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photoItems.length) % photoItems.length : null));
  }, [photoItems.length]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    },
    [goNext, goPrev, closeLightbox]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
    >
      <div className="rounded-2xl border border-[#e0e0e0] bg-white p-5 sm:p-6">
        <div className="mb-5">
          <h3 className="flex items-center gap-2 text-lg font-bold text-[#1E3A5F]">
            <span className="h-px w-8 bg-[#1E3A5F]/40" />
            {t("product.media_title")}
          </h3>
          <p className="mt-2 text-sm text-[#666]">{t("product.media_desc")}</p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {mediaItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-[#f0f0f0]"
              onClick={() => {
                if (item.type === "video") {
                  setActiveVideo(activeVideo === item.src ? null : item.src);
                } else {
                  openLightbox(idx);
                }
              }}
            >
              {item.type === "photo" ? (
                <>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <Maximize2 size={14} className="text-[#1E3A5F]" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative h-full w-full bg-gradient-to-br from-[#1E3A5F] to-[#0F1F33]">
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                      <Play size={20} className="ml-0.5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-[10px] font-semibold text-white/80">{t("product.media_video_title")}</span>
                  </div>
                </div>
              )}

              {/* Hover title */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-2 transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-[10px] font-medium text-white line-clamp-1">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Player (when active) */}
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 overflow-hidden rounded-xl"
          >
            <div className="aspect-video w-full">
              <iframe
                src={activeVideo}
                title="Video player"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}

        {/* Request more media CTA */}
        <div className="mt-5 rounded-xl bg-gradient-to-r from-[#1E3A5F]/5 to-[#E8A838]/5 p-4">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2">
              <Camera size={18} className="text-[#E8A838]" />
              <div>
                <p className="text-sm font-semibold text-[#1E3A5F]">{t("product.media_request")}</p>
                <p className="text-xs text-[#666]">{t("product.media_request_text")}</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#1E3A5F] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#152B47]"
            >
              {t("product.media_request")}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95 sm:max-w-[90vw]"
          onKeyDown={handleKeyDown}
        >
          {lightboxIndex !== null && photoItems[lightboxIndex] && (
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              <button
                onClick={closeLightbox}
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="absolute left-4 top-4 z-20 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-sm">
                {lightboxIndex + 1} / {photoItems.length}
              </div>

              <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
                <img
                  src={photoItems[lightboxIndex].src}
                  alt={photoItems[lightboxIndex].title}
                  className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-8">
                <h3 className="text-sm font-bold text-white">{photoItems[lightboxIndex].title}</h3>
              </div>

              {photoItems.length > 1 && (
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
    </motion.div>
  );
}
