"use client";

import React, { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/lib/constants";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function CounterItem({ value, suffix, label, description }: StatItemProps) {
  const [count, setCount] = useState(value); // Default to full value for SSR fallback!
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start animation only after client mounts and becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = value / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 shadow-sm hover:shadow-lg hover:border-teal-500/40 transition-all duration-300 text-center flex flex-col justify-center items-center"
    >
      <div className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-navy-950 dark:text-white mb-2 tracking-tight">
        <span className="text-teal-600 dark:text-teal-400">
          {new Intl.NumberFormat("en-US").format(count)}
        </span>
        <span className="text-navy-900 dark:text-white">{suffix}</span>
      </div>
      <h3 className="font-heading font-bold text-base sm:text-lg text-navy-900 dark:text-slate-100 mb-1">
        {label}
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export function StatsCounter() {
  const { clients, placements, candidates, retention } = siteConfig.metrics;

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 dark:bg-navy-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <CounterItem
            value={clients.value}
            suffix={clients.suffix}
            label={clients.label}
            description={clients.description}
          />
          <CounterItem
            value={placements.value}
            suffix={placements.suffix}
            label={placements.label}
            description={placements.description}
          />
          <CounterItem
            value={candidates.value}
            suffix={candidates.suffix}
            label={candidates.label}
            description={candidates.description}
          />
          <CounterItem
            value={retention.value}
            suffix={retention.suffix}
            label={retention.label}
            description={retention.description}
          />
        </div>
      </div>
    </section>
  );
}

