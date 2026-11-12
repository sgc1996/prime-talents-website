import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Download,
  ExternalLink,
  Mail,
  Newspaper,
  Calendar,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Media & Press Kit | News & Official Announcements",
  description:
    "Official press releases, media coverage, brand assets, and press contacts for Prime Talents Solutions Pvt Ltd in Colombo, Sri Lanka.",
};

const PRESS_RELEASES = [
  {
    date: "January 10, 2025",
    title:
      "Prime Talents Solutions Releases Annual Sri Lanka Talent Benchmark Report 2025",
    summary:
      "Empirical analysis reveals widespread shift toward foreign currency-indexed compensation in Colombo's technology and finance sectors amidst expanding global offshore demand.",
    tag: "Industry Report",
    readTime: "4 min read",
  },
  {
    date: "November 18, 2024",
    title:
      "Prime Talents Solutions Expands Global Employer of Record (EOR) Practice to Bridge South Asia and Australia",
    summary:
      "Turnkey staffing infrastructure enables international technology and accounting firms to onboard Sri Lankan professionals within seven business days under full statutory compliance.",
    tag: "Corporate Expansion",
    readTime: "3 min read",
  },
  {
    date: "August 04, 2024",
    title:
      "Prime Talents Career Portal Reaches Milestone of 25,000 Vetted Sri Lankan Professionals",
    summary:
      "The dedicated job gateway continues to connect ambitious local talent with verified executive, technical, and remote positions in leading regional enterprises.",
    tag: "Milestone",
    readTime: "3 min read",
  },
];

export default function MediaPage() {
  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="teal">News &amp; Media Center</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Press Releases &amp; Official Media Kit
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Stay updated with official company announcements, research publications,
          and download brand assets for editorial use.
        </p>
      </section>

      {/* Press Releases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 dark:text-white">
            Official Announcements
          </h2>
        </div>

        <div className="space-y-6">
          {PRESS_RELEASES.map((pr, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <Badge variant="teal">{pr.tag}</Badge>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {pr.date}
                  </span>
                </div>
                <span className="text-xs text-slate-400">{pr.readTime}</span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy-950 dark:text-white mb-2">
                {pr.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-4xl">
                {pr.summary}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Brand Kit & Press Assets */}
      <section className="bg-slate-50 dark:bg-navy-950/70 py-20 border-y border-slate-200/80 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="teal">Brand Resources</Badge>
            <h2 className="text-3xl font-bold font-heading text-navy-950 dark:text-white">
              Official Media Assets &amp; Brand Guidelines
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              High-resolution vector logos, executive headshots, and company boilerplates
              approved for publication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                Company Factsheet &amp; Boilerplate
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Key leadership bios, corporate overview, statutory registration details,
                and accredited milestones.
              </p>
              <a
                href="/images/hero-abstract.svg"
                download="PrimeTalents_Factsheet.svg"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline pt-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF Overview</span>
              </a>
            </Card>

            <Card className="p-6 space-y-4 bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                Logos &amp; Brand Marks
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Vector SVG and PNG formats of Prime Talents Solutions Pvt Ltd
                logos in full color, light, and dark variants.
              </p>
              <a
                href="/images/hero-abstract.svg"
                download="PrimeTalents_BrandPack.svg"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline pt-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Logo Vector Kit</span>
              </a>
            </Card>

            <Card className="p-6 space-y-4 bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Newspaper className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                Executive Portraits
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                High-resolution studio portraits of Managing Director Dinesh Samarasinghe
                and senior advisory partners.
              </p>
              <a
                href="/images/team/avatar-1.svg"
                download="PrimeTalents_ExecutiveHeadshots.svg"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline pt-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Executive Media Pack</span>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Inquiries Contact Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-950 text-white border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-2xl">
              Media &amp; Journalist Inquiries
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Our workforce analysts and legal compliance directors provide expert
              quotes and empirical commentary on Sri Lanka employment trends.
            </p>
          </div>
          <a href={`mailto:media@primetalentssolutions.lk`} className="shrink-0">
            <Button variant="accent" size="lg" className="font-bold flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Contact Press Office</span>
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

