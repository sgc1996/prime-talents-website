import React from "react";
import {
  Award,
  BookOpen,
  Smile,
  Target,
  Users2,
  Handshake,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

const ICON_MAP = {
  Award: Award,
  BookOpen: BookOpen,
  Smile: Smile,
  Target: Target,
  Users2: Users2,
  Handshake: Handshake,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-navy-900 border-b border-slate-200/80 dark:border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal">Why Prime Talents</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white font-heading tracking-tight">
            The Advantage of a Strategic Workforce Partner
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We operate not as transactional CV brokers, but as long-term talent
            architects invested in your enterprise success.
          </p>
        </div>

        {/* 6-Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.whyChooseUs.map((item, idx) => {
            const IconComp = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Award;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50/70 dark:bg-navy-950/70 border border-slate-200/70 dark:border-navy-800 hover:border-teal-500/40 hover:bg-white dark:hover:bg-navy-900 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-navy-900 dark:bg-teal-500 text-white dark:text-navy-950 flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

