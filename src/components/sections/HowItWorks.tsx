import React from "react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/70 dark:bg-navy-950/70 border-b border-slate-200/80 dark:border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal">Proven Methodology</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white font-heading tracking-tight">
            Our 4-Step Engagement Process
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            From initial role alignment to post-placement warranty, our systematic
            lifecycle guarantees quality, transparency, and speed.
          </p>
        </div>

        {/* 4-Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteConfig.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Counter Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-heading font-black text-3xl text-teal-600 dark:text-teal-400">
                  {step.step}
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-500 flex items-center justify-center text-xs font-bold">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-bold text-xl text-navy-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < siteConfig.processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 dark:text-navy-700">
                  <ArrowRight className="w-6 h-6 text-teal-500/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

