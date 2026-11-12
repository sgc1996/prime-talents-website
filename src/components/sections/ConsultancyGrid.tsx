import React from "react";
import Link from "next/link";
import {
  Compass,
  UserSearch,
  TrendingUp,
  HeartHandshake,
  Globe,
  Sparkles,
  ShieldCheck,
  Scale,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

const ICON_MAP = {
  Compass: Compass,
  UserSearch: UserSearch,
  TrendingUp: TrendingUp,
  HeartHandshake: HeartHandshake,
  Globe: Globe,
  Sparkles: Sparkles,
  ShieldAlert: ShieldCheck,
  Scale: Scale,
};

export function ConsultancyGrid() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/70 dark:bg-navy-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal">Strategic Advisory</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white font-heading tracking-tight">
            Specialized HR Consultancy
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Targeted advisory practices engineered to accelerate business performance,
            mitigate employment risks, and build resilient leadership teams.
          </p>
        </div>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.consultancyCards.map((card, idx) => {
            const IconComponent =
              ICON_MAP[card.icon as keyof typeof ICON_MAP] || Compass;
            return (
              <Card
                key={idx}
                className="group p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm hover:shadow-xl hover:border-teal-500/40"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-200/60 dark:border-navy-700 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-navy-800/80">
                  <p className="text-xs font-semibold text-teal-700 dark:text-teal-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    <span>{card.outcome}</span>
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Action Link to Full Consultation */}
        <div className="text-center pt-4">
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors group"
          >
            <span>Discuss your specific workforce challenge with a senior partner</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

