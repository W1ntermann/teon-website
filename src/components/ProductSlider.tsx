"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductSliderProps {
  photos: string[];
  productName: string;
  className?: string;
}

export function ProductSlider({ photos, productName, className }: ProductSliderProps) {
  const [mainEmblaRef, mainApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [thumbEmblaRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => { mainApi?.scrollPrev(); }, [mainApi]);
  const scrollNext = useCallback(() => { mainApi?.scrollNext(); }, [mainApi]);
  const scrollTo = useCallback((index: number) => { mainApi?.scrollTo(index); }, [mainApi]);

  const onSelect = useCallback(() => {
    if (!mainApi) return;
    const idx = mainApi.selectedScrollSnap();
    setSelectedIndex(idx);
    if (thumbApi) thumbApi.scrollTo(idx);
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
    return () => {
      mainApi.off("select", onSelect);
      mainApi.off("reInit", onSelect);
    };
  }, [mainApi, onSelect]);

  if (!photos.length) return null;

  return (
    <div className={cn("flex flex-col bg-[#e8e8e8]", className)}>
      {/* Main Slider */}
      <div className="relative flex-1 overflow-hidden bg-[#d5d5d5]">
        <div className="h-full overflow-hidden" ref={mainEmblaRef}>
          <div className="flex h-full touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
            {photos.map((photo, index) => (
              <div key={index} className="relative flex-[0_0_100%] min-w-0">
                <div className="relative h-full w-full" style={{ minHeight: "220px" }}>
                  <img
                    src={photo}
                    alt={`${productName} — ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Edge Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-12 bg-gradient-to-r from-black/20 to-transparent md:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] w-12 bg-gradient-to-l from-black/20 to-transparent md:w-16" />

        {photos.length > 1 && (
          <>
            {/* Counter Badge */}
            <div className="absolute right-3 top-3 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm md:right-4 md:top-4 md:px-3.5 md:py-1.5 md:text-sm">
              {selectedIndex + 1} / {photos.length}
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={scrollPrev}
              className="group absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-r-lg bg-black/25 text-white backdrop-blur-sm transition-all hover:bg-[#4C5154]/90 hover:shadow-lg md:h-12 md:w-12"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5 md:size-6" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="group absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-l-lg bg-black/25 text-white backdrop-blur-sm transition-all hover:bg-[#4C5154]/90 hover:shadow-lg md:h-12 md:w-12"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5 md:size-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Strip */}
      {photos.length > 1 && (
        <div className="relative shrink-0 border-t border-[#c0c0c0] bg-[#e0e0e0] px-8 py-2.5 md:px-10 md:py-3">
          <div className="overflow-hidden" ref={thumbEmblaRef}>
            <div className="flex gap-2 md:gap-2.5">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "relative shrink-0 cursor-pointer overflow-hidden rounded border-2 transition-all duration-200",
                    "h-12 w-16 md:h-14 md:w-20",
                    index === selectedIndex
                      ? "border-[#4C5154] opacity-100 ring-2 ring-[#4C5154]/30 shadow-md"
                      : "border-transparent opacity-55 hover:opacity-85 hover:border-white/50"
                  )}
                >
                  <img
                    src={photo}
                    alt={`${productName} — ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}