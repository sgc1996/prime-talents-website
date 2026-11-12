import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Briefcase, CalendarCheck, HelpCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Visual Badge */}
        <div className="relative inline-block">
          <span className="font-heading font-black text-8xl sm:text-9xl text-slate-200 dark:text-navy-800 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold font-heading text-teal-600 dark:text-teal-400">
              Page Not Found
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-navy-950 dark:text-white">
            Looking for Exceptional Talent or a Different Route?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
            The page you requested may have been relocated or updated. Use the
            shortcuts below to navigate to key sections of our portal.
          </p>
        </div>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500/50 hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-navy-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                Return Home
              </p>
              <p className="text-[11px] text-slate-400">Main overview &amp; capabilities</p>
            </div>
          </Link>

          <Link
            href="/services"
            className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500/50 hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-navy-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                Our Services
              </p>
              <p className="text-[11px] text-slate-400">Recruitment, Payroll &amp; PEO</p>
            </div>
          </Link>

          <Link
            href="/appointment"
            className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500/50 hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-navy-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                Book Consultation
              </p>
              <p className="text-[11px] text-slate-400">Schedule with a senior partner</p>
            </div>
          </Link>

          <a
            href={siteConfig.jobPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500/50 hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-navy-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                Job Seeker Portal
              </p>
              <p className="text-[11px] text-slate-400">Browse Sri Lanka career openings</p>
            </div>
          </a>
        </div>

        <div className="pt-2">
          <Link href="/">
            <Button variant="accent" size="md" className="font-bold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back to Homepage</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

