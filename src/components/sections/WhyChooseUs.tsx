import React from "react";
import Link from "next/link";
import {
  Award,
  BookOpen,
  Smile,
  Target,
  Compass,
  ArrowRight,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

const ICON_MAP = {
  Award: Award,
  BookOpen: BookOpen,
  Smile: Smile,
  Target: Target,
  ShieldCheck: ShieldCheck,
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
            A Practical, Reliable Workforce Partner Built for Real Results
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We operate not as transactional CV forwarders, but as a committed hiring partner
            focused on finding the right people for your business—fast.
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

        {/* Purpose / Vision & Mission Compact Highlight Box */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white border border-teal-500/30 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-800 pb-6">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 font-heading">
                OUR PURPOSE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
                Vision &amp; Mission
              </h3>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors group shrink-0"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision Mini Box - Gold Accent */}
            <div className="p-6 sm:p-7 rounded-2xl bg-navy-900/90 border border-amber-400/30 space-y-3 hover:border-amber-400/60 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-heading">
                    Future Direction
                  </span>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Our Vision
                  </h4>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &ldquo;To be Sri Lanka&rsquo;s most trusted talent acquisition and placement partner—empowering businesses to build high-performing teams while connecting job seekers with reputable organizations for meaningful, long-term career growth.&rdquo;
              </p>
            </div>

            {/* Mission Mini Box - Teal Accent */}
            <div className="p-6 sm:p-7 rounded-2xl bg-navy-900/90 border border-teal-400/30 space-y-3 hover:border-teal-400/60 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-400/15 text-teal-400 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 font-heading">
                    Action &amp; Standard
                  </span>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Our Mission
                  </h4>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &ldquo;To bridge the gap between growing organizations and job-ready talent through ethical, fast-track, and precision-driven recruitment—helping businesses secure pre-screened professionals while guiding candidates toward trusted, well-matched career opportunities.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

