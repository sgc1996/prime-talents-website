import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Target,
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
  title: "About Us | Practical Recruitment & Talent Solutions Sri Lanka",
  description:
    "Learn about Prime Talents Solutions (Pvt) Ltd, our mission, core values, and dedicated team providing practical recruitment and workforce solutions across Sri Lanka.",
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

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-navy-950 p-2">
              <Image
                src="/images/hero-abstract.svg"
                alt="Prime Talents Solutions Workforce Network"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
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
          {TEAM_PILLARS.map((member, idx) => (
            <Card
              key={idx}
              className="p-8 text-center space-y-4 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 hover:shadow-xl hover:border-teal-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-teal-500 shadow-md bg-teal-50 dark:bg-navy-800 p-3 flex items-center justify-center">
                <Image
                  src={member.avatar}
                  alt={member.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
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
          ))}
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
