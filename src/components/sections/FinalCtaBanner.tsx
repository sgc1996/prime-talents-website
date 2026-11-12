import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FinalCtaBanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-navy-950 text-white">
      {/* Background Teal Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-navy-800/50 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transform Your Workforce Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight leading-tight text-white max-w-3xl mx-auto">
          Ready to Build a High-Performance Team or Scale Your Career?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you need to fill mission-critical executive roles, establish a compliant
          payroll system, or access premier career opportunities in Sri Lanka, our
          partners are ready to deliver.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/appointment" className="w-full sm:w-auto">
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto font-bold text-base shadow-xl shadow-teal-500/30"
            >
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
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-semibold text-base bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <span>Visit Job Portal</span>
              <ExternalLink className="w-4 h-4 ml-1 text-slate-400" />
            </Button>
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-4">
          Prefer an immediate phone consultation? Call our Colombo desk directly at{" "}
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
            className="text-teal-400 font-semibold hover:underline"
          >
            {siteConfig.contact.phone}
          </a>
        </p>
      </div>
    </section>
  );
}

