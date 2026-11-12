import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Candidate Privacy",
  description:
    "Privacy Policy for Prime Talents Solutions (Pvt) Ltd. Compliant with Sri Lanka Personal Data Protection Act No. 9 of 2022 (PDPA).",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-slate-200 dark:border-navy-800 pb-8">
        <Badge variant="teal">Legal &amp; Compliance</Badge>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Last Updated: January 1, 2025 • Effective for all operations in Sri Lanka and cross-border engagements.
        </p>
      </div>

      {/* Legal Text Body */}
      <div className="space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            1. Introduction &amp; Statutory Scope
          </h2>
          <p>
            {siteConfig.legalName} (operating commercially as &ldquo;{siteConfig.name}&rdquo;) is committed to preserving the privacy,
            confidentiality, and security of personal and corporate data entrusted to us.
          </p>
          <p>
            This Privacy Policy sets out how we collect, process, store, and disclose
            personal data in compliance with the **Personal Data Protection Act No. 9 of 2022
            (PDPA)** of Sri Lanka, international data protection standards, and guidelines
            issued by the Data Protection Authority of Sri Lanka.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            2. Personal Data We Collect
          </h2>
          <p>
            Depending on your relationship with us, we collect the following categories of data:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Candidate &amp; Job Seeker Data:</strong> Full legal name, National Identity
              Card (NIC) or passport number, contact details, curriculum vitae (CV), academic and
              professional credentials, employment history, compensation expectations, referee
              contact information, and psychometric assessment results (where agreed).
            </li>
            <li>
              <strong>Employer &amp; Corporate Client Data:</strong> Organization name, business
              registration (BR) number, registered address, authorized executive contact details,
              job requisition specifications, and financial details for invoicing and payroll
              disbursement.
            </li>
            <li>
              <strong>Digital Portal &amp; Usage Data:</strong> IP addresses, browser types,
              session duration, and interaction logs captured during visits to our web properties
              and digital career portal.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            3. Purpose of Data Processing
          </h2>
          <p>We process personal data strictly for legitimate operational purposes, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Evaluating candidate suitability for specific corporate vacancies.</li>
            <li>
              Presenting verified candidate shortlists to prospective employers (strictly upon
              prior candidate consent).
            </li>
            <li>
              Executing statutory payroll processing, including Employees&apos; Provident Fund
              (EPF), Employees&apos; Trust Fund (ETF), and Advance Personal Income Tax (APIT)
              withholding under the Department of Labour and Inland Revenue Department.
            </li>
            <li>
              Fulfilling contractual obligations under Employer of Record (EOR) and Professional
              Employer Organization (PEO) agreements.
            </li>
            <li>
              Communicating relevant market intelligence, masterclasses, and executive training
              updates.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            4. Candidate Confidentiality &amp; Consent
          </h2>
          <p>
            Under no circumstances do we broadcast, publish, or share candidate resumes with
            potential employers without first discussing the specific opportunity, employer identity,
            and role parameters with the candidate. Candidates maintain the absolute right to
            withdraw consent at any stage of the recruitment process.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            5. Data Retention &amp; Security Standards
          </h2>
          <p>
            We implement industry-grade technical and organizational safeguards, including
            256-bit SSL encryption, restricted role-based database access, and secure off-site
            backups. Candidate data is retained for a maximum duration of thirty-six (36) months
            following the last interaction, unless an active placement or ongoing statutory
            employment relationship necessitates longer preservation under Sri Lankan labor laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            6. Your Rights Under Sri Lankan PDPA
          </h2>
          <p>Subject to statutory exceptions, you are entitled to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Request access to personal data held by us concerning you.</li>
            <li>Request correction or rectification of incomplete or inaccurate records.</li>
            <li>
              Request erasure or de-registration from our active candidate database (&ldquo;Right
              to be Forgotten&rdquo;).
            </li>
            <li>Object to direct marketing or automated profiling.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            7. Data Protection Officer (DPO) Contact
          </h2>
          <p>
            To exercise your statutory data rights or file an inquiry regarding our compliance
            practices, contact our Data Protection Officer:
          </p>
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-xs sm:text-sm space-y-1">
            <p>
              <strong>Data Protection Officer</strong>
            </p>
            <p>{siteConfig.legalName}</p>
            <p>Level 14, West Tower, World Trade Center, Colombo 01, Sri Lanka</p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@primetalentssolutions.lk" className="text-teal-600 hover:underline">
                privacy@primetalentssolutions.lk
              </a>
            </p>
            <p>Direct Phone: {siteConfig.contact.phone}</p>
          </div>
        </section>
      </div>

      <div className="pt-8 border-t border-slate-200 dark:border-navy-800 flex items-center justify-between text-xs text-slate-500">
        <Link href="/terms" className="hover:text-teal-600 underline">
          View Terms &amp; Conditions →
        </Link>
        <Link href="/contact" className="hover:text-teal-600 underline">
          Contact Compliance Desk →
        </Link>
      </div>
    </div>
  );
}

