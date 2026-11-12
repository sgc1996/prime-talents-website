import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Target,
  Award,
  Heart,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us | Sri Lanka's Trusted Talent & HR Consultancy",
  description:
    "Learn about Prime Talents Solutions Pvt Ltd, our journey in Colombo, our leadership, core values, and accredited workforce solutions.",
};

const LEADERSHIP_TEAM = [
  {
    name: "Dinesh Samarasinghe",
    role: "Managing Director & Head of Executive Search",
    bio: "Over 18 years leading talent acquisition across South Asia, advising Tier-1 conglomerates, apparel export leaders, and global software engineering hubs.",
    avatar: "/images/team/avatar-1.svg",
    credentials: "MBA (PIM-SJP), SHRM-SCP",
  },
  {
    name: "Kavinda Wickramasinghe",
    role: "Director of Payroll & Statutory Compliance",
    bio: "Former corporate tax and labor law compliance lead. Specializes in Department of Labour audits, EPF/ETF administration, and APIT restructuring.",
    avatar: "/images/team/avatar-2.svg",
    credentials: "FCA (CA Sri Lanka), ACMA (CIMA UK), LL.B",
  },
  {
    name: "Dr. Anoma Jayasuriya",
    role: "Principal Workforce Strategist & Leadership Coach",
    bio: "Chartered organizational psychologist helping multinational firms establish high-performing offshore delivery centers and executive development pipelines.",
    avatar: "/images/team/avatar-3.svg",
    credentials: "Ph.D. Organizational Behavior, CIPD Fellow",
  },
];

const CORE_VALUES = [
  {
    title: "Uncompromising Integrity",
    desc: "We practice full transparency in candidate assessments, employer SLAs, and statutory payroll remittances without shortcuts.",
    icon: ShieldCheck,
  },
  {
    title: "Outcome-Driven Focus",
    desc: "We measure success by long-term retention and quantifiable client value, not merely the volume of submitted resumes.",
    icon: Target,
  },
  {
    title: "Empathetic Human Centricity",
    desc: "Behind every hiring brief and resume is an ambitious individual and family. We treat every career journey with dignity and care.",
    icon: Heart,
  },
  {
    title: "Domain Mastery & Rigor",
    desc: "Our search consultants specialize strictly in specific industry verticals, bringing real technical and market acumen to every evaluation.",
    icon: Award,
  },
];

const MILESTONES = [
  {
    year: "2016",
    title: "Inception in Colombo",
    desc: "Founded as a boutique executive search firm serving Colombo's emerging software and financial technology clusters.",
  },
  {
    year: "2019",
    title: "Launch of Managed Payroll Desk",
    desc: "Expanded into turnkey statutory payroll and labour compliance, servicing over 40 corporate entities.",
  },
  {
    year: "2021",
    title: "Global PEO & EOR Capabilities",
    desc: "Established Employer of Record infrastructure allowing international enterprises to hire Sri Lankan engineering talent compliantly.",
  },
  {
    year: "2024",
    title: "Prime Talents Digital Career Gateway",
    desc: "Launched our centralized job portal connecting 25,000+ vetted candidates directly with verified opportunities.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="teal">About Prime Talents Solutions</Badge>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
            Connecting Ambition with Opportunity Across Sri Lanka
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Headquartered in the heart of Colombo, we have earned our reputation as
            one of Sri Lanka&apos;s most dependable HR consultancies—helping
            enterprises build resilient workforces and guiding professionals to
            rewarding careers.
          </p>
        </div>
      </section>

      {/* Story & Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-bold font-heading text-navy-950 dark:text-white">
              Built on Ethical Principles and Local Market Mastery
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Prime Talents Solutions was founded on a simple observation:
              Sri Lanka possesses world-class talent, yet organizations often struggle
              to source candidates who fit their technical standards and cultural DNA.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We replaced obsolete CV agency practices with an evidence-based
              consultative framework. Today, our multidisciplinary team of recruitment
              headhunters, chartered accountants, and labor law advisors supports
              over 150 enterprise clients spanning technology, banking, logistics,
              apparel manufacturing, and healthcare.
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
                alt="Prime Talents Solutions Colombo Headquarters"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white dark:bg-navy-900 py-20 border-y border-slate-200/80 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="teal">What Drives Us</Badge>
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

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="teal">Leadership</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
            Meet Our Senior Advisory Partners
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Decades of combined corporate governance, cross-border recruitment, and
            Sri Lankan labor compliance expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <Card
              key={idx}
              className="p-8 text-center space-y-4 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900"
            >
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-teal-500 shadow-md">
                <Image
                  src={leader.avatar}
                  alt={leader.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
                  {leader.name}
                </h3>
                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mt-1">
                  {leader.role}
                </p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                  {leader.credentials}
                </p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-navy-800">
                {leader.bio}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="bg-slate-50 dark:bg-navy-950/70 py-20 border-t border-slate-200/80 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="teal">Our Journey</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Milestones of Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-xs space-y-3"
              >
                <span className="font-heading font-black text-2xl text-teal-600 dark:text-teal-400">
                  {m.year}
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

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-950 text-white border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl">
              Ready to explore a workforce partnership?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Schedule a discovery session with our Colombo practice heads to discuss
              your headcount goals or payroll compliance.
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

