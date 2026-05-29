"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductSliderProps {
  photos: string[];
  productName: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide";
}

export function ProductSlider({
  photos,
  productName,
  className,
  aspectRatio = "square",
}: ProductSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    duration: 25,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, scrollPrev, scrollNext]);

  // Click outside lightbox to close
  const handleLightboxBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setLightboxOpen(false);
  };

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/10]",
  };

  if (!photos.length) return null;

  return (
    <>
      {/* Main Slider */}
      <div
        className={cn(
          "group/slider relative overflow-hidden bg-[#e8e8e8]",
          aspectClasses[aspectRatio] || aspectClasses.square,
          className
        )}
      >
        <div className="h-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-0"
              >
                {/* Skeleton placeholder */}
                {!loaded[index] && (
                  <div className="absolute inset-0 animate-pulse bg-[#d5d5d5]" />
                )}
                <img
                  src={photo}
                  alt={`${productName} — ${index + 1}`}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                    loaded[index] ? "opacity-100" : "opacity-0"
                  )}
                  loading={index === 0 ? "eager" : "lazy"}
                  onLoad={() => setLoaded((prev) => ({ ...prev, [index]: true }))}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows — subtle, appear on hover */}
        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/slider:opacity-100 hover:bg-white/40 hover:shadow-lg md:h-11 md:w-11"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="md:size-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/slider:opacity-100 hover:bg-white/40 hover:shadow-lg md:h-11 md:w-11"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="md:size-5" />
            </button>
          </>
        )}

        {/* Enlarge button */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/slider:opacity-100 hover:bg-black/50 md:h-9 md:w-9"
          aria-label="View fullscreen"
        >
          <Maximize2 size={14} className="md:size-[15px]" />
        </button>

        {/* Counter badge */}
        {photos.length > 1 && (
          <div className="absolute bottom-3 left-3 z-10 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm md:bottom-4 md:left-4 md:px-3.5 md:py-1.5 md:text-xs">
            {selectedIndex + 1} / {photos.length}
          </div>
        )}
      </div>

      {/* Dot Pagination */}
      {photos.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-1.5 md:mt-4">
          {photos.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={cn(
                "relative h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "w-6 bg-[#1E3A5F]"
                  : "w-2 bg-[#c0c0c0] hover:bg-[#999]"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          onClick={handleLightboxBackdrop}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:top-6"
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          {/* Image */}
          <div className="relative flex h-full w-full items-center justify-center p-8 sm:p-12 md:p-16 lg:p-20">
            <img
              src={photos[selectedIndex]}
              alt={`${productName} — ${selectedIndex + 1}`}
              className="max-h-full max-w-full rounded-sm object-contain shadow-2xl"
            />
          </div>

          {/* Lightbox Nav */}
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={scrollPrev}
                className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/25 md:left-6 md:h-14 md:w-14"
                aria-label="Previous"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/25 md:right-6 md:h-14 md:w-14"
                aria-label="Next"
              >
                <ChevronRight size={26} />
              </button>

              {/* Lightbox counter */}
              <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                {selectedIndex + 1} / {photos.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}