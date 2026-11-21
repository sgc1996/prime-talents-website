"use client";

import React, { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/lib/constants";

interface StatItemProps {
  value: string;
  label: string;
  description: string;
}

function StatCard({ value, label, description }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`h-full px-4 py-7 sm:px-6 sm:py-8 lg:px-4 xl:px-6 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 shadow-sm hover:shadow-xl hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center items-center group relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-90 translate-y-2"
      }`}
    >
      {/* Decorative top accent glow on hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Main Metric Value (Single-line whitespace-nowrap with responsive font sizing) */}
      <div className="font-heading font-black text-2xl sm:text-3xl lg:text-[22px] xl:text-[28px] 2xl:text-3xl text-teal-600 dark:text-teal-400 mb-2 tracking-tight whitespace-nowrap group-hover:scale-105 transition-transform duration-300">
        {value}
      </div>

      {/* Metric Label / Title */}
      <h3 className="font-heading font-bold text-base sm:text-lg text-navy-950 dark:text-slate-100 mb-1 leading-snug">
        {label}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function StatsCounter() {
  const metrics = siteConfig.metrics;

  return (
    <section className="py-14 md:py-20 bg-slate-50/70 dark:bg-navy-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-5 xl:gap-8 items-stretch">
          {metrics.map((metric, idx) => (
            <StatCard
              key={idx}
              value={metric.value}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
