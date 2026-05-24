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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);
  const scrollTo = useCallback((index: number) => { if (emblaApi) emblaApi.scrollTo(index); }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!photos.length) return null;

  return (
    <div className={cn("relative overflow-hidden bg-[#e8e8e8]", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0"
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={photo}
                  alt={`${productName} - ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#4C5154] shadow-md transition-all hover:bg-white hover:shadow-lg sm:h-10 sm:w-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} className="sm:size-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#4C5154] shadow-md transition-all hover:bg-white hover:shadow-lg sm:h-10 sm:w-10"
            aria-label="Next slide"
          >
            <ChevronRight size={18} className="sm:size-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 w-2 rounded-full border border-white/60 transition-all",
                  index === selectedIndex
                    ? "bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)]"
                    : "bg-white/40 hover:bg-white/70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}