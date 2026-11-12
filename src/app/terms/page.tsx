import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms & Conditions | Recruitment & Advisory Engagement Terms",
  description:
    "Terms and Conditions governing human resources consultancy, executive search, candidate placement, and managed payroll services by Prime Talents Solutions (Pvt) Ltd.",
};

export default function TermsConditionsPage() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-slate-200 dark:border-navy-800 pb-8">
        <Badge variant="teal">Legal Agreement</Badge>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Last Updated: January 1, 2025 • Governing all services rendered by {siteConfig.legalName}.
        </p>
      </div>

      {/* Body */}
      <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            1. Acceptance of Terms &amp; Definitions
          </h2>
          <p>
            These Terms &amp; Conditions govern the relationship between{" "}
            <strong>{siteConfig.legalName}</strong> (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) and any individual or corporate entity utilizing our digital platforms,
            recruitment services, executive search, employer-of-record infrastructure, or training
            masterclasses (&ldquo;Client&rdquo;, &ldquo;Candidate&rdquo;, or &ldquo;User&rdquo;).
          </p>
          <p>
            By accessing our website, booking an appointment, registering for events, or entering
            into an Executive Search Master Services Agreement (MSA), you agree to be bound by
            these terms in full.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            2. Recruitment &amp; Placement Services
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Candidate Introduction:</strong> An introduction is deemed to occur when
              we convey candidate details (orally, electronically, or in writing) to a Client.
            </li>
            <li>
              <strong>Twelve-Month Representation Window:</strong> If a Client engages or employs
              a candidate introduced by the Company within twelve (12) calendar months from the
              initial introduction date, the Client shall be liable for the standard recruitment
              fee, regardless of whether the hire was directly negotiated or routed via a third
              party.
            </li>
            <li>
              <strong>No Fee for Candidates:</strong> In strict alignment with Sri Lankan labor
              regulations, no candidate shall be subjected to fees, commissions, or payroll
              deductions for securing employment through the Company.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            3. 90-Day Placement Replacement Warranty
          </h2>
          <p>
            Unless explicitly modified in a custom service contract, all permanent placements
            carry a ninety (90) calendar day replacement warranty commencing from the
            candidate&apos;s first official day of employment, subject to the following prerequisites:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>The placement invoice has been settled in full within agreed credit terms (typically 14 calendar days).</li>
            <li>The termination was not triggered by organizational redundancy, business restructuring, or corporate acquisition.</li>
            <li>Written notice of departure is furnished to the Company within five (5) business days of the termination event.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            4. Statutory Payroll &amp; Compliance Obligations
          </h2>
          <p>
            Where the Company acts as managed payroll facilitator or Employer of Record (EOR),
            the Client agrees to provide accurate timesheets, gross salary parameters, and bonus
            data within agreed cutoff schedules. Statutory remittances (EPF, ETF, APIT) will be
            computed strictly in adherence to the guidelines of the Department of Labour and Inland
            Revenue Department of Sri Lanka.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            5. Intellectual Property &amp; Website Use
          </h2>
          <p>
            All content, graphics, custom SVG illustrations, research reports, and proprietary
            assessment frameworks displayed on this website are the intellectual property of{" "}
            {siteConfig.legalName}. Reproduction, scraping, or automated extraction of candidate
            listings or research content without prior written permission is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            6. Limitation of Liability
          </h2>
          <p>
            While the Company conducts thorough reference verifications, competency interviews,
            and background evaluations, the ultimate decision to employ a candidate rests solely
            with the Client. Under no circumstances shall the Company be held liable for indirect,
            punitive, or consequential damages arising from an employee&apos;s conduct, omissions,
            or performance following commencement of work.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            7. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These Terms &amp; Conditions and any non-contractual disputes arising hereunder shall
            be governed by and construed in accordance with the laws of the Democratic Socialist
            Republic of Sri Lanka. Any legal proceedings or dispute arbitrations shall be submitted
            to the exclusive jurisdiction of the competent courts of Colombo, Sri Lanka.
          </p>
        </section>
      </div>

      <div className="pt-8 border-t border-slate-200 dark:border-navy-800 flex items-center justify-between text-xs text-slate-500">
        <Link href="/privacy" className="hover:text-teal-600 underline">
          ← View Privacy Policy
        </Link>
        <Link href="/contact" className="hover:text-teal-600 underline">
          Contact Legal Counsel →
        </Link>
      </div>
    </div>
  );
}

