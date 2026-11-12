"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import { siteConfig } from "@/lib/constants";

interface FAQItem {
  q: string;
  a: string;
  category: "employers" | "jobseekers" | "payroll" | "pricing";
}

const FAQ_DATA: FAQItem[] = [
  {
    category: "employers",
    q: "How does your executive search and recruitment process work?",
    a: "We begin with a strategic discovery session to profile your role, company culture, compensation parameters, and ideal candidate persona. Our consultants tap into passive talent networks across Sri Lanka and regional hubs, conduct behavioral and competency vetting, and present a curated shortlist within 72 hours.",
  },
  {
    category: "employers",
    q: "Do you offer a candidate replacement guarantee?",
    a: "Yes. All our permanent executive and professional placements are backed by an industry-leading 90-day replacement warranty. If a placed candidate departs or fails to meet defined probation criteria within this period, we provide an equivalent replacement at zero additional recruitment cost.",
  },
  {
    category: "employers",
    q: "Can you assist international companies looking to hire in Sri Lanka without establishing a local entity?",
    a: "Absolutely. Through our Employer of Record (EOR) and Professional Employer Organization (PEO) services, we legally employ the talent on your behalf in Sri Lanka. We manage local employment contracts, EPF/ETF contributions, tax deductions, and benefits administration while you maintain 100% operational direction.",
  },
  {
    category: "jobseekers",
    q: "Do job seekers pay any fees to Prime Talents Solutions?",
    a: "Never. Under our strict ethical charter and Sri Lankan Department of Labour regulations, we never charge candidates for job placement, CV registration, or interview scheduling. Our recruitment services are entirely employer-funded.",
  },
  {
    category: "jobseekers",
    q: "How do I submit my CV and apply for active vacancies?",
    a: "You can submit your resume directly through our dedicated Job Seeker Portal. Our system parses your experience and skills, matching you with relevant open roles across IT, finance, apparel, logistics, and engineering.",
  },
  {
    category: "jobseekers",
    q: "Will my current employer know that I am exploring new opportunities?",
    a: "We maintain absolute confidentiality. We will never share your profile, CV, or employment history with any potential employer without your explicit prior authorization.",
  },
  {
    category: "payroll",
    q: "What statutory payroll deductions are mandatory under Sri Lankan Labour Law?",
    a: "Under the EPF Act No. 15 of 1958 and ETF Act No. 46 of 1980, the mandatory statutory deductions are: Employee EPF (minimum 8%), Employer EPF (minimum 12%), and Employer ETF (3%). In addition, Advance Personal Income Tax (APIT) must be withheld at source for employees earning above the statutory monthly tax threshold (currently LKR 100,000).",
  },
  {
    category: "payroll",
    q: "What is your payroll turnaround time and reporting frequency?",
    a: "We operate on your established monthly pay cycle. Monthly salary calculations, encrypted digital payslips, electronic bank transfer files, and statutory C-Form reconciliations are finalized and delivered 3 business days prior to your monthly pay date.",
  },
  {
    category: "pricing",
    q: "What are your recruitment engagement and fee structures?",
    a: "For permanent placements, we operate on a success-fee model (a percentage of the candidate's first-year gross annual remuneration, payable only once the candidate commences employment). For retained executive search (C-suite/VP), we offer milestone-based retained arrangements. PEO/EOR and managed payroll services are billed as predictable monthly per-employee service fees.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="teal">Help &amp; Guidance</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Clear answers about our recruitment models, statutory payroll compliance,
          candidate privacy, and Employer of Record (EOR) infrastructure.
        </p>

        {/* Real-time Search Input */}
        <div className="max-w-xl mx-auto pt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by keyword (e.g. EPF, replacement guarantee, fees, job portal)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm text-navy-950 dark:text-white"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "all", label: "All Questions" },
            { id: "employers", label: "For Employers" },
            { id: "jobseekers", label: "For Job Seekers" },
            { id: "payroll", label: "Payroll & EPF/ETF" },
            { id: "pricing", label: "Pricing & Models" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-navy-900 text-white dark:bg-teal-500 dark:text-navy-950 shadow-sm"
                  : "bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-800 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 p-8 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
              No matching answers found
            </h3>
            <p className="text-sm text-slate-500">
              Try a different keyword or contact our Colombo advisory desk directly.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              title={faq.q}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <p>{faq.a}</p>
            </AccordionItem>
          ))
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-navy-950 text-white border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl sm:text-2xl">
              Still have questions about our services?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our Colombo recruitment and compliance specialists are available to guide you.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button variant="accent" className="font-bold flex items-center gap-2">
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

