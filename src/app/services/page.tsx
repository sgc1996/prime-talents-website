import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  UserCheck,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Briefcase,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Practical Workforce & Recruitment Services | Prime Talents Solutions",
  description:
    "Explore Prime Talents Solutions practical workforce services in Sri Lanka: Precision Talent Sourcing, Job Portal for Professionals, End-to-End Permanent Hiring, Contract Staffing, and Readiness & Advisory.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* 1. Top Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="teal">HOW WE SUPPORT YOUR HIRING &amp; CAREER GOALS</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight max-w-3xl mx-auto">
          Practical Workforce &amp; Recruitment Services
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From rapid talent sourcing and full-cycle hiring to contract staffing and verified job access—explore how each service works for your team or career.
        </p>

        {/* 2. Quick Filter / Jump Pills */}
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
            Job Portal
          </a>
          <a
            href="#recruitment-solutions"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Permanent Hiring
          </a>
          <a
            href="#staffing"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Contract Staffing
          </a>
          <a
            href="#consultancy"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-xs"
          >
            Readiness &amp; Advisory
          </a>
        </div>
      </section>

      {/* 3. Block 1: Precision Talent Sourcing & Fast-Track Hiring */}
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
              When you have urgent openings and limited internal HR bandwidth, we step in to source, screen, and present interview-ready candidates quickly.
            </p>
            <div className="grid grid-cols-1 gap-3.5 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Role Brief &amp; Requirement Mapping:</strong> Aligning on must-have skills, salary range, and team expectations before searching
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Active &amp; Passive Candidate Outreach:</strong> Sourcing across relevant networks for junior, mid-level, and specialist roles
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Within 72 Hours Shortlist Delivery:</strong> Receiving a curated list of pre-screened profiles ready for your interviews
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">90-Day Replacement Guarantee:</strong> Post-placement protection if a hired candidate does not work out
                </span>
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
                alt="Precision Talent Sourcing Sri Lanka"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Block 2: Prime Talents Job Portal for Professionals */}
      <section id="job-portal" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:grid-flow-dense">
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Career Gateway &amp; Talent Access</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Prime Talents Job Portal for Professionals
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Built to connect Sri Lankan job seekers directly with genuine vacancies while giving employers an organized channel to reach screened, active applicants.
            </p>
            <div className="grid grid-cols-1 gap-3.5 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Verified Vacancy Listings:</strong> Genuine roles across IT, finance, sales, operations, and corporate sectors
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Simple Profile &amp; CV Submission:</strong> Easy application flow without confusing steps or hidden requirements
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Direct Interview Coordination:</strong> Timely updates on application status and interview schedules
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Pre-Screened Talent Access:</strong> Employers connect with active candidates matched to role criteria
                </span>
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
                alt="Prime Talents Job Portal for Professionals"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Block 3: End-to-End Recruitment & Talent Solutions */}
      <section id="recruitment-solutions" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>Full-Cycle Recruitment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              End-to-End Recruitment &amp; Talent Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Designed for businesses building core teams in Sri Lanka—we handle every hiring stage from initial search to offer acceptance and day-one joining.
            </p>
            <div className="grid grid-cols-1 gap-3.5 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Hiring Strategy &amp; Role Scoping:</strong> Structuring clear job descriptions and realistic hiring timelines
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Multi-Stage Screening &amp; Reference Checks:</strong> Evaluating technical skills, communication, and past work reliability
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Interview &amp; Offer Management:</strong> Coordinating schedules, candidate feedback, and salary negotiations
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Onboarding Follow-Through:</strong> Supporting smooth documentation and joining transitions for new hires
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
                alt="End-to-End Recruitment & Talent Solutions Lifecycle"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Block 4: Staff Augmentation & Contract Staffing */}
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
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Bring in pre-vetted professionals on flexible terms to handle project deadlines, seasonal workloads, or specialized skill gaps without long-term overhead.
            </p>
            <div className="grid grid-cols-1 gap-3.5 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Rapid Resource Deployment:</strong> Onboard contract specialists quickly when project timelines are tight
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Flexible Contract Structures:</strong> Project-based, fixed-term, or contract-to-hire arrangements
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Attendance &amp; Contractor Coordination:</strong> Ongoing administrative tracking and smooth communication during the contract
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-navy-950 dark:text-white">Credential &amp; Background Verification:</strong> Confirmed qualifications and work history prior to deployment
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

      {/* 7. Bottom Section: Candidate Readiness & Hiring Advisory (4 Cards) */}
      <section id="consultancy" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge variant="teal">CANDIDATE READINESS &amp; ADVISORY</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy-950 dark:text-white">
              Practical Preparation &amp; Hiring Guidance
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Focused support to help job seekers present their strengths clearly and help businesses plan effective hiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-900 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="font-heading font-bold text-base text-navy-950 dark:text-white">
                  CV &amp; Profile Structuring
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Organizing experience, skills, and achievements into clear, recruiter-ready profiles.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                Recruiter-Ready
              </div>
            </Card>

            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-900 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="font-heading font-bold text-base text-navy-950 dark:text-white">
                  Interview Readiness
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Practical preparation covering role expectations, communication, and common interview scenarios.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                Role Alignment
              </div>
            </Card>

            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-900 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="font-heading font-bold text-base text-navy-950 dark:text-white">
                  Role &amp; Budget Benchmarking
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Guidance on realistic salary ranges and skill requirements in the Sri Lankan market.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                Market Insights
              </div>
            </Card>

            <Card className="p-6 space-y-3 bg-white dark:bg-navy-950 border-slate-200 dark:border-navy-800 flex flex-col justify-between hover:shadow-lg hover:border-teal-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-navy-900 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="font-heading font-bold text-base text-navy-950 dark:text-white">
                  Career &amp; Team Planning
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Straightforward advice for professionals navigating career moves and teams scaling headcount.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                Sustainable Growth
              </div>
            </Card>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 dark:border-navy-800">
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
              Need a tailored hiring or staffing plan?
            </p>
            <Link href="/appointment">
              <Button variant="accent" size="lg" className="font-bold">
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
