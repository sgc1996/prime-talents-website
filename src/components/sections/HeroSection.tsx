"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-slate-50 dark:bg-navy-950">
      {/* Animated Subtle Gradient Mesh Background */}
      <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-30">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-navy-800/10 dark:bg-teal-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Sri Lanka&apos;s Leading Talent &amp; HR Consultancy</span>
            </div>

            {/* Original Rewritten Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 dark:text-white font-heading tracking-tight leading-[1.12]">
              Looking for Exceptional Talent to Scale Your Vision?
            </h1>

            {/* Outcome-focused Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We bridge ambitious enterprises with vetted executive leaders,
              specialized tech minds, and compliant HR outsourcing across Colombo
              and international markets.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/appointment" className="w-full sm:w-auto">
                <Button variant="accent" size="lg" className="w-full sm:w-auto font-bold text-base shadow-lg shadow-teal-500/25">
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>

              <a
                href={siteConfig.jobPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto font-semibold text-base border-slate-300 dark:border-navy-700">
                  <span>Visit Job Portal</span>
                  <ExternalLink className="w-4 h-4 ml-1 text-slate-500" />
                </Button>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-navy-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>100% Sri Lankan Labour Law Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>72-Hour Candidate Shortlists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>90-Day Placement Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-navy-800 shadow-2xl bg-white dark:bg-navy-900 p-2">
                <Image
                  src="/images/hero-abstract.svg"
                  alt="Prime Talents Solutions Strategic Talent Network Visual"
                  width={600}
                  height={450}
                  priority
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Placements Delivered
                  </p>
                  <p className="text-lg font-bold text-navy-950 dark:text-white font-heading">
                    3,200+ Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

