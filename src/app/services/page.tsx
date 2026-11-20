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
  title: "Recruitment & Talent Services | Prime Talents Solutions",
  description:
    "Explore Prime Talents Solutions full suite of workforce capabilities in Sri Lanka: Talent Sourcing (#recruitment), Job Portal (#job-portal), End-to-End Recruitment (#recruitment-solutions), Staff Augmentation (#staffing), and Hiring Advisory (#consultancy).",
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
            href="#recruitment-solutions"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            End-to-End Recruitment
          </a>
          <a
            href="#staffing"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Staff Augmentation
          </a>
          <a
            href="#consultancy"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Hiring Advisory
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
                <span>3–5 Business Days Shortlist Turnaround</span>
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
              verified positions across Sri Lanka&apos;s leading enterprises and growing businesses.
              Enjoy transparent salary bands, fast application tracking,
              and interview preparation resources.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Transparent Salary Bands</span>
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

      {/* Anchor 3: End-to-End Recruitment & Talent Solutions */}
      <section id="recruitment-solutions" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Full-Lifecycle Recruitment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              End-to-End Recruitment &amp; Talent Solutions
            </h2>
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
              Build and scale your core team in Sri Lanka faster, without the internal hiring bottleneck.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you are a growing local business or an international company
              establishing a long-term presence, our dedicated recruitment team manages
              the entire permanent hiring lifecycle—from sourcing to onboarding—so you
              can focus on your core operations.
            </p>
            <div className="grid grid-cols-1 gap-3.5 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Core Team &amp; Long-Term Hiring:</strong> Connecting you with dependable professionals suited for ongoing and core roles.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Customized Hiring Support:</strong> Tailored recruitment strategies for executive, mid-level, and operational positions.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Thorough Screening &amp; Reference Checks:</strong> Structured interviews and verified background checks before shortlisting.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Seamless Onboarding Coordination:</strong> Smooth offer management and joining support for a great candidate experience.
                </span>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/appointment">
                <Button variant="accent" className="font-bold">
                  Start Permanent Hiring
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-slate-50 dark:bg-navy-950 p-2">
              <Image
                src="/images/services/recruitment-lifecycle.svg"
                alt="End-to-End Recruitment Solutions Sri Lanka"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anchor 4: Staff Augmentation & Contract Staffing */}
      <section id="staffing" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:grid-flow-dense">
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Workforce Scalability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Staff Augmentation &amp; Contract Staffing
            </h2>
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
              Scale project and operational capacity rapidly with pre-vetted temporary professionals.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether bridging specialized skill gaps for a high-priority tech project or scaling
              seasonal operational capacity, our flexible contract staffing solutions connect you
              with verified professionals ready to contribute from day one.
            </p>
            <div className="grid grid-cols-1 gap-3.5 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Rapid Deployment:</strong> Immediate access to vetted technical and corporate specialists without long hiring cycles.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Flexible Engagement Models:</strong> Choose from project-based, fixed-term contract, or contract-to-hire arrangements.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Operational &amp; Attendance Management:</strong> Seamless onboarding along with ongoing attendance and contractor coordination.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Strict Credential Verification:</strong> Comprehensive background screening to ensure reliability and compliance.
                </span>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/appointment">
                <Button variant="accent" className="font-bold">
                  Inquire About Contract Staffing
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-1">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-slate-50 dark:bg-navy-950 p-2">
              <Image
                src="/images/services/staff-augmentation.svg"
                alt="Staff Augmentation and Contract Staffing Sri Lanka"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anchor 5: Candidate Readiness & Hiring Advisory */}
      <section id="consultancy" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge variant="teal">Advisory Practice</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Candidate Readiness &amp; Hiring Advisory
            </h2>
            <p className="text-base font-semibold text-teal-700 dark:text-teal-400">
              Bridging the gap between talent acquisition and day-one performance.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Beyond sourcing the right candidates, we equip growing businesses with practical hiring
              insights and candidate preparation—ensuring your new hires integrate smoothly, adapt to
              your culture, and stay longer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-900 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="font-heading font-bold text-base text-navy-950 dark:text-white">
                  Interview &amp; Assessment Frameworks
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Custom interview guides and behavioral screening to help your managers pick the best cultural fit.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                High-Accuracy Selection
              </div>
            </Card>

            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-900 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="font-heading font-bold text-base text-navy-950 dark:text-white">
                  Early Retention &amp; Integration Support
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Post-offer engagement and structured orientation guidance to prevent early drop-offs and accelerate onboarding.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                Reduced Drop-Offs
              </div>
            </Card>

            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-900 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="font-heading font-bold text-base text-navy-950 dark:text-white">
                  Sri Lankan Market &amp; Salary Benchmarking
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Up-to-date insights on local salary trends, talent availability, and role expectations across Sri Lankan sectors.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                Competitive Compensation
              </div>
            </Card>

            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-900 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="font-heading font-bold text-base text-navy-950 dark:text-white">
                  Workplace Readiness &amp; Soft-Skills Coaching
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tailored communication and professional etiquette coaching for candidates prior to joining for immediate impact.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                Day-One Readiness
              </div>
            </Card>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 dark:border-navy-800">
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
              Need tailored guidance for your hiring strategy?
            </p>
            <Link href="/appointment">
              <Button variant="accent" size="lg" className="font-bold">
                <span>Book an Advisory Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

