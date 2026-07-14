"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ProductData } from "@/translations/productData";

interface ProductPanelProps {
  products: ProductData[];
}

export function ProductPanel({ products }: ProductPanelProps) {
  return (
    <>
      {/* Desktop: grid below hero */}
      <div className="hidden md:block w-full bg-[rgba(30,58,95,0.82)]">
        <div className="grid grid-cols-4 auto-rows-fr w-full">
          {products.map((product, idx) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={cn(
                "group flex flex-col bg-[rgba(30,58,95,0.82)] p-0 no-underline hover:bg-[rgba(30,58,95,0.92)] transition-all duration-200 h-full w-full",
                idx < 3 && "border-r border-white/10"
              )}
            >
              {/* Text content — above photo */}
              <div className="flex flex-col items-center gap-0.5 px-5 pt-4 pb-2.5 text-center">
                <div className="font-bold tracking-widest text-white/50 text-[9px] uppercase">
                  {product.category}
                </div>
                <div className="font-bold leading-tight text-white text-[13px] line-clamp-2">
                  {product.name.replace("TEON ", "")}
                </div>
              </div>
              {/* Product photo — full product visible */}
              <div className="relative w-full aspect-[16/9] bg-[#152B47] overflow-hidden">
                <img
                  src={product.photos[0]}
                  alt={product.name}
                  className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden bg-[#1E3A5F]">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -space-x-3 px-4 py-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group snap-start shrink-0 w-[240px] first:pl-0 last:pr-0 px-3"
            >
              <div className="flex flex-col overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98]">
                {/* Text content — above photo */}
                <div className="flex flex-col items-center gap-0.5 px-4 pt-3 pb-2 text-center">
                  <div className="font-bold tracking-widest text-[#E8A838]/70 text-[9px] uppercase">
                    {product.category}
                  </div>
                  <div className="font-bold leading-tight text-white text-[13px] line-clamp-2">
                    {product.name.replace("TEON ", "")}
                  </div>
                </div>
                {/* Product photo — full product visible */}
                <div className="relative w-full aspect-[16/9] bg-[#152B47] overflow-hidden">
                  <img
                    src={product.photos[0]}
                    alt={product.name}
                    className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}