"use client";

import { useEffect, useRef, useState } from "react";
import { Factory, Users, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function CountUp({ end, suffix = "", duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

interface CountUpStatsProps {
  lang: string;
  t: (key: string) => string;
}

export function CountUpStats({ lang, t }: CountUpStatsProps) {
  const stats: StatItem[] = [
    { icon: Factory, value: 200, suffix: "+", label: t("stats.machines") },
    { icon: Users, value: 200, suffix: "+", label: t("stats.clients") },
    { icon: Clock, value: 8, suffix: "+", label: t("stats.years") },
  ];

  return (
    <div className="relative overflow-hidden bg-[#1E3A5F]">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff)",
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
          }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E8A838] via-[#E8A838]/60 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative flex items-center gap-5 px-6 py-5 sm:justify-center sm:px-8 sm:py-6"
              >
                {/* Vertical divider between stats on desktop */}
                {idx < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-white/10 sm:block" />
                )}

                {/* Icon container */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:ring-[#E8A838]/40 sm:h-[72px] sm:w-[72px]">
                  <Icon className="h-7 w-7 text-[#E8A838] sm:h-8 sm:w-8" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="text-3xl font-black leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1.5 text-sm font-medium tracking-wide text-white/60 sm:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}