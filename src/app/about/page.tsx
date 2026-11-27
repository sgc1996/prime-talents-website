import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  Target,
  Compass,
  Award,
  Heart,
  ArrowRight,
  UserCheck,
  Briefcase,
  Search,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us | Leading Recruitment Agency in Sri Lanka",
  description:
    "Discover Prime Talents Solutions (Pvt) Ltd - a trusted recruitment agency and workforce consultancy in Sri Lanka delivering verified talent across customer care, recovery, apparel, insurance, HR, IT, and corporate sectors.",
  keywords: [
    "Recruitment agency in Sri Lanka",
    "About Prime Talents Solutions",
    "HR consultancy Sri Lanka",
    "Workforce solutions Sri Lanka",
    "Talent acquisition agency Sri Lanka",
    "Prime Talents Solutions Pvt Ltd",
  ],
  openGraph: {
    title: "About Us | Leading Recruitment Agency in Sri Lanka",
    description:
      "Learn about Prime Talents Solutions (Pvt) Ltd, our mission, core values, and team providing reliable recruitment and workforce solutions across Sri Lanka.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
};

const TEAM_PILLARS = [
  {
    title: "Talent Sourcing & Screening",
    role: "Candidate Discovery & Vetting",
    desc: "Identifying active and passive candidates across key roles with structured initial screening, skill checks, and background verification.",
    avatar: "/images/team/avatar-1.svg",
    icon: Search,
  },
  {
    title: "Client & Hiring Coordination",
    role: "Account & Engagement Support",
    desc: "Aligning on role requirements, managing interview schedules, and ensuring smooth offer communication with zero back-and-forth friction.",
    avatar: "/images/team/avatar-2.svg",
    icon: Briefcase,
  },
  {
    title: "Candidate Portal & Career Support",
    role: "Job Seeker Access & Advisory",
    desc: "Helping job seekers connect with verified openings and providing clear, respectful updates and guidance throughout their career search.",
    avatar: "/images/team/avatar-3.svg",
    icon: UserCheck,
  },
];

const CORE_VALUES = [
  {
    title: "Clear & Honest Process",
    desc: "No inflated claims or hidden steps—just straightforward timelines, realistic expectations, and transparent communication.",
    icon: ShieldCheck,
  },
  {
    title: "Practical Role Fit",
    desc: "We look beyond keywords on a CV to match candidates with actual skills, work ethic, and team needs.",
    icon: Target,
  },
  {
    title: "Respect for People & Time",
    desc: "Whether you are a busy hiring manager or a candidate waiting on feedback, we value timely updates and respectful coordination.",
    icon: Heart,
  },
  {
    title: "Accountable Delivery",
    desc: "From Within 72 Hours initial shortlist speed to our 90-Day Replacement Guarantee, we stand behind how we work.",
    icon: Award,
  },
];

const FOUNDATION_STAGES = [
  {
    stage: "Foundation",
    title: "Prime Talents Solutions",
    desc: "Established in Sri Lanka to offer practical, accessible recruitment and workforce support for growing enterprises.",
  },
  {
    stage: "Service Design",
    title: "Employers & Job Seekers",
    desc: "Structured around both B2B hiring needs and candidate job-search access, bridging ambition with genuine opportunity.",
  },
  {
    stage: "Speed & Quality",
    title: "72-Hour & 90-Day Standards",
    desc: "Built with fast shortlist momentum and a reliable 90-day replacement guarantee for total hiring confidence.",
  },
  {
    stage: "Ongoing Growth",
    title: "Job Portal & Expansion",
    desc: "Continuing to expand verified job listings and reliable staffing support across Colombo and island-wide Sri Lanka.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* 1. Top Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="teal">ABOUT PRIME TALENTS SOLUTIONS</Badge>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
            Connecting Businesses with Reliable Talent Across Sri Lanka
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A practical recruitment and workforce partner helping companies hire skilled talent faster—while giving job seekers clear access to verified career opportunities.
          </p>
        </div>
      </section>

      {/* 2. Story / Overview Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold font-heading text-navy-950 dark:text-white">
              Built on Practical Execution and Honest Hiring
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Prime Talents Solutions was started with a straightforward goal: make hiring in Sri Lanka simpler, faster, and more dependable for growing businesses while helping job seekers find genuine roles without unnecessary friction.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Instead of sending endless, unfiltered CVs or overpromising results, we focus on clear role alignment, structured screening, and responsive communication—supporting both full-time hiring and contract staffing needs.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link href="/appointment">
                <Button variant="accent" className="font-bold">
                  Work With Our Team
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary">Explore Services</Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
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
      </section>

      {/* 2.5 Our Vision & Our Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Vision Card - Gold Accent */}
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-amber-500/5 via-white to-amber-500/10 dark:from-navy-900 dark:via-navy-900/95 dark:to-amber-950/25 border-2 border-amber-400/40 dark:border-amber-500/30 shadow-xl space-y-6 group hover:border-amber-500/70 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-heading">
                    Future Direction
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 dark:text-white">
                    Our Vision
                  </h3>
                </div>
              </div>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                &ldquo;To be Sri Lanka&rsquo;s most trusted talent acquisition and placement partner—empowering businesses to build high-performing teams while connecting job seekers with reputable organizations for meaningful, long-term career growth.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-amber-400/20 dark:border-amber-500/20 flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Empowering growth &amp; sustainable talent partnerships</span>
            </div>
          </div>

          {/* Mission Card - Teal Accent */}
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-teal-500/5 via-white to-teal-500/10 dark:from-navy-900 dark:via-navy-900/95 dark:to-teal-950/25 border-2 border-teal-500/40 dark:border-teal-500/30 shadow-xl space-y-6 group hover:border-teal-500/70 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/15 dark:bg-teal-400/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold shadow-sm group-hover:scale-105 group-hover:-rotate-3 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 font-heading">
                    Our Purpose &amp; Action
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 dark:text-white">
                    Our Mission
                  </h3>
                </div>
              </div>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                &ldquo;To bridge the gap between growing organizations and job-ready talent through ethical, fast-track, and precision-driven recruitment—helping businesses secure pre-screened professionals while guiding candidates toward trusted, well-matched career opportunities.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-teal-500/20 dark:border-teal-500/20 flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-300">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span>Precision-driven, ethical &amp; speed-aligned hiring</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Guiding Values */}
      <section className="bg-white dark:bg-navy-900 py-20 border-y border-slate-200/80 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="teal">WHAT DRIVES US</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Our Guiding Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <Card
                  key={idx}
                  className="p-6 space-y-4 hover:-translate-y-1 transition-transform border-slate-200 dark:border-navy-800"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Team / Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="teal">OUR TEAM</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
            Focused Specialists Behind Every Search
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            A hands-on recruitment and candidate coordination team dedicated to matching the right people with the right opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_PILLARS.map((member, idx) => {
            const Icon = member.icon;
            return (
              <Card
                key={idx}
                className="p-8 text-center space-y-4 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 hover:shadow-xl hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-teal-500/10 dark:bg-teal-500/15 border-2 border-teal-500 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-md">
                  <Icon className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
                    {member.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-navy-800">
                  {member.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 5. Our Journey / Foundation */}
      <section className="bg-slate-50 dark:bg-navy-950/70 py-20 border-t border-slate-200/80 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="teal">OUR FOUNDATION</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Built Step by Step for Real Hiring Needs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDATION_STAGES.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs space-y-3 hover:shadow-lg hover:border-teal-500/40 transition-all duration-300"
              >
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
                  {m.stage}
                </span>
                <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Dark CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-950 text-white border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl">
              Ready to explore a workforce partnership?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Whether you are filling open roles or looking for your next career move, connect with our team today.
            </p>
          </div>
          <Link href="/appointment" className="shrink-0">
            <Button variant="accent" size="lg" className="font-bold">
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
