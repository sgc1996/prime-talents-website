import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  UserCheck,
  Users,
  GraduationCap,
  Calculator,
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
  title: "HR Services & Solutions | Executive Search, Payroll, Outsourcing",
  description:
    "Explore Prime Talents Solutions full suite of workforce capabilities in Sri Lanka: Executive Search (#recruitment), HR Outsourcing (#outsourcing), Training (#training), Payroll & EPF/ETF (#payroll), and Consultancy (#consultancy).",
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
          From recruiting niche executive talent and managing entire contractor
          payrolls to building corporate training academies, we deliver measurable results.
        </p>

        {/* Anchor Quick-Nav Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <a
            href="#recruitment"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Executive Search
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
            HR Outsourcing (HRO/PEO)
          </a>
          <a
            href="#training"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Corporate Training
          </a>
          <a
            href="#payroll"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Payroll &amp; EPF/ETF
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
              <span>Executive Search &amp; Headhunting</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Targeted Recruitment for Mission-Critical Leadership
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              When a bad hire can jeopardize organizational momentum, relying on
              passive job boards is inadequate. Our executive headhunting team
              engages discreetly with established industry leaders, assessing
              cultural fit, strategic capability, and retention longevity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>C-Suite, VP &amp; Director Levels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Specialized Tech Architects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>72-Hour Candidate Shortlists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>90-Day Placement Warranty</span>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-4">
              <Link href="/appointment">
                <Button variant="accent" className="font-bold">
                  Request Headhunting Brief
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

      {/* Anchor 3: HR Outsourcing & PEO */}
      <section id="outsourcing" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Staff Augmentation &amp; PEO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Turnkey HR Outsourcing &amp; Employer of Record (EOR)
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Hire talent in Sri Lanka within days, completely eliminating the time
              and capital required to establish a local subsidiary. We become the legal
              Employer of Record, managing onboarding, employment contracts, benefits,
              and compliance while you manage their daily workflow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Zero Local Entity Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Onboarding within 7 Business Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Hardware &amp; IT Stipend Logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Full Indemnification Against Liability</span>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/appointment">
                <Button variant="accent" className="font-bold">
                  Inquire About PEO &amp; EOR
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-slate-50 dark:bg-navy-950 p-2">
              <Image
                src="/images/services/outsourcing.svg"
                alt="HR Outsourcing and PEO Sri Lanka"
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
              <Link href="/events">
                <Button variant="accent" className="font-bold">
                  View Upcoming Workshops
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

      {/* Anchor 5: Payroll & Statutory Compliance */}
      <section id="payroll" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Payroll &amp; Labour Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Audit-Proof Payroll, EPF, ETF &amp; APIT Management
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Managing payroll in Sri Lanka requires adherence to complex statutory
              remittance schedules, dynamic APIT tax brackets, and Department of
              Labour regulations. We remove this administrative burden, providing
              guaranteed compliance, electronic payslips, and direct bank transfers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>EPF Monthly C-Form Filing (20%)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>ETF Board Remittances (3%)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>IRD APIT RAMIS Synchronization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Confidential Encrypted Payslips</span>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/appointment">
                <Button variant="accent" className="font-bold">
                  Schedule Payroll Consultation
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-slate-50 dark:bg-navy-950 p-2">
              <Image
                src="/images/services/payroll.svg"
                alt="Sri Lanka Payroll Services"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anchor 6: HR Consultancy */}
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

