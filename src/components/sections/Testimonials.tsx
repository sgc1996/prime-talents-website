"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const TESTIMONIALS = [
  {
    name: "Sunil Senanayake",
    title: "Chief Technology Officer",
    company: "Apex Cloud Innovations (Colombo & Singapore)",
    quote:
      "When we scaled our engineering center in Colombo to support our Australian expansion, Prime Talents Solutions delivered our complete lead architecture and DevOps team within four weeks. Their candidates possessed not only deep cloud literacy but an exceptional problem-solving mindset.",
    avatar: "/images/team/avatar-1.svg",
    rating: 5,
    highlight: "Filled 14 Senior Tech Roles in 30 Days",
  },
  {
    name: "Dilrukshi Perera",
    title: "Head of Human Resources",
    company: "Heritage Logistics & Ports Conglomerate",
    quote:
      "Managing statutory compliance, EPF/ETF returns, and APIT withholding across 400+ contractors was our single biggest administrative hurdle. Migrating to Prime Talents' managed payroll eliminated payroll errors entirely and gave our executive board absolute peace of mind during Ministry audits.",
    avatar: "/images/team/avatar-2.svg",
    rating: 5,
    highlight: "100% Audit-Proof Payroll Outsourcing",
  },
  {
    name: "Farhan Mohideen",
    title: "Managing Director",
    company: "Ceylon Horizon Apparel Group",
    quote:
      "Unlike traditional recruitment agencies that bombard you with irrelevant CVs, Prime Talents' consultants take the time to understand our manufacturing culture and operational KPIs. Every candidate we hired through them over the past three years is still with the company.",
    avatar: "/images/team/avatar-3.svg",
    rating: 5,
    highlight: "100% 12-Month Executive Retention",
  },
];

export function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-navy-900 border-b border-slate-200/80 dark:border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal">Proven Client Impact</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white font-heading tracking-tight">
            Trusted by Leaders Across Key Sectors
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Read how we have partnered with Sri Lanka&apos;s leading tech,
            financial, and manufacturing leaders to solve mission-critical workforce challenges.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-50 dark:bg-navy-950 border border-slate-200/80 dark:border-navy-800 shadow-xl transition-all duration-300 relative">
            <Quote className="w-12 h-12 text-teal-500/20 absolute top-8 right-8 pointer-events-none" />

            <div className="space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-teal-700 dark:text-teal-400 px-2 py-0.5 rounded-full bg-teal-50 dark:bg-navy-800 border border-teal-200 dark:border-navy-700">
                  {current.highlight}
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-lg sm:text-xl md:text-2xl text-navy-950 dark:text-white font-medium leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80 dark:border-navy-800">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-teal-500 shrink-0">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                    {current.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {current.title} •{" "}
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">
                      {current.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 mt-6">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIdx
                      ? "w-8 bg-teal-500"
                      : "w-2.5 bg-slate-300 dark:bg-navy-700 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-3 rounded-xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

