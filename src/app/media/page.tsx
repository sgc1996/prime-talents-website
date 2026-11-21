import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Download,
  ExternalLink,
  Mail,
  Calendar,
  FileText,
  ShieldCheck,
  Palette,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Company Updates & Brand Assets | Prime Talents Solutions",
  description:
    "Key updates, service launches, and official brand assets for partners, media, and press use by Prime Talents Solutions (Pvt) Ltd.",
};

const OFFICIAL_ANNOUNCEMENTS = [
  {
    tag: "COMPANY UPDATE",
    date: "November 2026",
    title: "Prime Talents Solutions Launches Recruitment & Workforce Services in Sri Lanka",
    summary:
      "Supporting growing businesses and job seekers with structured talent sourcing, contract staffing, and practical hiring coordination.",
  },
  {
    tag: "SERVICE STANDARD",
    date: "November 2026",
    title: "Introducing Fast Shortlist Turnaround & 90-Day Replacement Guarantee",
    summary:
      "Designed to give hiring teams clearer timelines, pre-screened candidates, and dependable post-placement support.",
  },
  {
    tag: "PLATFORM & ACCESS",
    date: "November 2026",
    title: "Connecting Job Seekers with Verified Opportunities Through Our Job Portal",
    summary:
      "Helping candidates discover genuine openings across key roles while giving employers streamlined access to applicants.",
  },
];

export default function MediaPage() {
  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* 1. Top Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="teal">MEDIA &amp; UPDATES</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Company Updates &amp; Brand Assets
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Key updates, service launches, and official brand assets for partners, media, and press use.
        </p>
      </section>

      {/* 2. Official Announcements (3 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 dark:text-white">
            Official Announcements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFICIAL_ANNOUNCEMENTS.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="teal">{item.tag}</Badge>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-navy-950 dark:text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Official Media Assets & Brand Guidelines (3 Cards) */}
      <section className="bg-slate-50 dark:bg-navy-950/70 py-20 border-y border-slate-200/80 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="teal">BRAND RESOURCES</Badge>
            <h2 className="text-3xl font-bold font-heading text-navy-950 dark:text-white">
              Official Media Assets &amp; Brand Guidelines
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Official logos, company overview notes, and brand materials approved for partner and press use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Company Overview & Boilerplate */}
            <Card className="p-6 space-y-4 bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                  Company Overview &amp; Boilerplate
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Standard company description, core service summary, and official contact details for press or partner mentions.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                >
                  <span>View Company Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>

            {/* Card 2: Logos & Brand Marks */}
            <Card className="p-6 space-y-4 bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                  Logos &amp; Brand Marks
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Primary Prime Talents Solutions logo files and clean visual marks for approved editorial or partner use.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="/images/logo.png"
                  download="PrimeTalents_Logo.png"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Brand Assets</span>
                </a>
              </div>
            </Card>

            {/* Card 3: Brand Usage Guidelines */}
            <Card className="p-6 space-y-4 bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                  Brand Usage Guidelines
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Basic spacing, clear-zone, and color guidelines to keep the Prime Talents Solutions brand consistent.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                >
                  <span>View Brand Guidelines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Bottom Callout Box: Media & Inquiries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-950 text-white border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-2xl">
              Media, Partnership &amp; Press Inquiries
            </h3>
            <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
              Need company details, official information, or a comment from our team? Reach out to us directly.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button variant="accent" size="lg" className="font-bold flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
