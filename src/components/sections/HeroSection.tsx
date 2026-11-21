"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
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
              <span>PRACTICAL RECRUITMENT &amp; TALENT PARTNER IN SRI LANKA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 dark:text-white font-heading tracking-tight leading-[1.12]">
              Hire Reliable Talent in Sri Lanka Faster
            </h1>

            {/* Outcome-focused Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We help growing businesses and international teams source, vet, and onboard skilled Sri Lankan talent—for permanent roles, contract projects, and remote teams.
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

            {/* Bottom Trust Strip */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-navy-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>Verified Local Talent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>Within 72-Hour Shortlists</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>90-Day Replacement Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Top-Right Floating Card: End-to-End Support */}
              <div className="absolute -top-5 -right-3 sm:-right-6 bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 rounded-2xl p-3 sm:p-3.5 shadow-xl hidden sm:flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-950 dark:text-white font-heading leading-tight">
                    End-to-End Support
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Sourcing to smooth onboarding
                  </p>
                </div>
              </div>

              {/* Main Visual Image Card */}
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

              {/* Bottom-Left Floating Card: 90-Day Guarantee */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 rounded-2xl p-3 sm:p-3.5 shadow-xl hidden sm:flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-950 dark:text-white font-heading leading-tight">
                    90-Day Guarantee
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Replacement protection included
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
