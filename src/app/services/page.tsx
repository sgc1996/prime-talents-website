import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  UserCheck,
  Users,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "HR Services & Solutions | Executive Search & Staff Augmentation",
  description:
    "Explore Prime Talents Solutions full suite of workforce capabilities in Sri Lanka: Executive Search (#recruitment), Staff Augmentation (#outsourcing), Corporate Training (#training), and Strategic Consultancy (#consultancy).",
};

export default function ServicesPage() {
  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="teal">End-to-End Workforce Services</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight max-w-3xl mx-auto">
          Tailored Human Capital Solutions for Every Stage of Growth
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From recruiting niche executive talent and building skilled contractor teams
          to corporate training and organizational advisory, we deliver measurable results.
        </p>

        {/* Anchor Quick-Nav Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <a
            href="#recruitment"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Talent Sourcing
          </a>
          <a
            href="#job-portal"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Job Seeker Portal
          </a>
          <a
            href="#outsourcing"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Staff Augmentation
          </a>
          <a
            href="#training"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Corporate Training
          </a>
          <a
            href="#consultancy"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            HR Consultancy
          </a>
        </div>
      </section>

      {/* Anchor 1: Recruitment & Executive Search */}
      <section id="recruitment" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-4 h-4" />
              <span>Talent Sourcing &amp; Recruitment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Precision Talent Sourcing &amp; Fast-Track Hiring
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We help growing businesses across Sri Lanka find and hire the right
              talent—fast. By combining modern sourcing strategies with thorough
              candidate screening, we take the stress out of hiring so you can focus
              on scaling your business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Junior, Mid-Level &amp; Specialist Roles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Pre-Screened &amp; Verified Candidates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Within 72 Hours Shortlist Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Flexible 90-Day Replacement Guarantee</span>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-4">
              <Link href="/appointment">
                <Button variant="accent" className="font-bold">
                  Start Sourcing Talent
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-slate-50 dark:bg-navy-950 p-2">
              <Image
                src="/images/services/recruitment.svg"
                alt="Executive Search Colombo"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anchor 2: Job Portal & Candidate Gateway */}
      <section id="job-portal" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:grid-flow-dense">
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Career Gateway</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Prime Talents Job Portal for Professionals
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We empower ambitious Sri Lankan specialists with direct access to vetted,
              verified positions across Sri Lanka, the Middle East, and remote global
              tech enterprises. Enjoy transparent salary bands, fast application tracking,
              and interview preparation resources.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>USD-Pegged Remote Vacancies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Automated CV Parsing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Confidential Application Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Direct HR Interview Scheduling</span>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={siteConfig.jobPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" className="font-bold">
                  <span>Visit Job Portal</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-1">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-slate-50 dark:bg-navy-950 p-2">
              <Image
                src="/images/services/job-portal.svg"
                alt="Job Seeker Portal"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anchor 3: Staff Augmentation & Contract Staffing */}
      <section id="outsourcing" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Staff Augmentation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Flexible Staff Augmentation &amp; Contract Talent
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Scale your operational and technical teams with pre-screened professionals
              tailored to your project deliverables. We manage candidate sourcing, credential
              verification, and seamless placement so you can accelerate your business objectives.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Rapid Talent Sourcing &amp; Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Specialized Tech &amp; Corporate Roles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Interview-Ready Candidate Shortlists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Flexible Contract Durations</span>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/appointment">
                <Button variant="accent" className="font-bold">
                  Inquire About Staff Augmentation
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-slate-50 dark:bg-navy-950 p-2">
              <Image
                src="/images/services/outsourcing.svg"
                alt="Staff Augmentation Sri Lanka"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anchor 4: Training & Development */}
      <section id="training" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:grid-flow-dense">
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Upskilling &amp; Enablement</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Corporate Training &amp; Executive Coaching
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Equip your leadership and front-line managers with practical tools
              to drive performance, resolve conflict, and navigate modern industrial
              relations under Sri Lankan labor laws.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Executive Emotional Intelligence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Labor Law &amp; Disciplinary Inquiry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>High-Velocity Sales Enablement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Custom On-Site &amp; Hybrid Cohorts</span>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/appointment">
                <Button variant="accent" className="font-bold">
                  Request a Custom Workshop
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-1">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-slate-50 dark:bg-navy-950 p-2">
              <Image
                src="/images/services/training.svg"
                alt="Corporate Training Programs"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anchor 5: HR Consultancy */}
      <section id="consultancy" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge variant="teal">Advisory Practice</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              HR Consultancy &amp; Workforce Architecture
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We guide executive boards, private equity firms, and HR directors
              through restructuring, compensation benchmarking, performance management
              system rollouts, and industrial relations disputes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800">
              <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                HR Due Diligence &amp; Audit
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Review existing employment contracts, leave policies, and statutory
                records to identify hidden legal risks prior to funding or audits.
              </p>
            </Card>

            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800">
              <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                Compensation Benchmarking
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Real-time empirical salary surveys across Colombo tech, apparel,
                banking, and shared services to design competitive wage bands.
              </p>
            </Card>

            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800">
              <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                Industrial Relations &amp; TEWA
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Expert navigation of the Termination of Employment of Workmen Act
                (TEWA), certified dispute mediation, and union negotiations.
              </p>
            </Card>
          </div>

          <div className="pt-4 text-center">
            <Link href="/appointment">
              <Button variant="accent" size="lg" className="font-bold">
                <span>Book an HR Advisory Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

